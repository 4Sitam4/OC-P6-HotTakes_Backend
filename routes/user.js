//Création du router avec la méthode router d'express
const express = require('express');
const router = express.Router();

//Import du controller user
const userCtrl = require('../controllers/user');

//Enregistrement des routes de connexion et de création de compte
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//Exportation du router
module.exports = router;