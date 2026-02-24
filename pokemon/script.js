const input = document.getElementById('pokemonInput');
const select = document.getElementById('pokemonSelect');
const btn = document.getElementById('searchBtn');
const card = document.getElementById('pokemonCard');

// 1. Llenar el selector al cargar la página (primeros 150 pokemon)
async function init() {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await resp.json();
    
    data.results.forEach(poke => {
        const option = document.createElement('option');
        option.value = poke.name;
        option.textContent = poke.name.toUpperCase();
        select.appendChild(option);
    });
}

// 2. Función principal para buscar y mostrar
async function getPokemon(nameOrId) {
    if (!nameOrId) return;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`);
        const data = await response.json();

        // Renderizar info en el HTML
        card.innerHTML = `
            <h2>${data.name.toUpperCase()} (#${data.id})</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
            <button onclick="playCrie('${data.cries.latest}')">🔊 Escuchar Grito</button>
        `;

        // Reproducir sonido automáticamente (opcional según el reto)
        playCrie(data.cries.latest);

    } catch (error) {
        card.innerHTML = `<p style="color:red;">Pokémon no encontrado. Intenta de nuevo.</p>`;
    }
}

// 3. Función para el sonido
function playCrie(url) {
    new Audio(url).play();
}

// Eventos
btn.addEventListener('click', () => getPokemon(input.value));
select.addEventListener('change', (e) => getPokemon(e.target.value));

init();