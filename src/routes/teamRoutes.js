const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const dashController = require('../controllers/dashController'); 
const hashPasswordExtension = require('../services/extensions/hashPasswordExtension');
const { PrismaClient } = require('../../prismaclient'); 
const prisma = new PrismaClient({}).$extends(hashPasswordExtension);
const multer = require('multer');
const path = require('path');
const authguard = require('../services/authguard');

// Config Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/avatars');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get('/register', teamController.getRegister)
router.post('/register', teamController.postRegister); 
router.get('/login', teamController.getLogin);
router.post('/login', teamController.postLogin);
router.get('/logout', teamController.getLogout);
router.get('/dashboard', dashController.getDashboard); 

router.get('/members', teamController.getMembers);
router.post('/members/add', upload.single('avatar'), teamController.postMembers);
router.get('/members/edit/:id', authguard, teamController.getEditMember);
router.post('/members/edit/:id', authguard, upload.single('avatar'), teamController.postEditMember);
router.get('/members/delete/:id', authguard, teamController.deleteMember);
router.post('/members/delete/:id', authguard, teamController.deleteMember);
// router.get('/members/assign/:id', teamController.getAssignMember);
// router.post('/members/assign/:id', teamController.postAssignMember);

module.exports = router;
