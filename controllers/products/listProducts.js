const { Product } = require('../../database/models'); // Adjust the path to your models
console.log('Product:', Product);
module.exports = async (req, res) => {
    try {
        const products = await Product.findAll({ limit: 8 });
        res.render('index', { title: 'Euge Creación', products });
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error al cargar la página principal');
    }
};