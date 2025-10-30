/*
Pida al usuario cuántos números desea ingresar.
Guarde esos números en un array de tipo int.
Use un bucle para:
Mostrar todos los números ingresados.
Calcular y mostrar el promedio de los números.
Encontrar y mostrar el número mayor y el número menor del arreglo.
*/
/*
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
*/

/*Pide al usuario una cantidad de números,
 guárdalos en un array y crea un nuevo array con 
 los mismos números en orden inverso, sin usar el método .reverse().
Extra: Muestra ambos arrays en consola.*/

/*
var array =[9,20,7,5,1,4];

var array1= []
//let i = numeros.length - 1 -> Esto pone a i en la última posición del array.
for (let i =  array.length -1;  i >= 0;i--){
    array1.push(array[i])
}
console.log("🔹 Array original:", array);
console.log("🔹 Array invertido:", array1);
*/
/*
var number = Number(prompt("cuandos numeros deseas introducir"));
var array = [];


for (let i = 0; i < number; i++) {
    var num = Number(prompt("cuandos numeros deseas introducir"));
    array.push(num)
}
let sinDuplicados = [...new Set(array)];
*/

/*
Crea un array con los ingresos diarios de una tienda durante una semana (7 valores).
Luego calcula y muestra:

El total de ventas.

El promedio diario.

El día con más ventas y el día con menos ventas.
Extra: Muestra también qué días superaron el promedio.

*/
/*
var array = [8,32,7,1,98,-3,-14]
var max = array[0] 
var min = array[0]
var sum =0;
for (let i = 0; i < array.length; i++) {
sum += array[i]
if(array[i] > max){
    max =array[i]
}
if(array[i]< min){
    min = array[i]
}
}
var prome = sum/array.length;

for (let i = 0; i < array.length; i++) {

if(array[i] > prome){
    console.log(" los dia que superaron el promedio " +i +" promedio :" +prome +" max "+max+" min " +min)
}
}

*/
/*
El usuario ingresa varios números hasta que escriba 0 para terminar.
Luego el programa debe mostrar:
El promedio.
El número más grande.
El número más pequeño.
Cuántos números fueron positivos, negativos y ceros.
Extra: Si todos los números son iguales, muestra un mensaje especial.
*/ 

var array = []
var num  = Number(prompt(" introduce uno hasta que sea sero"));
while(num !==0){
      num = Number(prompt(" introduce uno hasta que sea sero"));
     array.push(num)
}

var max = array[0] 
var min = array[0]
var contadorp =0
var contadorn =0
var contador =0
for (let i = 0; i < array.length; i++) {
if(array[i] > max){
    max =array[i]
}
if(array[i]< min){
    min = array[i]
}
if (array[i] >0){
    contadorn++
}else if(array[i] <0) {
    contadorp ++
}else{
    contador++
}

}
console.log(contador+" positivos:"+contadorn+" negativos:"+contadorp)
  let todosIguales = array.every(num => num === array[0]);

  if (todosIguales) {
    alert("✅ Todos los números del array son iguales.");
  } else {
    alert("❌ Los números del array no son todos iguales.");
  }
/*
  Pide 10 números al usuario y guárdalos en un array.
Luego:

Crea un array con todos los números pares.

Crea otro con los impares.

Muestra ambos arrays y el total de elementos en cada uno.

Extra:
Ordena ambos arrays de menor a mayor sin usar .sort() (usa un bucle anidado tipo burbuja).
*/