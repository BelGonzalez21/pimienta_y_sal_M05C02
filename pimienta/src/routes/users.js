var express = require('express');
var router = express.Router();
const {login, logout} = require('../controllers/usersController');

/* GET users listing. */
router.get('/login',login);
router.get('/logout',logout);

module.exports = router;
