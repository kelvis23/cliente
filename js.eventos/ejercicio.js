const boton = document.getElementById("miBoton");
/*
boton.addEventListener("click",function(){
alert("has echo click")
});
*/


boton.addEventListener("click",(objEvento)=>{
console.log(objEvento)
});

const coordenadas = document.getElementById('coordenadas');

// Escuchar clic en todo el body
document.body.addEventListener('click', function(evento) {
   console.log(`(${evento.screenX}),(${evento.screenY})`)

});
