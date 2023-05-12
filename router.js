const router = require('express').Router();
const userFunc = require('./scripts/basique');

router.get('/', async (req, res) => {
    res.send(userFunc.hello());
});

module.exports = router;