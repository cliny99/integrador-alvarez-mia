const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const usersFilePath = path.join(__dirname, "../data/users.json");

const register = async (req, res) => {
    console.log("Archivo recibido:", req.file); // <-- Verificar si multer está recibiendo la imagen
    console.log("Body recibido:", req.body); 
    const { nombre, apellido, email, numero, password, } = req.body;
    const fotoPerfil = req.file ? req.file.filename : "default.jpg";
    // Leer el archivo JSON existente
    let users = [];
    if (fs.existsSync(usersFilePath)) {
        const data = fs.readFileSync(usersFilePath, "utf-8");
        users = data ? JSON.parse(data) : [];
    }

    // Verificar si el email ya está registrado
    if (users.some(user => user.email === email)) {
        return res.render("register", { title: "Registro", error: "El email ya está en uso" });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de rondas de hash

    // Crear nuevo usuario
    const newUser = {
        id: users.length + 1,
        nombre,
        apellido,
        email,
        numero,
        password: hashedPassword, // Guardar la contraseña encriptada
        fotoPerfil,
    };

    // Agregar usuario al array y guardar en JSON
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

    res.render("index", { title: "Home", success: "Registro exitoso" });
};

module.exports = { register };
