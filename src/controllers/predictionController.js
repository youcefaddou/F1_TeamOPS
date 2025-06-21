const RacePredictor = require('../services/racePredictor')
const fs = require('fs')

exports.getPrediction = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login')
        }
        
        // Charger les vraies données des pilotes 2025
        let driversData = [];
        try {
            const drivers = fs.readFileSync('./data/drivers.json', 'utf8');
            const allDrivers = JSON.parse(drivers);
            
            // Filtrer pour exclure Jack Doohan et ne garder que les 20 premiers
            driversData = allDrivers
                .filter(driver => driver.name !== "Doohan")
                .slice(0, 20);
        } catch (error) {
            console.error("Erreur lecture des fichiers :", error.message);
        }

        res.render('pages/prediction.twig', {
            title: 'Prédiction de Course par IA',
            drivers: driversData,
            team: req.session.team,
        })
    } catch (error) {
        console.error("Erreur dans getPrediction :", error)
    }
}
exports.postPrediction = async (req, res) => {
    try {
        if (!req.session.team) {
            return res.redirect('/login')
        }
        const racePredictor = new RacePredictor()
        const predictions = await racePredictor.predictNextRace()
        res.json({success: true, predictions})
    } catch(error) {
        console.error("Erreur prédiction :", error)
            res.json({success: false, error: 'Erreur lors de la prédiction'})
    }
}