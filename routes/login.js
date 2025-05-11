var express = require('express');
var router = express.Router();

const loginController = require("../controllers/loginController");

router.get('/', function(req, res, next) {
  res.render('users/login', { title: 'Inicio sesión' });
});

router.post('/', loginController.login);

module.exports = router;