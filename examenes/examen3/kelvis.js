//1
var tarea = prompt("nombre de la tarea");

if (tarea === "" || tarea === null) {
    alert(" el texto no puede estar vacio")
} else {
    const añadir = document.getElementById("añadir");
    const lista = document.getElementById("lista");
    const eliminar = document.querySelectorAll(".eliminar");
    const terminados = document.querySelectorAll(".terminada");

    const nuevo1 = document.createElement("li")
    nuevo1.textContent = tarea

    añadir.addEventListener("click", () => {
        lista.appendChild(nuevo1)
    })

    eliminar.forEach(elimina => {
    elimina.addEventListener("click", function () {
        
    })
    terminados.forEach(terminada =>{
    terminada.addEventListener("mousemove" , function(){
                terminada.style.color = "blue";
    })
  })
});
}








//2

const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");


boton.addEventListener("click", () => {
    boton.textContent ="Desactivar"
    parrafo.addEventListener("mouseover", function () {
        parrafo.style.color = "blue";
    });
    parrafo.addEventListener("mouseup", function () {
        parrafo.style.color = "red";
    });

    if(boton.textContent == "Desactivar"){
       boton.addEventListener("mouseup", function (){
                parrafo.style.color = "black";
                 boton.textContent ="Activar"
            });
               

    }
})





/*
function getcookie(nombre) {
    let cookies = document.cookie.split(";")
    for (let i = 0; i <= cookies.length; i++) {
        let [key, value] = cookies[i].split("=");
        if (key === nombre) {
            return value;
        }
    }
    return false;
}

let botton = getcookie("booton")

if (botton === null) {
    botton = "añadir";

} else {
    botton = "quitar"
}







*/
