const bcrypt = require("bcrypt");
const db = require('../database/models');

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            // Buscar email
            const user = await db.User.findOne({ where: { email } });

            // Si no se encuentra el usuario
            if (!user) {
                return res.status(401).send("No hay un usuario con este email");
            }

            // Comparar contraseña
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).send("Contraseña incorrecta");
            }

            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image
            };

            res.redirect("/");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            res.status(500).send("Error en el servidor");
        }
    }
};
