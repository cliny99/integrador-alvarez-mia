const db = require('../../database/models');
const products = db.Product;
const Category = db.Category;
const ProductDetail = db.ProductDetail;
exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await products.findAll();
    res.status(200).json(allProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
exports.getProductById = async (req, res) => { 
  const productId = req.params.id;
  try {
    const product = await products.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

 exports.createProduct = async (req, res) => {
   const { name, price, stock, image,product_detail_id, category_id } = req.body;
   try {
     const newProduct = await products.create({ name, price, stock, image,product_detail_id, category_id });
     res.status(201).json(newProduct);   } catch (error) {
     console.error('Error creating product:', error);
     res.status(500).json({ error: 'Internal server error' });
   }
 }
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, price, stock, image } = req.body;
  try {
    const product = await products.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.update({ name, price, stock, image });
    res.json({ success: true, updatedProduct: product });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await products.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
exports.getProductsByName = async (req, res) => {
  const productName = req.params.name;
  try {
    const productsByName = await products.findAll({
      where: { name: productName }
    });
    res.status(200).json(productsByName);
  } catch (error) {
    console.error('Error fetching products by name:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.getCategoriesAndDetails = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name'] 
    });

    const details = await ProductDetail.findAll({
      attributes: ['id', 'fabric']
    });

    res.json({ categories, details });
  } catch (error) {
    console.error("Error en getCategoriesAndDetails:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
