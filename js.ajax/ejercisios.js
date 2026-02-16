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




//TIP: Podemos utilizar alguna extensión (P.ej. JSON Viewer Pro en Chrome)
//para ver la estructura del JSON.