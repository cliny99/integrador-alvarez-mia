const express = require('express');
const router = express.Router();

/* GET dashboard page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Euge Creación' });
});

/* GET product add page. */
router.get('/productAdd', function(req, res, next) {
  res.render('products/productAdd', { title: 'Agregar Producto' });
});

/* GET product edit page. */
router.get('/productEdit', function(req, res, next) {
  res.render('products/productEdit', { title: 'Editar Producto' });
});
module.exports = router;
