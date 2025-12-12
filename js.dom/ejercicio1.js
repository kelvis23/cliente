/*
setTimeout(() => {
  var nombre = prompt("introduce tu nombre ")
document.getElementById("cambiar").innerHTML = "Hola "+ nombre;
}, 1000);
*/


// selecionar a todos los h2 que tengan la clase titulin

const titulos = document.querySelectorAll("h2.titulin");

titulos.forEach(titulo => {
  console.log(titulo.textContent);
});

/* seleciona todos los los p que tengan en un div de clase contenido  */
const contenidos = document.querySelectorAll("div.contenido p");

contenidos.forEach(contenido =>{
  console.log(contenido.textContent)
})

/* todos los elementos con clase archivo y visible(ambas) */

/* los elementos  */




// para crear una pe dentro en el body al final 
const nuevo = document.createElement(' p');
nuevo.textContent = "Este el el parrafo tres";
document.body.appendChild(nuevo)

// si queremos div con un id 
const nuevo1 = document.createElement(' p');
nuevo1.textContent = "Este el el parrafo tres";
document.getElementById('totales').appendChild(nuevo1)

/// introducir un p dentro de div*

const div = document.createElement('div');
const p = document.createElement('p');

p.textContent = "Este es el párrafo tres";
div.appendChild(p);

document.body.appendChild(div);
