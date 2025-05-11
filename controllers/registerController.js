const bcrypt = require("bcrypt");
const db = require('../database/models');

module.exports = {
    register: async (req, res) => {
        const { name, last_name, password, email, phone, created_at, updated_at, deleted_at} = req.body;
      
        const hashedPassword = await bcrypt.hash(password, 10);
        const imagePath = req.file ? req.file.filename : null; // Si se subió una imagen, se guarda el nombre del archivo, si no, se guarda null
        try {
            await db.User.create({
                name,
                last_name,
                password: hashedPassword,
                email,
                phone,
                image: imagePath,
                created_at,
                updated_at,
                deleted_at
            });
            console.log(req.body);
            res.redirect("/login");   // Redirigir a la página de inicio de sesión después del registro
        } catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                 return res.status(400).json({ message: error });
            }
            res.status(500).json({ message: db.error });
            console.error("Error al registrar el usuario:", error);
            res.redirect("/register"); 
        }
    }
}
