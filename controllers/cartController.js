const db = require('../database/models');
const products = db.Product;

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await products.findAll();
    res.render('cart', { title: 'Tu carrito de compras', products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}