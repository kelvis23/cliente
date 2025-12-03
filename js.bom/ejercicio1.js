
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

/*
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);

*/
/*
setTimeout(() => {
  location.href = "https://www.google.com";
}, 5000);
*/

const mequedo =confirm("deseas ir atras")
if(mequedo == true){
          location.href = "http://localhost:3000/js.bom/html.html"

}
