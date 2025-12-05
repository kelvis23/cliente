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