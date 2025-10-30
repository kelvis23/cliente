/*Pida al usuario ingresar 5 notas (números del 0 al 10).
Guarde esas notas en un array.
Use un bucle para calcular el promedio de las notas.
Muestre en consola:
Todas las notas ingresadas.
El promedio.
Y un mensaje que diga si el estudiante aprueba (promedio ≥ 6) o reprueba (promedio < 6).*/

/*
var array = [];
for (let i = 0; i < 5; i++) {
    var numero = Number(prompt("intro duce un numero del 0  al 10"))
    if (numero >= 0 && numero <= 10) {

        array.push(numero);
    } else {
        alert("el numero introducido no comple los parametros establesidos ")
        i--;
    }
}

var sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
var promedio = sum / array.length;
console.log(array)
if (promedio >= 6) {

    alert("el estudiante aprueba con un promedio de " + promedio);
} else {
    alert("el estudiante reprueba con un promedio de " + promedio);
}
*/
//Crea un array con 10 números. Usa un bucle for para calcular la suma total.
//Luego, muestra solo los números pares en la consola.
var array1=[]
for (let i = 0; i < 10; i++) {
        var numero = Number(prompt("intro duce un numero"))
        array1.push(numero)
    }

for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
}