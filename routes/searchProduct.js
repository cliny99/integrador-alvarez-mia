var express = require('express');
var router = express.Router();

// const searchProductController = require("../controllers/productController");


router.get('/', function(req, res, next) {
  res.render('products/searchProduct', { title: 'Buscar producto' });
});

// router.post('/', searchProductController.index);

module.exports = router;