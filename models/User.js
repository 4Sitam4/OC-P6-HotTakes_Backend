// models/User.js

// Importation de mongoose
const mongoose = require('mongoose');

// Création du schéma de données pour les utilisateurs
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Ajoutez ici d'autres champs selon vos besoins
});

module.exports = mongoose.model('users', UserSchema);
