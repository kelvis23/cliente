let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

let button1 = document.querySelector('#button1');
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
  { name: 'espada de madera', power: 5 },
  { name: 'daga', power: 30 },
  { name: 'martillo', power: 50 },
  { name: 'espada', power: 100 }
];

const monsters = [
  { name: "slime", level: 2, health: 15 },
  { name: "gobli", level: 8, health: 60 },
  { name: "dragón", level: 20, health: 300 }
];

const locations = [
  {
    name: "plaza del pueblo",
    "button text": ["Ir a la tienda", "Ir a la cueva", "Luchar contra el dragón"],
    "button functions": [goStore, goCave, fightDragon],
    text: "Estás en la plaza del pueblo. Ves un cartel que dice \"Store\"."
  },
  {
    name: "tienda",
    "button text": ["Comprar 10 de salud (10 oro)", "Comprar arma (30 oro)", "Volver a la plaza"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "Entras a la tienda. Ves algunos objetos interesantes."
  },
  {
    name: "mazmorra",
    "button text": ["Luchar contra slime", "Luchar contra fanged beast", "Volver a la plaza"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "Entras a la mazmorra. Ves algunos monstruos."
  },
  {
    name: "pelea",
    "button text": ["Atacar", "Esquivar", "Huir"],
    "button functions": [attack, dodge, goTown],
    text: "Estás luchando contra un monstruo."
  },
  {
    name: "matar monstruo",
    "button text": ["Volver a la plaza", "Volver a la plaza", "Volver a la plaza"],
    "button functions": [goTown, goTown, goTown],
    text: 'El monstruo grita "¡Arg!" al morir. Ganas experiencia y encuentras oro'
  },
  {
    name: "derrota",
    "button text": ["¿REINICIAR?", "¿REINICIAR?", "¿REINICIAR?"],
    "button functions": [restart, restart, restart],
    text: "Has muerto. &#x2620;"
  },
  { 
    name: "victoria", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "¡Derrotaste al dragón! ¡GANASTE EL JUEGO! &#x1F389;" 
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "¿Volver a la plaza?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "Encuentras un juego oculto. Elige un número. Se elegirán 10 números al azar entre 0 y 10. ¡Si el número que eliges aparece, ganas!"
  }
];

// ========================================
// FUNCIONES PARA MANEJAR EVENTOS EN BOTONES
// ========================================
function setButtonListeners(button, newListener) {
  // Si ya hay un listener, lo removemos
  if (button.currentListener) {
    button.removeEventListener("click", button.currentListener);
  }
  button.currentListener = newListener;
  button.addEventListener("click", newListener);
}

// ========================================
// FUNCIONES DEL JUEGO
// ========================================
function update(location) {
  monsterStats.style.display = "none";
  text.innerHTML = location.text;

  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];

  setButtonListeners(button1, location["button functions"][0]);
  setButtonListeners(button2, location["button functions"][1]);
  setButtonListeners(button3, location["button functions"][2]);
}

function goTown() { update(locations[0]); }
function goStore() { update(locations[1]); }
function goCave() { update(locations[2]); }

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "No tienes suficiente oro para comprar salud.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "Ahora tienes una " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " En tu inventario tienes: " + inventory;
    } else {
      text.innerText = "No tienes suficiente oro para comprar un arma.";
    }
  } else {
    text.innerText = "¡Ya tienes el arma más poderosa!";
    button2.innerText = "Vender arma por 15 oro";
    setButtonListeners(button2, sellWeapon);
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let soldWeapon = inventory.shift();
    text.innerText = "Vendiste una " + soldWeapon + ".";
    text.innerText += " En tu inventario tienes: " + inventory;
    currentWeapon--;
  } else {
    text.innerText = "¡No vendas tu única arma!";
  }
}

function fightSlime() { fighting = 0; goFight(); }
function fightBeast() { fighting = 1; goFight(); }
function fightDragon() { fighting = 2; goFight(); }

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "El " + monsters[fighting].name + " ataca.";
  text.innerText += " Atacas con tu " + weapons[currentWeapon].name + ".";
  
  health -= getMonsterAttackValue(monsters[fighting].level);
  
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " Fallas el ataque..";
  }

  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;

  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) winGame();
    else defeatMonster();
  }

  if (Math.random() <= 0.1 && inventory.length !== 1) {
    text.innerText += " Tu " + inventory.pop() + " se rompe";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > 0.2 || health < 20;
}

function dodge() {
  text.innerText = "Esquivas el ataque del " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() { update(locations[5]); }
function winGame() { update(locations[6]); }

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() { update(locations[7]); }

function pickTwo() { pick(2); }
function pickEight() { pick(8); }

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "Elegiste " + guess + ". Estos son los números aleatorios:\n";
  for (let i = 0; i < 10; i++) text.innerText += numbers[i] + "\n";

  if (numbers.includes(guess)) {
    text.innerText += "¡Correcto! ¡Ganas 20 de oro!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "¡Incorrecto! Pierdes 10 de salud.";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) lose();
  }
}

// ========================================
// INICIALIZAR BOTONES
// ========================================
setButtonListeners(button1, goStore);
setButtonListeners(button2, goCave);
setButtonListeners(button3, fightDragon);
