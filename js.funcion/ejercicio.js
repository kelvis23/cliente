//1.- Crear un objeto persona con nombre, edad y ciudad. Acceder a sus propiedades con . y con [ ]. Cambiar el valor de edad y agregar una nueva propiedad profesión.
/*class Persona {
  constructor(nombre,edad,ciudad){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }

   // Método saludar
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }

  // Método cumplir años
  cumplirAnos() {
    this.edad += 1;
  }
}
const persona1 = new Persona("Ana", 25, "Madrid");


console.log(persona1.nombre);   
console.log(persona1["edad"]);   
console.log(persona1["ciudad"]); 

persona1.edad = 29;
console.log(persona1.edad); 


persona1.profesion = "Ingeniera";
console.log(persona1.profesion); 

//2.- Añadir un método saludar() que muestre "Hola, soy <nombre>". Añadir un método cumplirAnos() que aumente la edad en 1.


persona1.saludar();    
persona1.cumplirAnos();
console.log(persona1.edad)


//3.- Usar delete para eliminar la propiedad ciudad. Mostrar el objeto antes y después.

delete persona1.ciudad;
console.log(persona1);   

*/
//4.- Crea un array de estudiantes, cada uno con nombre y nota. Crea una función media() y otra aprobados() que devuelva un array con los alumnos con nota superior a 5.

const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "María", nota: 6 },
  { nombre: "Pedro", nota: 3 },
  { nombre: "Sofía", nota: 9 }
];

function media(lista) {
  let suma = 0;
  for (let est of lista) {
    suma += est.nota;
  }
  return suma / lista.length;
}

function aprobados(lista) {
  return lista.filter(est => est.nota > 5);
}



console.log( media(estudiantes)); 
console.log( aprobados(estudiantes));

//5.- Crea la función buscarPorNombre(nombre) que devuelva el objeto del estudiante correspondiente.
function buscarPorNombre(nombre) {
  //sirve para buscar un estudiante específico dentro del array estudiantes según su nombre.
  return estudiantes.find(est => est.nombre === nombre);
}
console.log(buscarPorNombre("María"));

//6.- Crea la función actualizarNota(nombre, nuevaNota) que cambie la nota del estudiante.

function actualizarNota(nombre, nuevaNota) {
  const estudiante = estudiantes.find(est => est.nombre === nombre);
  
  if (estudiante) {
    estudiante.nota = nuevaNota;
    return estudiante; 
  } else {
    return null; 
  }
}
console.log(actualizarNota("Luis", 7));