/*
Pida al usuario cuántos números desea ingresar.
Guarde esos números en un array de tipo int.
Use un bucle para:
Mostrar todos los números ingresados.
Calcular y mostrar el promedio de los números.
Encontrar y mostrar el número mayor y el número menor del arreglo.
*/

var number = Number(prompt("cuandos numeros deseas introducir"));
var array = [];
for (let i = 0; i < number; i++) {
    var num = Number(prompt("cuandos numeros deseas introducir"));
    array.push(num)
}


for (let i = 0; i < array.length; i++) {
 sum +=array[i]
   
}

var med = sum /array.length

var max = array [0];
var min = array [0];
for (let i = 0; i < array.length; i++) {
 if (array[i]> max){
    max = array[i]
}
 if (array[i] < min){
    min  = array[i]
 }
}
console.log("Números introducidos:", array);
console.log("Suma:", sum);
console.log("Media:", med);
console.log("Máximo:", max);
console.log("Mínimo:", min);
