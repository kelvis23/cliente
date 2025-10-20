

//Creamos un programa que pida números hasta que insertemos un 0, entonces nos indica la longitud del array.

/*
var arr1 = []
var numero = Number(prompt("introduce un numero"))

while (numero != 0) {
  var numero = Number(prompt("introduce un numero"))
  arr1.push(numero)
}

alert(" la logitud del arry es de " + arr1.length)


*/
//Comprobar posteriormente si en el array existe al menos algún 5.
/*
var arr2 = [21, 5, 34, 6, 10, 7, 1, 5]

if (arr2.includes(5)) {
  alert("se repite el numero 5 " )
} else {
  alert("no se a encontrado nigun 5 en el array")
}
*/
//Pedir un número al usuario e indicar cuántas veces aparece en el array anterior.
/*
var usuario =Number(prompt("introduce un numero"))
var arr2 = [21, 5, 34, 6, 10, 7, 1, 5]
count = 0

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] == usuario) {
    count++
  }

}
if (count >= 1) {
  alert("se repite el numero "+usuario+": " + count)
} else {
  alert("no se a encontrado nigun "+usuario+" en el array")
}
  */
//En un programa con un array predefinido con varios nombres, pedirle uno al usuario y comprobar si está o no.

var arr3 = ["cesar", "andrea", "kelvis", "jesus", "ana", "pedro", "juan", "maria", "karla"];
var usuario = prompt("introduce un nombre");

if (arr3.includes(usuario2)) {
  alert("en el array si existe el nombre " + usuario)
} else {
  alert("en el array no existe el nombre " + usuario)
}

//Crea un menú que controle los datos de un array (como una lista de la compra), que permita añadir al final o al principio, eliminar alguno si existe o borrar todos, y a cada paso actualice (o vuelva a mostrar) la lista completa.
var list = []
do {
  opt = Number(prompt("-- control de datos -- \n"))
} while (option != 4);
//Dado un array con precios, aplicar a todos un descuento indicado por prompt.

var descuento = Number(prompt("introduce el descuento"))
var arr5 = [21, 5, 34, 6, 10, 7, 1, 5]
let revaja = descuento * 0.01

//BONUS: Reutiliza el ejercicio 1 y posteriormente devuelve el array ordenado.

var arr6 = [];
var numero = Number(prompt("introduce un numero"))

while (numero != 0) {
  var numero = Number(prompt("introduce un numero"))
  arr1.push(numero)
  arr1.sort((a, b) => a - b)
}

for (const x of arr1) {
  console.log(arr1)
}

