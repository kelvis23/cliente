const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

const Fecha = new Date();
const diaSemana = dias[Fecha.getDay()]; // Día de la semana correcto


console.log("Buenos días, hoy es " + diaSemana + " " + Fecha.getDate() + " de " +(Fecha.getMonth() + 1) + " del " + Fecha.getFullYear());