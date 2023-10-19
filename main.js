const botonMostrarTarjeta = document.getElementById("mostrarTarjeta");
const tarjeta = document.getElementById("tarjeta");

botonMostrarTarjeta.addEventListener("click", function() {
    if (tarjeta.style.display === "none") {
        tarjeta.style.display = "block";
    } else {
        tarjeta.style.display = "none";
    }
}); 