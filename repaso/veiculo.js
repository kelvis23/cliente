/*
*Repaso POO y funciones
Crea una clase llamada Vehiculo con las siguientes características:
● Propiedades:
○ marca
○ modelo
○ ano
● Métodos:
○ descripcion()
Debe devolver un texto que describa el vehículo.
○ edad()
Devuelve cuántos años tiene el vehículo.
Luego:
1. Crea una subclase llamada Auto que extienda de Vehiculo.
2. Añade una propiedad adicional: puertas.
3. Sobrescribe el método descripcion() para incluir el número de puertas.
4. Crea dos objetos Auto con distintos valores y muestra su descripción y edad por consola.
*/ 
/*
class Vehiculo{
    constructor(marca,modelo,ano){
        this.marca =marca
        this.modelo=modelo
        this.ano=ano
    }
     descripcion(){
        console.log(`${this.marca } modelo ${this.modelo} del año ${this.ano}`)
     }
     edad(){
       var año = 2025-this.ano 
        console.log("tiene " +año+" años")
     }

}

const a1 = new Vehiculo("toya","supra","2006");

a1.descripcion();
a1.edad();

class Auto extends Vehiculo {
    constructor(marca, modelo, ano,puertas){
        super(marca, modelo, ano)
        this.puertas = puertas
    }
      descripcion() {
        console.log(`${this.marca} modelo ${this.modelo} del año ${this.ano} con ${this.puertas} puertas`);
    }
}

const miAuto = new Auto("Toyota", "Supra", 2006, 2);
miAuto.descripcion(); 
*/

/*
Debes crear tres funciones independientes que trabajen sobre un array de números:
1. sumar(lista)
 Devuelve la suma de todos los números.
2. filtrarPares(lista)
 Devuelve un nuevo array con solo los números pares.
3. aplicarOperacion(lista, operacion)
 Recibe un array y una función (callback).
 Debe aplicar la función a cada elemento y retornar un nuevo arreglo.
Luego:
● Declara un array de ejemplo.
● Muestra por consola el resultado de:
○ llamar a sumar(lista)
○ llamar a filtrarPares(lista)
○ llamar a aplicarOperacion
*/

var array = [1,13,6,9,10,4]

function suma(arr1){
    var suma = 0;
    for(let i =0 ; i<arr1.length;i++){
        suma+=arr1[i];
    }
    return suma
}

console.log(suma(array))

function pares(arr1){
    var arr2 = []
    for(let i =0 ; i<arr1.length;i++){
        if(arr1[i]%2==0){
            arr2.push(arr1[i])
        }
    }
    return arr2
}
console.log(pares(array))

function aplicarOperacion(lista, operacion) {
  return lista.map(operacion);
}
const resultadoOperacion = aplicarOperacion(array, num => num * 2);
console.log( resultadoOperacion);