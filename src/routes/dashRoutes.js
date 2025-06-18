const express = require('express');
const router = express.Router();
const dashController = require('../controllers/dashController');
const authguard = require('../services/authguard');



router.get('/dashboard', dashController.getDashboard);
router.get('/grandprix', authguard, dashController.getGrandPrix);


module.exports = router;