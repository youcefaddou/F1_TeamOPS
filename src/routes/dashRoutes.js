const express = require('express');
const router = express.Router();
const dashController = require('../controllers/dashController');
const authguard = require('../services/authguard');
const predictionController = require('../controllers/predictionController')


router.get('/dashboard', authguard, dashController.getDashboard);
router.get('/grandprix', authguard, dashController.getGrandPrix);
router.get('/prediction', authguard, predictionController.getPrediction)
router.post('/prediction', authguard, predictionController.postPrediction);

module.exports = router;