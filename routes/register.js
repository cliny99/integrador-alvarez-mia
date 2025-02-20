const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const { upload } = require("../middleware/multer"); // Importar multer

// Renderizar la vista de registro
router.get('/', function(req, res, next) {
  res.render('users/register', { title: 'Registro' });
});

// Procesar el registro y subir la imagen
router.post("/", upload.single("fotoPerfil"), userController.register);

module.exports = router;
