//Import du package jsonwebtoken
const jwt = require('jsonwebtoken');

//Import du package dotenv pour accès aux variables d'environnement
require('dotenv').config();

//Mise en place du token d'authentification
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_AUTH);
        const userId = decodedToken.userId;
        req.auth = { userId: userId };
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};