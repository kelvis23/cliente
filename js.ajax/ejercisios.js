//Utilizando la API de los ejemplos previos
//(https://stephen-king-api.onrender.com/api/books ) hay que crear una función
//llamada obtenerLibros que utilice fetch y await para obtener los datos de la
//API y convertir la respuesta a JSON, para poder mostrar los títulos de los libros.

async function obtenerLibros() {
        try {
                const response = await
                        fetch("https://stephen-king-api.onrender.com/api/books")

                const data = await response.json();
                const title = data.data.map(item => item.Title)
                console.log(title);
        } catch (error) {
                console.error(error);
        }
}

obtenerLibros();
//Bonus extra: utilizando lo que sabemos de manejo del DOM, crear una tabla
//con título y año de cada libro 🤪
/*
const table = document.querySelector("#biblioteca");

async function obtenerLibros() {
    try {
        const response = await fetch("https://stephen-king-api.onrender.com/api/books");
        const data = await response.json();

        data.data.forEach(item => {
            const fila = document.createElement("tr");

            const titulo = document.createElement("td");
            titulo.textContent = item.Title;

            const año = document.createElement("td");
            año.textContent = item.Year;

            fila.appendChild(titulo);
            fila.appendChild(año);
            table.appendChild(fila);
        });

    } catch (error) {
        console.error("Error al obtener los libros:", error);
    }
}
*/
//TIP: Podemos utilizar alguna extensión (P.ej. JSON Viewer Pro en Chrome)
//para ver la estructura del JSON.


const table = document.querySelector("#biblioteca");

async function obtenerLibros() {
    try {
        const response = await fetch("https://stephen-king-api.onrender.com/api/books");
        const data = await response.json();

        data.data.forEach(item => {
            const fila = document.createElement("tr");

            const titulo = document.createElement("td");
            titulo.textContent = item.Title;

            const año = document.createElement("td");
            año.textContent = item.Year;

            // Imagen usando Open Library
            const imagenTd = document.createElement("td");
            const imagen = document.createElement("img");
            imagen.src = `https://covers.openlibrary.org/b/isbn/${item.ISBN}-M.jpg`;
            imagen.alt = item.Title;
            imagen.style.width = "80px";

            imagen.onerror = () => {
                imagen.src = "https://via.placeholder.com/80x120?text=Sin+Imagen";
            };

            imagenTd.appendChild(imagen);

            fila.appendChild(titulo);
            fila.appendChild(año);
            fila.appendChild(imagenTd);

            table.appendChild(fila);
        });

    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerLibros();