

// Se le pide al usuario el número de valores a introducir. Posteriormente se le van pidiendo. Se le devuelven ordenados. ¿Cómo? 😮

/*
var valor = Number(prompt("introduce  la cantidad de valores que vas a introducir"));

let numeros = [];
for( let i = 0 ; i<valor;i++){
    let numero = Number(prompt("introduce  "));
 numeros.push(numero)
}
 for (const x of numeros) {
     console.log(x);
 }
 */

// Sistema de inicio de sesión y registro con arrays (menú incluído).

// Crea una lista de notas. Calcula la media total y la media sólo de los aprobados. BONUS si se hace con y sin arrays.

//con array
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


// Crea un array de 10 valores introducidos por teclado y devuelvelo ordenado (SIN FUNCIONES).

var array = []
for (let i = 0; i < 10; i++) {
    let numero = Number(prompt("introduce  los numeros introducir"));
    array.push(numero)
    for (let j = 0; j < 10 - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            
        }
    }
}

for (const x of array) {
     console.log(x);
 }




// Crea dos arrays de números arr1 y arr2 con 5 elementos cada uno. Recorre ambos arrays y cuenta cuántos elementos son iguales y están en la misma posición. Imprime el resultado.
