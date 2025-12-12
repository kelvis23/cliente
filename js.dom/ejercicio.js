
/* crea un html con varios etiquetas de nustra  la pagina pediria que  se introdusca una etiqueta y saldra 
por  consola todo el contenido de las etiquetas de señalada */

const contenido = document.querySelectorAll("p")[2];
console.log(contenido.textContent);


/* añade una pagina h1 que no existira en el html con un titulo  */
const nuevo = document.createElement('h1');
nuevo.textContent = "practica de dom";
document.body.prepend(nuevo)

/* cre un contador en tu pagina que vaya cambiando el numero cada 3 segundos  */
var contador = 1
setInterval(() => {
document.getElementById("numero").textContent = contador++ ;
}, 3000);

/* dando  una lista de la compra (ol) , pide por prompt elementos para ir añadiendo los (li) el usario debe indicar si añadimos al inicio o al final  */

var cosas = prompt("intro duce otra cosas a la lista de la compra")

const nuevo1 = document.createElement ("li")
nuevo1.textContent = cosas

var donde =Number( prompt("donde lo deseas añadir 1. al inicio ,2. al final "))
const lista = document.getElementById("compra");
if(donde ==1){
  lista.prepend(nuevo1)
}else{
    lista.appendChild(nuevo1)
}

/* crea una lista  con tres elementos seleciona el elemento del medio y mustra por consola el hermano anterior y hermano siguinte  */