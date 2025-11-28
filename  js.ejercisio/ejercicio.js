//1.- Separa un texto en palabras y calcula la palabra más larga.
function text(text) {
    // Convertir el texto en un array de palabras
    var arr = text.split(" ");

    // Inicializar la variable para la palabra más larga
    var longest = "";

    // Recorrer cada palabra
    for (word of arr) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}


console.log(text("Hola esto es una prueba "));



//2.- Verifica si una palabra comienza con "pre".

function text2(text) {

    var arr = text.split(" ");


    for (word of arr) {
        console.log(word.startsWith("pre"))
    }


}


text2("Hola esto es una prueba y una presentasion ");




//3.- Reemplaza "perro" por "gato" en una frase.
function text3(text) {
text = text.toLowerCase();
    //poner que ponga las mayusculas en minusculas
    return text.replace("perro", "gato");
}

console.log(text3("Hola soy un perro "));


//4.- Crea una función que reciba dos números por parámetro y devuelva un número aleatorio entre ellos.
/*
var num =Number(prompt("intro duce un numero"))
var num2 =Number(prompt("intro duce otro numero"))
var number = Math.random()*(num - num2) + num2;
console.log(Math.random(num, num2))
console.log(number)
*/

//5.- Creamos el objeto punto, que tiene como atributos el valor en eje X y el valor en eje Y (valX y valY). Creamos una función que reciba dos objetos de tipo punto como parámetros y calcule la distancia entre ellos. BONUS
class Punto {
    constructor(puntoX, puntoY) {
        this.puntoX = puntoX
        this.puntoY = puntoY
    }
}

function distancia(pA, pB) {
    const dx = pB.puntoX - pA.puntoX;
    const dy = pB.puntoY - pA.puntoY;
    return Math.sqrt((dx ** 2) + (dy ** 2));
}

const p1 = new Punto(4, 6);
const p2 = new Punto(1, 2);
console.log(distancia(p1, p2));

//cabiar  hay una forma mas facil
//6.- Dada una fecha de cumpleaños determina en qué día de la semana nació y la edad a día de hoy.
var day = 23
var mes = 11
var year = 2006
//jueves

Fecha = new Date();
const dias = ["sábado", "domingo", "lunes", "martes", "miércoles", "jueves", "viernes",];

var año = Fecha.getFullYear() - year

var n1 = Math.trunc((13 * (mes + 1)) / 5)
//K = año del siglo (año % 100)
var n2 = Math.trunc(year % 100)
//J = siglo (año / 100 truncado)
var n3 = Math.trunc(year / 100)


var day1 = Math.trunc(day + n1 + n2 + (n2 / 4) + (n3 / 4) + 5 * n3 )
var day2 = Math.trunc(day1 % 7)
const diaSemana = dias[day2];

console.log(n1)
console.log(n2)
console.log(n3)
console.log(day1)
console.log(day2)
console.log("nacio el "+diaSemana+" y actualmente tiene "+ año)