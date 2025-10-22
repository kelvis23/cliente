//Tenemos un array de números para hacer un sorteo, pero algún@ list@ ha metido su número más de una vez. 
// Asegúrate de que ese array elimina sus duplicados pasándolo a Set
/*
var arr1 = new Set();
arr1.add(231);
arr1.add(117);
arr1.add(106);
arr1.add(501);
arr1.add(122);
arr1.add(231);

console.log(arr1)
*/
//- Dados el setA = new Set([1,2,3,4]) y el setB = new Set([3,4,5,6]) devuelve un set que contenga 
// los elementos comunes en los dos anteriores 
// (usando la función filter que vimos con los arrays)
/*
setA = new Set([1, 2, 3, 4]);
setB = new Set([3, 4, 5, 6]);

//  [...setA] convierte el conjunto setA en un arreglo (array). Esto es para poder usar métodos de arrays como .filter().
//.filter(x => setB.has(x)) recorre ese arreglo, y para cada elemento x, verifica si también está en setB con setB.has(x).
//Solo se mantienen los elementos que existen en ambos conjuntos.
//new Set(...) convierte el resultado filtrado  de nuevo a un conjunto (Set).
 commonElements = new Set(
  [...setA].filter(x => setB.has(x))
);

console.log(commonElements); 
*/
// Copia el ejercicio del menú de inicio de sesión y convierte los arrays en un mapa.


var usuarios = new Map([["kelvis",1234],["pepe",190]]);
var option;

do {
  alert("MENÚ");
  option = Number(prompt(
    "Selecciona una opción:\n" +
    "1. Crear usuario\n" +
    "2. Entrar\n" +
    "3. Mostrar usuarios\n" +
    "4. Salir"
  ));

  if (option === 1) {
    // CREAR USUARIO
    var nuevoUsuario = prompt("Introduce el nombre del usuario a crear:");
    var encontrado = false;


    // bandera : comprobar  si el usuario existe 
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i] === nuevoUsuario) {
        encontrado = true;
      }
    }

    if (!encontrado) {
      var nuevaContra = Number(prompt("Introduce una contraseña para " + nuevoUsuario + ":"));
        usuarios.set(nuevoUsuario, nuevaContra);
      alert("El usuario '" + nuevoUsuario + "' ha sido creado exitosamente.");
      alert("Bienvenido, " + nuevoUsuario + "!");
    } else {
      alert("El usuario '" + nuevoUsuario + "' ya existe.");
    }

  } else if (option === 2) {
    // INICIAR SESIÓN
    var usuarioLogin = prompt("Introduce el nombre del usuario:");
    var posicion = -1;

    // bandera : comprobar  si el usuario existe 
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i] === usuarioLogin && posicion === -1) {
        posicion = i;
      }
    }

    if (posicion === -1) {
      alert("El usuario no existe.");
    } else {
      let intentos = 3;
      let accesoConcedido = false;
      // registrar conraseña
      while (intentos > 0 && !accesoConcedido) {
        let contra = Number(prompt("Introduce la contraseña:"));

        if (contra === usuarios[posicion]) {
          alert("Bienvenido, " + usuarioLogin + "!");
          accesoConcedido = true;
        } else {
          intentos--;
          if (intentos > 0) {
            alert("Contraseña incorrecta. Te quedan " + intentos + " intento(s).");
          } else {
            alert("Demasiados intentos. Acceso denegado.");
          }
        }
      }
    }

  } else if (option === 3) {
    // MOSTRAR USUARIOS
    if (usuarios.length === 0) {
      alert("No hay usuarios registrados.");
    } else {
      let lista = "Usuarios registrados:\n";
      for (var i = 0; i < usuarios.length; i++) {
        lista += "- " + usuarios[i] + "\n";
      }
      alert(lista);
    }

  } else if (option === 4) {
    // SALIR
    alert("Saliendo del programa...");
  } else {
    alert("Opción no válida. Intenta de nuevo.");
  }

} while (option !== 4);


// BONUS Pide tres conjuntos al usuario por teclado e indica cuáles no se repiten
