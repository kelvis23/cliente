//Crea una función que calcule el cuadrado de un número.
/*
function cuadrado(a){
  return a**2;
}

console.log(cuadrado(2))
*/
//Función calculadora de número factorial.

/*
function factorial(a){
  var mul = 1
  for(let i =1 ;i<=a ;i++){
    mul*=i
  }
  return mul
}

console.log(factorial(5))
*/
// Función que convierta grados Celsius a Fahrenheit.
/*
function temperatura(a) {
  var c = 0
  c = (a - 32) / 1.8
  return c
}
console.log(temperatura(100))
*/
//Función esPrimo() que devuelva booleano.
/*
function esPrimo(a){
  if(a %2==0){
    return true
  }
  return false
}
console.log(esPrimo(4));

*/


//Función que cuente el número de vocales de una palabra.
/*
function conts(text) {
  var voc = ["a", "e", "i", "o", "u"]
  let contador = 0;

  for (let i = 0; i < text.length; i++) {
    var caracter = text[i].toLowerCase();
    if (voc.includes(caracter)) {
      contador++;
    }
  }
  return contador;
}

console.log(conts("hola"));
*/
//Función que reciba tres parámetros (a,b,c) y devuelva un array con las soluciones de una ecuación de segundo grado. (-b+-sqrt(b**2-4*a*c)/2*a)

function ecuasion(a,b,c){
 var s=(-b+-sqrt(b**2-4*a*c)/2*a)
 return s
}

console.log(ecuasion(4,2,1));
//Crea una función que reciba un número y un callback. Si el número es mayor a 10, ejecuta el callback.
//Función que sume todos los elementos introducidos como parámetros, sin preestablecer el número de parámetros.
//Función que reciba un array de palabras y devuelva solo las que son palíndromos.
