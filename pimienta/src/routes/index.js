var express = require('express');
var router = express.Router();
const {index} =require('../controllers/indexController') //se saca los dos puntos.

/* GET index listing. */
router.get('/',index);

module.exports = router;
