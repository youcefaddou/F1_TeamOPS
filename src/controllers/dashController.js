const axios = require('axios');
const fs = require('fs');
const dateService = require('../services/dateService');


exports.getDashboard = async (req, res) => {
    try {
        let driversData = []
        let teamsData = []
        let racesData = []
        try {
            const data = fs.readFileSync('data/drivers.json', 'utf8')
            const teams = fs.readFileSync('data/teams.json', 'utf8')
            const races = fs.readFileSync('data/races.json', 'utf8')
            driversData = JSON.parse(data)
            teamsData = JSON.parse(teams)
            racesData = JSON.parse(races)
        } catch (error) {
            console.error('Erreur lecture drivers.json: ', error.message)
        }
        res.render('pages/dashboard', {
            title: 'Classement des pilotes',
            drivers: driversData,
            teams: teamsData,
            nextRaces: dateService.getNextRaces(racesData, 3),
        })
    } catch (error) {
        console.error('Erreur dans getDashboard: ', error);
        res.status(500).send('Erreur serveur');
    }
}

exports.getGrandPrix = async (req, res) => {
    try {
        let racesData = [];
        try {
            const races = fs.readFileSync('data/races.json', 'utf8');
            racesData = JSON.parse(races);
        } catch (error) {
            console.error('Erreur lecture races.json:', error.message);
        }
        
        // Séparer les courses passées et futures
        const { pastRaces, futureRaces } = dateService.separateRaces(racesData);
        
        res.render('pages/grandprix', {
            title: 'Calendrier des Grands Prix F1 2025',
            allRaces: racesData,
            pastRaces: pastRaces,
            futureRaces: futureRaces
        });
    } catch (error) {
        console.error('Erreur dans getGrandPrix:', error);
        res.status(500).send('Erreur serveur');
    }
};