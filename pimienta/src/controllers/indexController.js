const products = require('../data/products'); //js, contiene la base de datos.

module.exports={
    index: (req, res) => {
        return res.render('index', {
            platos : products //js
        })
    },
    detail : (req, res) => {
        let plato = products.find(plato => plato.id === +req.params.id);
        return res.render('detalleMenu', {
            plato //la variable
        })
    }
}