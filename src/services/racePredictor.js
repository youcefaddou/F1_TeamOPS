const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-backend-cpu');
const fs = require('fs');

class RacePredictor {
    constructor() {
        this.model = null;
        // Initialiser le backend CPU
        tf.setBackend('cpu')
    }    //fonction simple pour preparer les data
    prepareData() {
        try {
            //charger les vraies données des pilotes 2025
            const driversData = JSON.parse(fs.readFileSync('./data/drivers.json', 'utf8'));
            //charger les données des constructeurs 2025
            const teamsData = JSON.parse(fs.readFileSync('./data/teams.json', 'utf8'));

            //filtrer pour exclure Jack Doohan et ne garder que les 20 premiers
            const filteredDrivers = driversData
                .filter(driver => driver.name !== "Doohan") 
                .slice(0, 20); 

            const features = [];
            const labels = [];

            //pour chaque pilote, on crée des features améliorées
            filteredDrivers.forEach(driver => {
                const currentPoints = parseInt(driver.points) || 0;
                const currentPosition = parseInt(driver.position) || 20;
                
                // Trouver la performance de l'équipe du pilote
                const teamPerformance = this.getTeamPerformance(driver.team, teamsData);

                // Features améliorées : [points pilote, position pilote, performance équipe, forme récente]
                features.push([
                    currentPoints / 200, // Normalisation points pilote (max Piastri 198)
                    (21 - currentPosition) / 20, // Position pilote inversée et normalisée
                    teamPerformance, // Performance de l'équipe (0 à 1)
                    Math.random() * 0.2 + 0.4 // Facteur forme du jour
                ]);

                //label = position predite (on inverse la logique pour l'entraînement)
                labels.push([(21 - currentPosition) / 20]);
            });

            return { features, labels, drivers: filteredDrivers, teams: teamsData };
        } catch (error) {
            console.error('Erreur préparation des données :', error);
            return null
        }
    }

    // Fonction pour calculer la performance d'une équipe
    getTeamPerformance(driverTeam, teamsData) {
        // Normaliser les noms d'équipes pour matcher
        const teamMappings = {
            'McLaren': 'McLaren',
            'Mercedes': 'Mercedes', 
            'Ferrari': 'Ferrari',
            'Red Bull Racing': 'Red Bull Racing',
            'Williams': 'Williams',
            'Haas': 'Haas',
            'Racing Bulls': 'Racing Bulls',
            'Aston Martin': 'Aston Martin',
            'Kick Sauber': 'Kick Sauber',
            'Alpine': 'Alpine'
        };

        const normalizedDriverTeam = teamMappings[driverTeam] || driverTeam;
        
        // Trouver l'équipe dans les données
        const team = teamsData.find(t => t.team === normalizedDriverTeam);
        
        if (!team) {
            console.log(`Équipe non trouvée: ${driverTeam} -> ${normalizedDriverTeam}`);
            return 0.3; // Performance par défaut
        }

        const teamPoints = parseInt(team.points) || 0;
        const teamPosition = parseInt(team.position) || 10;
        
        // Calcul basé sur les points et la position (McLaren sera très fort)
        const pointsScore = teamPoints / 374; // McLaren a 374 points max
        const positionScore = (11 - teamPosition) / 10; // Position inversée
        
        return Math.min(1, (pointsScore + positionScore) / 2);
    }    async createSimpleModel() {
        this.model = tf.sequential({
            layers: [
                tf.layers.dense({ inputShape: [4], units: 12, activation: 'relu' }), // 4 features maintenant
                tf.layers.dense({ units: 8, activation: 'relu' }),
                tf.layers.dense({ units: 4, activation: 'relu' }),
                tf.layers.dense({ units: 1, activation: 'sigmoid' })
            ]
        })
        this.model.compile({
            optimizer: 'adam',
            loss: 'meanSquaredError',
        })
    }
    async trainModel() {
        const data = this.prepareData()
        if (!data) return false

        await this.createSimpleModel()
        const xs = tf.tensor2d(data.features)
        const ys = tf.tensor2d(data.labels)

        // entrainement du modele 
        await this.model.fit(xs, ys, {
            epochs: 50,
            verbose: 0
        })
        return true
    }    //predire les resultats de la prochaine course
    async predictNextRace() {
        if (!this.model) {
            await this.trainModel()
        }
        try {
            const data = this.prepareData();
            if (!data) return [];

            const predictions = [];

            for (const driver of data.drivers) {
                const currentPoints = parseInt(driver.points) || 0;
                const currentPosition = parseInt(driver.position) || 20;
                
                // Calculer la performance de l'équipe du pilote
                const teamPerformance = this.getTeamPerformance(driver.team, data.teams);
                
                const features = tf.tensor2d([[
                    currentPoints / 200, // Points pilote normalisés
                    (21 - currentPosition) / 20, // Position pilote
                    teamPerformance, // Performance équipe (McLaren sera très fort !)
                    Math.random() * 0.2 + 0.4 // Forme du jour
                ]]);

                const prediction = this.model.predict(features);
                const result = await prediction.data();

                // Score basé sur le modèle + bonus équipe fort
                let predictionScore = result[0];
                
                // Bonus pour les équipes performantes (McLaren, Mercedes, Ferrari)
                if (driver.team === 'McLaren') predictionScore += 0.15; // McLaren très fort
                else if (driver.team === 'Mercedes') predictionScore += 0.10;
                else if (driver.team === 'Ferrari') predictionScore += 0.08;
                else if (driver.team === 'Red Bull Racing') predictionScore += 0.05;
                
                // Facteur aléatoire pour la variabilité
                predictionScore += (Math.random() * 0.2 - 0.1);

                predictions.push({
                    name: driver.name,
                    team: driver.team,
                    currentPosition: driver.position,
                    predictionScore: predictionScore,
                    teamPerformance: Math.round(teamPerformance * 100),
                    confidence: Math.round(result[0] * 100)
                });

                // nettoyer la mémoire
                features.dispose();
                prediction.dispose();
            }

            //trier par score de prédiction (décroissant) et assigner les positions P1 à P20
            predictions.sort((a, b) => b.predictionScore - a.predictionScore);

            // assigner les positions de P1 à P20 et calculer les points
            predictions.forEach((pred, index) => {
                pred.predictedPosition = index + 1;
                pred.predictedPoints = this.calculatePoints(pred.predictedPosition);
                // nettoyer le score temporaire
                delete pred.predictionScore;
            });

            return predictions;
        } catch (error) {
            console.error("Erreur prediction :", error)
            return []
        }
    }
    //Systeme de points simplifié 
    calculatePoints(position) {
        const pointsSystem = {
            1: 25, 2: 18, 3: 15, 4: 12, 5: 10,
            6: 8, 7: 6, 8: 4, 9: 2, 10: 1
        }
        return pointsSystem[position] || 0; //si pas de points pour la position, retourne 0
    }
}

module.exports = RacePredictor

