/* precausion van en orden cuando se ejecuta en java escri prlo cual cuando se termina un ejersio poner en (/*) */

// 1.  calculadora de areas y perimetros 

var lado = Number(prompt("introduce la medida de un cuadrado"));

var perimetros = 4 * lado;
var area = lado ** 2;

alert("el area de un cuadro es " + area + " y el perimto es " + perimetros)


// 2.  detector numeros magicos  numeros 4 digitos
let number = Number(prompt("introduce el numero"));
let last = Number % 10;
let numbers = number % 1000;
let mid = (mid - last) / 10;
let first = (number - (number % 1000)) / 1000;
alert(first);
alert(mid);
alert(last);
if (first + last == mid) {
    alert("Es magico");
} else ("No es");
// 3.  Crea un programa que “cuente” la cantidad de dígitos de un número (sin funciones).


var numero = Number(prompt("introduce un numero"));
while (control <= numero) {
    control = 1
    control++
}



// 4.  Mostrar los números pares del 1 al 100.

for (i = 0; i <= 99; i += 2) {

    console.log(i)

}

// 5.  Se le pide al usuario el número de elementos que va a introducir para calcular su media.

var numero = Number(prompt("introduce la cantida numeros"));
var suma = 0
var a;
for (i = 1; i <= numero; i++) {
    a = Number(prompt("introduse el numero"))
    suma += a
}
var media = suma / numero
alert(media)

// 6.  El adivinador: Crear un código que adivine un número del 1 al 100.

var min = 1
var max = 100

var numero = Math.floor(Math.random() * (min, max));

var opcion = Number(prompt("en que numero estoy pensado"));
while (opcion != numero) {
    if (numero < opcion) {
        alert(" es muy pequeño " + numero + " al numero que estoy pensado , vuelve a crear otro numuro");
        min = numero + 1
    } else if (numero > opcion) {
        alert(" es muy grande " + numero + " al numero que estoy pensado , vuelbe a crear otro numero");
        max = numero - 1
    } else {
    }
    numero = Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(numero + " es el numero corexto");



// 7.  Jugando un poco con la consola: Aventura conversacional/juego de preguntas y respuestas.

var numero = Number(prompt("esto es un  concursos de pereguntas y respuestas  es coge las opsiones 1 hitoria , 2 astrologia , 3 matematica , 4 pregunta rando"));

if (numero == 1) {
    var año = Number(prompt("en que  año descubrio cristbal colan america"));
    if (año == 1492) {
        alert("correxto");
    } else {
        alert("incorexto fue en 1492")
    }
    var rey = prompt("¿Quién fue el rey de España durante el descubrimiento de América?");
    if (rey.toLowerCase() == "isabel" || rey.toLowerCase() == "isabel i" || rey.toLowerCase() == "isabel la católica") {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto, fue Isabel la Católica");
    }
} else if (numero == 2) {
    var nombre = prompt("cual era el planeta que en realida no es un planeta en el sistemea solar");
    if (nombre == "pluton") {
        alert("correxto");
    } else {
        alert("incorexto es pluton")
    }

    var planeta = prompt("¿Cuál es el planeta más grande del sistema solar?");
    if (planeta.toLowerCase() == "júpiter" || planeta.toLowerCase() == "jupiter") {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto, es Júpiter");
    }

} else if (numero == 3) {
    var numero = Number(prompt("cuales son los 5 primeros numeros del numero pi"));
    if (numero == 3, 1415) {
        alert("correxto");
    } else {
        alert("incorexto es 3,1415")
    }
    var suma = Number(prompt("¿Cuánto es 12 x 12?"));
    if (suma == 144) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto, es 144");
    }
} else if (numero == 4) {
    var pregunta = prompt("el ser humano ha llegado más alto o más profundo sin usar equipamiento?");
    if (pregunta == "alto") {
        alert("correcto");

    } else {
        alert("incorrexto")
    }
    var color = prompt("¿Cuál es el color que resulta de mezclar rojo y azul?");
    if (color.toLowerCase() == "morado" || color.toLowerCase() == "púrpura") {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto, es morado o púrpura");
    }
} else {
    alert("valor introducido incorrexto escoge entre 1y 4")
};


// 8.  Crear un menú contextual. Se repite hasta que el usuario elige la opción “Salir”.

let x
let y
let numero;
do {
    console.log("menu")
    console.log("1. suma");
    console.log("2.multiplicar");
    console.log("3.salir");
    numero = Number(prompt("es coge un numero para moverte por el menu"));
    if (numero == 1) {
        x = Number(prompt("introduce un numero"));
        y = Number(prompt("introduce otro numero"))
    } else if (numero == 2) {
        x = Number(prompt("introduce un numero"));
        y = Number(prompt("introduce otro numero"));
    } else {
        alert("error");
    }
} while (numero != 3);


// 9.  Crear el juego de piedra papel o tijera. (Podemos investigar math.random()).

var numero = Math.floor(Math.random() * 3) + 1;
var pruba = Number(prompt("intro duce 1. para piedar , 2. para tiegera , 3. papel "))
if (numero == 1) {
    alert("pidra")
    if (numero == pruba) {
        alert("enpate");
    } else if (pruba == 2) {
        alert("perdiste");
    } else if (pruba == 3) {
        alert("ganaste");
    } else {
        alert("error");
    }
} else if (numero == 2) {
    alert("tigera")
    if (numero == pruba) {
        alert("enpate");
    } else if (pruba == 3) {
        alert("perdiste");
    } else if (pruba == 1) {
        alert("ganaste");
    } else {
        alert("error");
    }
} else if (numero == 3) {
    alert("papel");
    if (numero == pruba) {
        alert("enpate");
    } else if (pruba == 1) {
        alert("perdiste");
    } else if (pruba == 2) {
        alert("ganaste");
    } else {
        alert("error");
    }
} else {
    alert("es incorexto")

}


// 10. Mostrar los primeros 100 números primos.


let numero = 2;
let n = 1;
while (n <= 100) {
    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(numero);
        n++;
    }
    numero++;

}



//11 navasesh
numero = Number(prompt("introduce invertido"))

while (numero >= 10) {
    var adittion = 0;
    while (numero > 0) {
        adittion + numero % 10
        numero = adittion;
    }
    numero = adittion;
}
alert("la suma es " + adition);
