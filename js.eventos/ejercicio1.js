//1- Crea un elemento p que cuando situes el ratón por encima cambie de color.


    const elemento = document.getElementById("1");

    elemento.addEventListener("mouseover", function() {
        elemento.style.color = "red";
    });






//2 - Clona el elemento anterior para que en este caso otro p haga lo mismo pero recupere el color original al sacar el ratón de encima.
    const elemento1 = document.getElementById("2");

    elemento1.addEventListener("mouseover", function() {
        elemento1.style.color = "blue";
    });
   
    elemento1.addEventListener("mouseout", function() {
    elemento1.style.color = "black"; 
});


//3 - Crea un elemento h1 contador y un botón que le vaya añadiendo uno cada vez que se pulse.
var num =0;
  const contador = document.getElementById("contador");
  const boton = document.getElementById("3");
  boton.addEventListener("click", function() {
   num+=1
   contador.textContent = num
   
    })



//4 - Crea varios botones con el mismo evento que muestren su texto en consola
// Selecciona todos los botones con la clase "boton"
let botones = document.querySelectorAll(".btn4");

// Recorre todos los botones y les añade el evento
botones.forEach(boton => {
    boton.addEventListener("click", function() {
        console.log(boton.textContent); 
    });
});

//5 - Muestra un mensaje diferente al hacer doble clic en uno de ellos.
let botones2 = document.querySelectorAll(".btn4")[1];


botones2.addEventListener("dblclick", function() {
     console.log("¡Has hecho doble clic en el botón: !");
    
});



//6 - Crea un botón que añada o quite una clase CSS a un elemento.

let parafo = document.querySelector("#btn5");
let texto = document.querySelector("#p1");


parafo.addEventListener("click",function(){
    //toggle añade o quita la clase 
    texto.classList.toggle("p1");

});

