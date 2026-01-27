// 1 - Realiza un ejercicio como el del ejemplo, con un div que contenga un div que contenga otro div. 
// Prueba el bubbling creando eventos para cada uno. (Prueba también con alguno de los eventos que no generan propagación).
const padre = document.getElementById("padre");
const hijo = document.getElementById("hijo");
const nieto = document.getElementById("nieto");

padre.addEventListener('click', () => {
alert('Padre clicado');
});

hijo.addEventListener('click', () => {
alert('Hijo clicado');
})

nieto.addEventListener('click', (event) => {
alert('nieto clicado');
event.stopPropagation();
});

//2 - Duplica el ejercicio anterior y evita el bubbling.
const padre1 = document.getElementById("padre1");
const hijo1 = document.getElementById("hijo1");
const nieto1 = document.getElementById("nieto1");

padre1.addEventListener('click', (event) => {
alert('Padre clicado');
event.stopPropagation();
});

hijo1.addEventListener('click', (event) => {
alert('Hijo clicado');
event.stopPropagation();
})

nieto1.addEventListener('click', (event) => {
alert('nieto clicado');
event.stopPropagation();
});


 // 3- Pon en práctica la cancelación, crea un enlace que dirija a una web y suprime la redirección. 
 // Puedes probar a cambiar algo de este elemento para mostrar que ya no redirige una vez hecho el primer clic.
 const link = document.getElementById("link")
 link.addEventListener("click",(event)=>{
    event.preventDefault(); //canselar navegasion
    alert("actual mente nos se puede ir al sitio ");
    
 })

//4 - Reutiliza el contador de la otra hoja de ejercicios y haz que se lance un evento cuando llegue a 10
 var num =0;
  const contador = document.getElementById("contador");
  const boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
  if (num === 10) {
      alert("¡El contador ha llegado a 10!");
      boton.removeEventListener('click',clicUnaVez);
  }

  num += 1;
  contador.textContent = num;
});

boton.addEventListener("click", clicUnaVez);




/*
let num = 0;

boton.addEventListener("click", () => {
  num += 1;
  contador.textContent = num;

  if (num === 10) {
    alert("¡El contador ha llegado a 10!");
    boton.disabled = true; // más simple que removeEventListener
  }
});
*/