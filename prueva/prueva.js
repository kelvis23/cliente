//conversor  descimal a exadesimal
/*
var numero = 255
var cos =0
var cos1 = 0
var palabra = ""
var palabra1= ""
while (numero >0){
    cosiente = Math.floor(numero  /16) 
    residuo = cosiente*16
    residuo= numero-residuo
    if(cosiente == 10||cosiente == 11||cosiente == 12||cosiente == 13|| cosiente ==14||cosiente ==15){
        cos =cosiente
    }
    if(residuo == 10||residuo == 11||residuo == 12|| residuo == 13|| residuo ==14||  residuo ==15){
        cos1 =residuo
    }
    numero = cosiente
    console.log(numero)
}
 
 console.log(cos)
 console.log(cos1)
 if( cos == 10){
    palabra = "A"
 }else if(cos == 11){
    palabra = "B"
 } else if(cos == 12){
    palabra = "C"
 } else if(cos == 13){
    palabra = "D"
 } else if (cos ==14) {
    palabra = "E"
 } else if (cos ==15){
     palabra = "F"
 }
 if( cos1 == 10){
    palabra1 = "A"
 }else if(cos1 == 11){
    palabra1 = "B"
 } else if(cos1 == 12){
    palabra1 = "C"
 } else if(cos1 == 13){
    palabra1 = "D"
 } else if (cos1 ==14) {
    palabra1 = "E"
 } else if (cos1 ==15){
     palabra1 = "F"
 }

 alert(palabra +palabra1)
*/
//conservar de segundoa a dias horas y segundos

/*
var segundo = 86530
var minuto = 0
var hora = 0
var dia = 0

    while (segundo >= 60) {
        segundo -= 60
        minuto++
        if (minuto >= 60) {
            minuto = 0
            hora++
            if (hora >= 24) {
                hora = 0
                dia++
            }
        }
        
    }


console.log("dia " + dia + " hora " + hora + " minuto " + minuto + " segundo " + segundo)


*/
//numero perfecto cullos divisorores al sumarlos da su resultado





//encontrar el maximo de un ararray sin array max();
/*
var array = [4,7,8,9,10,23,1,2];
var max  =0
for(let i = 0; i<array.length;i++ ){
    if (array[i] > max){
        max = array[i]
       

    }
}
 alert(max)
 */

