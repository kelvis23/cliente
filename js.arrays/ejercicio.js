

// Se le pide al usuario el número de valores a introducir. Posteriormente se le van pidiendo. Se le devuelven ordenados. ¿Cómo? 😮
/*

var valor = Number(prompt("introduce  la cantidad de valores que vas a introducir"));

let numeros = [];
for( let i = 0 ; i<valor;i++){
    let numero = Number(prompt("introduce  "));
 numeros.push(numero)
}

 for (i = 0; i < numeros.length; i++) {
  for (j = 0; j < numeros.length - 1 - i; j++) {
    if (numeros[j] > numeros[j + 1]) {
      temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;

    }
  }
}
 for (const x of numeros) {
     console.log(x);
 }
*/

// Sistema de inicio de sesión y registro con numeross (menú incluído).

var usuarios = ["kelvis", "pepe"]
var contraseñas = [1234, 190]
var option;
var usuario = prompt("introduce el nombre de usuario")
var encontrado = false;
var posicion = -1;

// Buscar si el usuario existe
for (var i = 0; i < usuarios.length; i++) {
  if (usuarios[i] === usuario) {
    encontrado = true;
    posicion = i;
  }
}
if (!encontrado) {
  alert("el usario no existe creando un nuevo usuario")
  var number = Number(prompt("introduce una contraseñas"))
  contraseñas.push(number)
  usuarios.push(usuario)
  alert("el usuario se a creado")
  alert("Bienbenido " + usuario);
} else {
  let intentos = 3;
  while (intentos > 0) {
    let number = Number(prompt("introduce la contraseñas"))
    if (number === contraseñas[posicion]) {
      alert("Bienbenido " + usuario);
      intentos = 0;
    } else {
      intentos--;
      if (intentos > 0) {
        alert("Contraseña incorrecta. Te quedan " + intentos + " intento(s).");
      } else {
        alert("Demasiados intentos. Acceso denegado.");
      }
    }

  }
}
do {
  alert("menu")
  option = Number(prompt("1.suma , 2.multiplicasion , 3.salir"))
  if (option == 1) {

  } else if (option == 2) {
    var number = Number
  } else if (option == 3) {
    alert("saliendo ...")
  } else {
    alert("error")
  }
} while (option != 3);


// Crea una lista de notas. Calcula la media total y la media sólo de los aprobados. BONUS si se hace con y sin numeross.

//con numeros
/*
  var notas =[8,2,5,6,10,1,4,5];
 let suma =0 ;
 for( let i = 0 ; i<notas.length;i++){
 suma+=notas[i]
 console.log(suma)
 }

var media =suma/notas.length;
console.log("la media "+media )

//media de aprovados
let numero = 0;
 let suma1 =0 ;
  for( let i = 0 ; i<notas.length;i++){
 if(notas[i] >=5){
   suma1+=notas[i]
   numero ++
   console.log(suma1)

 }
  }
   var media =suma1/numero;
console.log("la media "+media )


//sin arrys


 var numero1 = 8;
 var numero2 = 2;
 var numero3 = 5;
 var numero4 = 6;
 var numero5 = 10;
 var numero6 = 1;
 var numero7 = 4;
 var numero8 = 5;

 var suma3 = numero1+numero2+numero3+numero4+numero5+numero6+numero7+numero8;
 var suma2 = numero1+numero3+numero4+numero5+numero8;
   var media2 = suma2/5;
   console.log(suma2)
    console.log("la media "+ media2 );

 var media = suma3/8;
   console.log(suma3)
    console.log("la media "+media );


*/

// Crea un numeros de 10 valores introducidos por teclado y devuelvelo ordenado (SIN FUNCIONES).
/*
var numeros = []
for (i = 0; i < 10; i++) {
  let numero = Number(prompt("introduce  los numeros introducir"));
  numeros.push(numero)

}

for (i = 0; i < 10; i++) {
  for (j = 0; j < numeros.length - 1 - i; j++) {
    if (numeros[j] > numeros[j + 1]) {
      temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;

    }
  }
}
for (const x of numeros) {
  console.log(x);
}
*/

// Crea dos numeross de números arr1 y arr2 con 5 elementos cada uno. Recorre ambos numeross y cuenta cuántos elementos son iguales y están en la misma posición. Imprime el resultado.
/*
var arr1 = [4, 6, 2, 1, 0];
var arr2 = [18, 4, 2, 1, 8];
var count = 0;
for(i=0;i<arr1.length;i++){
  if(arr1[i] ==arr2[i]){
    count++
  }
}

alert("hay "+ count+" elementos iguales en ambos arrys")

*/