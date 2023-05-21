//Import du package multer
const multer = require('multer');

//Préparation d'un dictionnaire formats images 
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp'  // Ajout de la prise en charge des fichiers .webp
};


//Création d'un objet de configuration pour multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
  },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
  }
});

//Exportation du multer configuré
module.exports = multer({ storage: storage }).single('image'); 