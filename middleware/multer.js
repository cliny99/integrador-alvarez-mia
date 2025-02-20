const multer = require('multer');
const path = require("path");
const fs = require("fs");

const uploadPath = path.join(__dirname, "../public/images/users");

// Crear la carpeta si no existe
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const formatoFile = "imagen-" + Date.now() + path.extname(file.originalname);
        cb(null, formatoFile);
    }
});

const upload = multer({ 
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Límite de 5MB
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            return cb(new Error("Solo se permiten imágenes (JPEG, PNG, GIF)"));
        }
    }
});

module.exports = { upload };
