//User Route
const router = require('express').Router();


const controller = require('./controller');
//Login route létrehozása, login kontroller létrehozása
router.post('/login', controller.login);

module.exports = router;