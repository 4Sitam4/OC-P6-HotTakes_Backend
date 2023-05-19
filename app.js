// ------------------ Import ------------------ //
//import app express
const express = require('express');
//import routes
const router = require('./router');



// ------------------ Main app ------------------ //
//init app express
const app = express();

// parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init routes
app.use(router)


// ------------------ Start server ------------------ //
app.listen(4000, () => {
    console.log('app listening on port 4000!');
});