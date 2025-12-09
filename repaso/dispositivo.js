/*
Crea una clase llamada Dispositivo con:
Propiedades:
nombre
marca
año

Métodos:
info() → devuelve un texto describiendo el dispositivo
antiguedad() → devuelve cuántos años tiene el dispositivo

Luego:
Crea una subclase Celular que extienda de Dispositivo.
Agrega propiedad adicional: ram (GB).
Sobrescribe info() para incluir la RAM.
Crea 2 objetos Celular y muestra su info y antigüedad.

*/

class Dispositivo {
    constructor(nombre, marca, year) {
        this.nombre = nombre
        this.marca = marca
        this.year = year
    }
    info() {
        console.log(`${this.nombre} de ${this.marca} del año ${this.year}`)
    }
    antiguedad(){
        var num = 2025- this.year
        console.log ("tiene "+num +"vaños")
}
}
a1 = new Dispositivo("play","soni",2020)

a1.info()
a1.antiguedad()

class Celular extends Dispositivo{
    constructor(nombre, marca, year,ram){
        super(nombre, marca, year)
        this.ram =ram
    }
      info() {
        console.log(`${this.nombre} de ${this.marca} del año ${this.year} con una ram de ${this.ram}GB`)
    }
}

 c2 = new Celular("iPhone 12", "Apple", 2018, 6);

c2.info();
c2.antiguedad();


/*
Crea tres funciones:

promedio(lista)
Devuelve el promedio de los números.

filtrarMayores(lista, limite)
Devuelve un nuevo array con números mayores al límite dado.

procesar(lista, funcionCallback)
Aplica la función a cada elemento y devuelve un nuevo arreglo.

*/

var array = [2,5,7,8,10]
function promedio(arr1){
    var suma = 0


    for (let i =0;i<arr1.length;i++){
    suma +=arr1[i]
}
/*
otra forma de hacer lo 
  for (let i of arr1) suma += i;
*/

return suma/arr1.length;
}

console.log(promedio(array))

function filtrarMayores(arr1, num){
    const arr2 = []
    for (let i of arr1) {
        if(i >num) arr2.push(i);
    }
    return arr2
}
console.log(filtrarMayores(array,6))

function procesar(arr1, funcionCallback) {
    const arr2 = [];
    for (let i of arr1) {
        arr2.push(funcionCallback(i));
    }
    return arr2;
}
console.log(procesar(array, x => x * 2));
