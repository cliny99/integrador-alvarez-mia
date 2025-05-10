const { Product } = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.render('dashboard', { title: 'Dashboard', products });
    } catch (error) {
        console.error('Error al cargar dashboard:', error);
        res.status(500).send('Error al cargar dashboard');
    }
};  