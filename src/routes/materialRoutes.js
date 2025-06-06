const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const authguard = require("../services/authguard");

router.get('/materials', authguard, materialController.getMaterials);

// Ajout des routes pour chaque matériel du carousel
// router.get('/materials/car', authguard, (req, res) => {
//     res.render('pages/car.twig', { team: req.session.team });
// });
router.get('/materials/car', authguard, materialController.getCar);
router.post('/materials/car', authguard, materialController.postCar);
router.post('/materials/car/edit', authguard, materialController.editCar);
router.post('/materials/car/delete', authguard, materialController.deleteCar);


router.get('/materials/engine', authguard, (req, res) => {
    res.render('pages/engine.twig', { team: req.session.team });
});
router.get('/materials/parts', authguard, (req, res) => {
    res.render('pages/parts.twig', { team: req.session.team });
});
router.get('/materials/tyres', authguard, (req, res) => {
    res.render('pages/tyres.twig', { team: req.session.team });
});

module.exports = router;