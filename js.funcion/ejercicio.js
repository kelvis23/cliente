/*

1.- Crear un objeto persona con nombre, edad y ciudad. Acceder a sus propiedades con . y con [ ]. Cambiar el valor de edad y agregar una nueva propiedad profesión.
*/
class Coche {
  constructor(nombre,edad,ciudad){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }


  edad(){
    console.log(`$(this.nombre) $(this.edad) $(this.ciudad) esta  encendido. `);
  }

}


/*
2.- Añadir un método saludar() que muestre "Hola, soy <nombre>". Añadir un método cumplirAnos() que aumente la edad en 1.

3.- Usar delete para eliminar la propiedad ciudad. Mostrar el objeto antes y después.

4.- Crea un array de estudiantes, cada uno con nombre y nota. Crea una función media() y otra aprobados() que devuelva un array con los alumnos con nota superior a 5.

5.- Crea la función buscarPorNombre(nombre) que devuelva el objeto del estudiante correspondiente.

6.- Crea la función actualizarNota(nombre, nuevaNota) que cambie la nota del estudiante.
*/