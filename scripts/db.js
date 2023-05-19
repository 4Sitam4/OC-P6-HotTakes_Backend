// Fichier permettant la connexion à la base de données MongoDB Atlas via mongoose

// Importation de mongoose
const mongoose = require('mongoose');

// Connexion à la base de données MongoDB Atlas
mongoose.connect('mongodb+srv://admin:admindbpassword@cluster0.ugojq2b.mongodb.net/P6-OpenClassrooms?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// Affichage dans la console si la connexion à MongoDB est réussie ou échouée
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => console.log('Connexion à MongoDB échouée !', error));
