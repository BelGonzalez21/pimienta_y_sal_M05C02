const products = require('../data/products');//js

module.exports = {
    login: (req, res) => {
        return res.render('index', {
            user: 'Fulanito',
            platos : products
        })
    },
    logout : (req, res) => {
        return res.render('index', {
            platos: products
        })
        
    }
}