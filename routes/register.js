const express = require('express');
const router = express.Router();

const registerController = require("../controllers/registerController");
const { upload } = require("../middleware/multer"); // Importar multer

// Renderizar la vista de registro
router.get('/', function(req, res, next) {
  res.render('users/register', { title: 'Registro' });
});

// Procesar el registro y subir la imagen
router.post("/", upload.single("image"), registerController.register);

module.exports = router;
