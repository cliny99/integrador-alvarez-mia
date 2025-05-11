const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cart', { title: 'Carrito' });
});

module.exports = router;