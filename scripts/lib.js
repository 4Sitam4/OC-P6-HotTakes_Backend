
// Importer le module mongoose
require('./db');
const User = require('../models/User');

// Fonction permettant de créer un nouvel utilisateur dans la base de données
function signup(userEmail,userPassword) {
    // Créer un nouvel utilisateur composé d'un email et d'un mot de passe
    const user = new User({
        email: userEmail,
        password: userPassword
        });
    // Sauvegarder l'utilisateur dans la base de données
    return user.save()
        .then(user => {
            console.log(user); // Afficher l'utilisateur créé
            return { message: 'Utilisateur créé!' };
        })
        .catch(error => {
            console.error(error); // Afficher l'erreur
            return { error: error.message };
        });
}

// Exporter la fonction signup
module.exports = {signup};