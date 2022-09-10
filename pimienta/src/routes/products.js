var express = require('express');
var router = express.Router();
const { detail} =require('../controllers/productsController') //se saca los dos puntos.

/* GET products listing. */
router.get('/detail/:id', detail);

module.exports = router;