//Import du package bcrypt 
const bcrypt = require('bcrypt');

//Import du package jsonwebtoken
const jwt = require('jsonwebtoken');

//Import du modele de données User pour utilisation
const User = require('../models/User');

//Import du package dotenv pour accès aux variables d'environnement
require('dotenv').config();

//Création et enregistrement des nouveaux utilisateurs
exports.signup = async (req, res, next) => {
    //Vérification de la longueur du mot de passe
    if(req.body.password.length < 6) {
        return res.status(400).json({ message: 'Le mot de passe doit contenir au moins 6 caractères!' });
    }
    //Hachage du mot de passe avec bcrypt
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            email: req.body.email,
            password: hash
        });
        await user.save();
        res.status(201).json({ message: 'Utilisateur créé !' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};


//Gestion de la connexion des utilisateurs
exports.login = async (req, res, next) => {
    //Vérification si l'utilisateur existe déjà et si le mot de passe correspond
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: 'identifiant/mot de passe incorrect'});
        }
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) {
            return res.status(401).json({ message: 'identifiant/mot de passe incorrect'});
        }
        const token = jwt.sign(
            { userId: user._id },
            process.env.TOKEN_AUTH,
            { expiresIn: '24h'}
        );
        res.status(200).json({
            userId: user._id,
            token: token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};