//Import d'Express
const express = require('express');

//Import du package Mongoose pour faciliter les interactions avec la base de données MongoDB
const mongoose = require('mongoose');

//Import du package dotenv pour accès aux variables d'environnement
require('dotenv').config();

//Import du path qui donne accès au système fichier
const path = require('path');

//Import du package CORS
const cors = require('cors');

//Import du router sauce
const sauceRoutes = require('./routes/sauce')

//Import du router utilisateur
const userRoutes = require('./routes/user');

//Lancement de l'application express
const app = express();

//Connexion à la base de données
mongoose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

//Analyse et formatage du corps des requêtes
app.use(express.json());

//Correction des erreurs CORS
app.use(cors());

//Utilisation des routeurs
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

//Gestion du routage pour les images
app.use('/images', express.static(path.join(__dirname, 'images')));

//Export de l'application
module.exports = app;
