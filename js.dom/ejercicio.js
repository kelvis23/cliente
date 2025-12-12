/*
setTimeout(() => {
  var nombre = prompt("introduce tu nombre ")
document.getElementById("cambiar").innerHTML = "Hola "+ nombre;
}, 1000);
*/


// selecionar a todos los h2 que tengan la clase titulin
/*
const titulos = document.querySelectorAll("h2.titulin");

titulos.forEach(titulo => {
  console.log(titulo.textContent);
});
*/
/* seleciona todos los los p que tengan en un div de clase contenido  */
const contenidos = document.querySelectorAll("div.contenido p");

contenidos.forEach(contenido =>{
  console.log(contenido.textContent)
})

/* todos los elementos con clase archivo y visible(ambas) */

/* los elementos  */