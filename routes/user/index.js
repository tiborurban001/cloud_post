//User Route
const router = require('express').Router();


const controller = require('./controller');
//Login route létrehozása, login kontroller létrehozása
router.post('/login', controller.login);
//register route
router.post('/register', controller.register);

module.exports = router;