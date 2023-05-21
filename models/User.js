//Import de Mongoose pour utilisation
const mongoose = require('mongoose');

//Ajout de unique validator pour éviter d'avoir plusieurs utilisateurs avec la même adresse mail
const uniqueValidator = require('mongoose-unique-validator');

//Création du schéma de données Utilisateur
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//Application du validateur au schéma 
userSchema.plugin(uniqueValidator);

//Export du modèle pour exploitation
module.exports = mongoose.model('User', userSchema);

