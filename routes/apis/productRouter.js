const productController = require('../../controllers/dashboard/productController');
const express = require('express'); 
const router = express.Router();

router.get('/', productController.getAllProducts);

router.post('/', productController.createProduct); 

router.get('/categories-and-details', productController.getCategoriesAndDetails);

router.get('/:id', productController.getProductById); 

router.put('/:id', productController.updateProduct); 

router.delete('/:id', productController.deleteProduct); 



module.exports = router;