

//Creamos un programa que pida números hasta que insertemos un 0, entonces nos indica la longitud del array.


var arr1 = []
var numero = Number(prompt("introduce un numero"))

while (numero != 0) {
  var numero = Number(prompt("introduce un numero"))
  arr1.push(numero)
}

alert(" la logitud del arry es de " + arr1.length)



//Comprobar posteriormente si en el array existe al menos algún 5.

var arr2 = [21, 5, 34, 6, 10, 7, 1, 5]

if (arr2.includes(5)) {
  alert("se repite el numero 5 " )
} else {
  alert("no se a encontrado nigun 5 en el array")
}

//Pedir un número al usuario e indicar cuántas veces aparece en el array anterior.

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
var option;
do {
  option = Number(prompt(" 1 ver lista  \n"
    + "2 añadir producto a principio \n "
    + "3 añadir producto a final \n"
    + " 4 eliminar algun producto \n"
    + "5 borrar todos \n"
    + "6 salir \n"
  ));
  if (option === 1) {
    //mostrar proudctos
    if (list.length == 0) {
      alert("productos no añadidos.");
    } else {
      let lista = "productos registrados:\n";
      for (var i = 0; i < list.length; i++) {
        lista += "- " + list[i] + "\n";
      }
      alert(lista);
    }
  } else if (option === 2) {
    // mostrar producto al pricipio
    var producto = prompt("Introduce el producto a añadir al principio:");
    if (producto) {
      list.unshift(producto);
      alert("Producto añadido al principio.");
    }
    //mostrar proudctos
    let lista = "productos registrados:\n";
    for (var i = 0; i < list.length; i++) {
      lista += "- " + list[i] + "\n";
    }
    alert(lista);

  } else if (option === 3) {
    // mostrar producto al final
    var producto = prompt("Introduce el producto a añadir al final:");
    if (producto) {
      list.push(producto);
      alert("Producto añadido al final.");
    }
    //mostrar proudctos
    let lista = "productos registrados:\n";
    for (var i = 0; i < list.length; i++) {
      lista += "- " + list[i] + "\n";
    }
    alert(lista);

  } else if (option === 4) {
    if (list.length == 0) {
      alert("La lista está vacía.");
    } else {
   
      var eliminar = prompt("Introduce el nombre del producto a eliminar:");
      //El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
      var index = list.indexOf(eliminar);
      if (index !== -1) {
        //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        list.splice(index, 1);
        alert("Producto eliminado.");
      } else {
        alert("El producto no se encuentra en la lista.");
      }
      //mostrar proudctos
      let lista = "productos registrados:\n";
      for (var i = 0; i < list.length; i++) {
        lista += "- " + list[i] + "\n";
      }
      alert(lista);
    }

  } else if (option === 5) {
       // eleminar todos
       //  le indica al navegador que muestre una ventana de diálogo con un mensaje opcional, y que espere hasta que el usuario acepte o cancele la ventana de confirmación.
    var confirmar = confirm("¿Seguro que deseas borrar todos los productos?");
    if (confirmar) {
      list = [];
      alert("Todos los productos fueron eliminados.");
    }
  } else if (option === 6) {
    alert("Saliendo del programa...");

  } else {
    alert("Opción no válida, intenta de nuevo.");
  }


} while (option !== 6);

//Dado un array con precios, aplicar a todos un descuento indicado por prompt.

var descuento = Number(prompt("introduce el descuento"))
var arr5 = [21, 5, 34, 6, 10, 7, 1, 5]
let rebaja = descuento * 0.01
var preciosConDescuento = []
for (const x of arr5) {
  var presiodescuento = x - (x * rebaja);
  preciosConDescuento.push(presiodescuento);
}
console.log("Precios originales:", arr5);
console.log("Precios con descuento:", preciosConDescuento);

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

