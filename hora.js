const fechaHora = new Date();

document.getElementById("fecha").textContent =
    fechaHora.toLocaleDateString("es-ES");

document.getElementById("hora").textContent =
    fechaHora.toLocaleTimeString("es-ES");