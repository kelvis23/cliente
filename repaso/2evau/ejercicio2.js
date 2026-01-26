//Crea un botón que añada un nuevo párrafo al final del body.
// Se pide en un confirm el número de botones a añadir (Botón1, Botón2…).  Cuando el usuario acepta, se crean automáticamente todos los botones con un listener asociado que saca por alert el contenido de texto de ese botón.
// Crea un interruptor utilizando un botón que cambie el src de una imagen para poner una bombilla apagada/encendida.
// Crea un input que pida un color, cuando el usuario pulse enviar el fondo del body cogerá el color indicado por el usuario.
// Guarda el color del último ejercicio en cookies o en localStorage para que no se pierda aun cerrando el navegador. 


// 1️⃣ Añadir un párrafo al final del body
const addParagraph = document.getElementById("addParagraph");

addParagraph.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Nuevo párrafo añadido";
    document.body.appendChild(p);
});


// 2️⃣ Crear botones dinámicamente
const createButtons = document.getElementById("createButtons");

createButtons.addEventListener("click", () => {
    const cantidad = prompt("¿Cuántos botones quieres crear?");

    if (cantidad && !isNaN(cantidad)) {
        for (let i = 1; i <= cantidad; i++) {
            const boton = document.createElement("button");
            boton.textContent = "Botón " + i;

            boton.addEventListener("click", () => {
                alert(boton.textContent);
            });

            document.body.appendChild(boton);
        }
    }
});


// 3️⃣ Interruptor bombilla
const bulb = document.getElementById("bulb");
const interruptor = document.getElementById("switch");
let encendida = false;

interruptor.addEventListener("click", () => {
    encendida = !encendida;
    bulb.src = encendida
        ? "https://www.w3schools.com/js/pic_bulbon.gif"
        : "https://www.w3schools.com/js/pic_bulboff.gif";
});


// 4️⃣ Cambiar color de fondo + guardar en localStorage
const colorInput = document.getElementById("colorInput");
const setColor = document.getElementById("setColor");

setColor.addEventListener("click", () => {
    const color = colorInput.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem("bgColor", color);
});


// 5️⃣ Recuperar color guardado al cargar la página
const savedColor = localStorage.getItem("bgColor");
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}


