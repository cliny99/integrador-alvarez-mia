const { Product } = require('../../database/models');

module.exports = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.render('index', { title: 'Euge Creación', products });
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error al cargar la página principal');
    }
};