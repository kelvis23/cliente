
/*

alert("continuar ");
const intervalo = setInterval(()=>{
   const respuesta = confirm("continuar")
if(!respuesta){
    clearInterval(intervalo);
    console.log("terminado")
} 
},5000)
*/

/*
let ususario = localStorage.getItem("usuario");
if (!ususario){
    ususario = prompt("Como te llamas")
    if(ususario){
        localStorage.setItem("usuario",ususario);
    }else{
        ususario = "invitado"
    }
}

alert( `hola, ${ususario}`)

*/
/*
const intervalo = setInterval(()=>{
   console.log(navigator.onLine? "Conectado" : "Sin conexion");

},5000)
*/

//1 mustra en consola datos sobre la url actual :location.hrf-protocol location.host y location.pathname
/*
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);

*/

//2 crea una pagina que pasados 5 segundos teredirija a otra (cambia hrf)

/*
setTimeout(() => {
  location.href = "https://www.google.com";
}, 5000);
*/
//3 in promp que pregunte si cabiar de pagina para llevarnos a otro .html

const mequedo = confirm("deseas moberte ")
if (mequedo == true) {
    location.href = "http://localhost:3000/js.bom/html1.html"
}


//4. mostrar cuantas paginas hay en el historial de navegador 
console.log(history.length)
//5 utilisar un confirme para preguntar al usuario si quiere ir a la pagina anterior 
const respuesta = confirm("¿Quieres ir a la página anterior?");

if (respuesta) {
    history.back(); // o history.go(-1);
} else {
    console.log("El usuario decidió quedarse en esta página.");
}