const express = require('express');
const router = express.Router();
const productController = require('../controllers/products/index');

router.get('/', productController.listProduct);

module.exports = router;
