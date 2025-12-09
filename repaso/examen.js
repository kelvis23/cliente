
//1. Crear clase Alumno con nombre, nota1, nota2, nota3 y método promedio().

class Alumno {
    constructor(nombre ,nota1,nota2,nota3){
        this.nombre=nombre
        this.nota1=nota1
        this.nota2=nota2
        this.nota3=nota3
    }
     promedio() {
        var sum = this.nota1+this.nota2+this.nota3
        return sum / 3    
    }
}

a1 = new Alumno("pablo",5,10,4)

console.log(a1.promedio())

//2. Clase Libro con título, autor y método info() que devuelva un string.

class Libro {
    constructor(titulo,autor){
        this.titulo=titulo
        this.autor=autor
    }
    info(){
        console.log(`${this.Libro} fu creado por ${this.autor}`)
    }
}
b1= new Libro ("jarri poter" ,"jk rolin")



//3. Función que reciba un arreglo de números y devuelva otro arreglo solo con los números mayores a 10.
var array = [4,6,0,13,23,1,6,19]

function number(arr1){
    var result = []
    for (let n of arr1){
        if(n >10) result.push(n)
    }
return result
}
console.log(number(array))

//4. Función que reciba un texto y devuelva cuántas palabras contiene.
function recipText(text){
if (typeof text !== "string") return 0;

  // Eliminar espacios extra y dividir por espacios
  const palabras = text .split(/\s+/);

  // Manejar el caso de texto vacío
  return text.trim() === "" ? 0 : palabras.length;
}
var text =("hola como estas")
console.log(recipText(text))

//5. Crear clase Tienda que administre productos: agregar, eliminar, cambiar precio, listar.
