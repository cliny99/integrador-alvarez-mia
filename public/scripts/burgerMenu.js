document.addEventListener("DOMContentLoaded", function() {
    const burgerButton = document.getElementById("burger-button");
    const menu = document.getElementById("menu");

    burgerButton.addEventListener("click", function() {
        menu.classList.toggle("visible");
    });
});

console.log("Script cargado");