const form = document.getElementById("formulario");
const galeria = document.getElementById("galeria");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const ruta = document.getElementById("ruta").value;
    const pie = document.getElementById("pie").value;

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = ruta;

    const texto = document.createElement("p");
    texto.textContent = pie;

    card.appendChild(img);
    card.appendChild(texto);
    galeria.appendChild(card);

    form.reset();
});