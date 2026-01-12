
/* que cabie el color de un texto  */
/*
const color = prompt("introduce un color:");
cocat 11, DNS en curso DAW2 - MAÑANA - Despliegnst parrafo = document.querySelectorAll("p")
parrafo.forEach(p=>{
  p.setAttribute("style ")
})
*/
/*
const color = prompt("que tema claro o oscuro:");


if(color=="oscuro"){
  document.body.className = "oscuro";
}else{
  document.body.className = "claro";
}
*/

/*
const nombreGuardado = localStorage.getItem("nombre");
const temaGuardado = localStorage.getItem("tema");
if (temaGuardado) {
  document.body.className = temaGuardado;
}

if (!nombreGuardado || !temaGuardado) {
  const nombre = prompt("¿Cómo te llamas?");
  const tema = prompt("¿Qué tema prefieres, claro u oscuro?");

  
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("tema", tema);

  document.body.className = tema;
}
*/
/*
function setCookie(nombre, valor, dias = 30) {
  const fecha = new Date();
  fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
  document.cookie = `${nombre}=${valor};expires=${fecha.toUTCString()};path=/`;
}


function getCookie(nombre) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === nombre) return value;
  }
  return null;
}

const nombreGuardado = getCookie("nombre");
const temaGuardado = getCookie("tema");


if (temaGuardado) {
  document.body.classList.add(temaGuardado);
}

if (!nombreGuardado || !temaGuardado) {
  const nombre = prompt("¿Cómo te llamas?");
  const tema = prompt("¿Qué tema prefieres, claro u oscuro?");

  setCookie("nombre", nombre);
  setCookie("tema", tema);

  document.body.classList.add(tema);
}
*/

// numeros de veses que ha visitado el usuario la pagina  usando coockis para quardar el numero de vistas 

/* document.cookie devuelve cosas como esta "visitas=3; usuario=Juan; tema=oscuro" 
// con split(";") se vera asi["visitas=3", "usuario=Juan", "tema=oscuro"]
*/

function getCookie(nombre) {
    let cookies = document.cookie.split("; ");
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return cookie[1];
        }
    }
    return null;
}

// la funcion de arriva conparado con esta  funcionan iguales  sola mente que esta para ordenadores antigus y la de arriva para ES6+
function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = nombre + "=" + valor + ";expires=" + fecha.toUTCString() + ";path=/";
}


let visitas = getCookie("visitas");

if (visitas === null) {
    visitas = 1;
} else {
    visitas = parseInt(visitas) + 1;
}


setCookie("visitas", visitas, 2);


console.log("Has visitado esta página " + visitas + " veces");

