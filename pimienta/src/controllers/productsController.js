const products = require('../data/products');//js

module.exports = {
    detail: (req, res) => {
        let plato = products.find(plato => plato.id === +req.params.id);
        return res.render('detalleMenu', {
            plato
        }) 
    }
}