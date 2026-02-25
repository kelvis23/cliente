
const API_KEY = 'RVLvg3lVCjSV1PmOw6o3rqN2KR0zHJd8smiSBUNL'; 
const resultsContainer = document.getElementById('resultsContainer');
const infoCard = document.getElementById('infoCard');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async () => {
    const animalName = document.getElementById('animalInput').value;
    const url = `https://api.api-ninjas.com/v1/animals?name=${animalName}`; 

    try {
        const response = await fetch(url, {
            headers: { 'X-Api-Key': API_KEY } 
        });
        
        const data = await response.json();
        renderResults(data);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
});

function renderResults(animals) {
    resultsContainer.innerHTML = '';
    infoCard.innerHTML = '';

    animals.forEach(animal => {
        const btn = document.createElement('button');
        btn.className = 'animal-btn';
        btn.textContent = animal.name; 
        
        btn.onclick = () => showAnimalDetails(animal);
        
        resultsContainer.appendChild(btn);
    });
}

function showAnimalDetails(animal) {
    infoCard.innerHTML = `
        <h3>${animal.name}</h3>
        <p>Dieta: ${animal.characteristics.diet || 'N/A'}</p>
        <p>Hábitat: ${animal.characteristics.habitat || 'Desconocido'}</p>
        <p>Esperanza de vida: ${animal.characteristics.lifespan || 'N/A'}</p>
    `;
}