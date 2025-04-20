const fs = require("fs");
const path = require("path");
const { title } = require("process");

const usersFilePath = path.join(__dirname, "../data/users.json");

const login = (req, res) => {
    const { email, password } = req.body;

    if (!fs.existsSync(usersFilePath)) {
        return res.send("No hay usuarios registrados.");
    }

    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.send("Usuario o contraseña incorrectos.");
    }

    res.render("index", { title: "Bienvenido", user }); // tendria que ir a la vista de bienvenida de usuario en vez de index
    
};


module.exports = { login };