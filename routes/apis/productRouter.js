const productController = require('../../controllers/dashboard/productController');
const express = require('express'); 
const router = express.Router();

router.get('/', productController.getAllProducts);

router.post('/create', productController.createProduct); 

router.get('/:id', productController.getProductById); 

router.put('/:id', productController.updateProduct); 

router.delete('/:id', productController.deleteProduct); 

module.exports = router;