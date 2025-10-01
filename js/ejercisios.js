

/* 1- Crear una calculadora de IVA. */
// - pedir numero
// - operar numero
// - devolver numero


var tasa = 0.21;
var base = Number(prompt("introduca su numero "));

var IVA = base * tasa;
alert("tu total es " +IVA) 


/* Se le piden al usuario tres números y se devuelve la media. */


var num1 = Number(prompt("introduce el primer numero"));
var num2 = Number(prompt("introduce el segundo numero"));
var num3 = Number(prompt("introduce el terser numero"));

var media = (num1 + num2 + num3)/3;
alert("la media es "+media) ;


/*   El usuario introduce un número y la consola indica si es par o impar. */


 var base = Number(prompt("introduca su numero "));

if(base %2==0){
    alert("el numero es  par");
}else{
    alert("el numero es inpar");
}


/*   Se le piden al usuario tres nombres y se evalúa si al menos hay dos repetidos.*/


var nombre1 = prompt("introduce el primer nombre");
var nombre2 = prompt("introduce el segundo nombre");
var nombre3 = prompt("introduce el terser nombre");

if(nombre1 == nombre2){
    alert(nombre1+" es un nobre repetido");
}else if (nombre2 == nombre3){
     alert(nombre2+" es un nobre repetido");
}else if(nombre3 == nombre1){
     alert(nombre3+" es un nobre repetido");
}else {
    alert("no hay nigun nombre repetido");
}


/*   Se introduce la nota numérica del examen y devuelve categoría (suspenso, aprobado, notable…). */

var nota = Number(prompt("introduce un numero"));

if (nota >= 8) {
    alert("notable");
} else if (nota >= 5) {
    alert("aprobado");
} else if (nota >10) {
 echo("la nota no es balida")
}else{
    alert("suspenso");
}







/*  Se introduce el año de nacimiento y se indica si es mayor de edad o no. */

 var año = Number(prompt("introduce tu año de nasimiento"));

var edad = 2025 - año;

if(edad >=18){
    alert ("es mayor de edad");
}else{
    alert("es menor de edad");
}








/*   Se pide el DNI y se calcula la letra. BONUS */

var dni = Number(prompt("introduce el numero de dni"));

var media = dni%23;

if (media ==0){
    alert("T")
}else if(media == 1){
    alert("r")

}else if(media == 2){
        alert("w")

}else if(media == 3){
        alert("a")

}else if(media == 4){
        alert("g")

}else if(media == 5){
        alert("m")

}else if(media == 6){
        alert("y")

}else if(media == 7){
        alert("f")

}else if(media == 8){
        alert("p")

}else if(media == 9){
        alert("d")

}else if(media == 10){
        alert("x")

}else if(media == 11){
        alert("b")

}else if(media == 12){
        alert("n")

}else if(media == 13){
        alert("j")

}else if(media == 14){
            alert("z")

}else if(media == 15){
        alert("s")

}else if(media == 16){
        alert("q")

}else if(media == 17){
        alert("v")

}else if(media == 18){
        alert("h")

}else if(media == 19){
        alert("l")

}else if(media == 20){
        alert("c")

}else if(media == 21){
        alert("k")
}else if(media == 22){
            alert("e")
}else {
    alert("el numero dni es incorexto ")
}