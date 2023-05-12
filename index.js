//init app express
const express = require('express');

//init body-parser
const bodyParser = require('body-parser');

//import routes
const router = require('./router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router)


app.listen(4000, () => {
    console.log('app listening on port 4000!');
});