const botonMostrarTarjeta = document.getElementById("mostrarTarjeta");
const tarjeta = document.getElementById("tarjeta");

botonMostrarTarjeta.addEventListener("click", function() {
    if (tarjeta.style.display === "none") {
        tarjeta.style.display = "block";
    } else {
        tarjeta.style.display = "none";
    }
}); 


function toggleMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Agrega un evento al elemento li con id 'menuTrigger' para que el menú se despliegue en hover
document.getElementById('menuTrigger').addEventListener('mouseover', toggleMenu);
document.getElementById('menuTrigger').addEventListener('mouseout', toggleMenu); // Para ocultar el menú cuando se sale del elemento


const text = "PIT DEODORO ROCA";
const typingSpeed = 100; // Velocidad de escritura en milisegundos

const typingEffect = () => {
    const textElement = document.getElementById("typing-effect");
    textElement.innerHTML = ""; // Limpia el contenido del elemento

    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, typingSpeed);
};

typingEffect();

window.addEventListener("scroll", function() {
    const menuToggle = document.getElementById("menuToggle");
    const logo = document.querySelector(".logo");
  
    if (window.pageYOffset > 0) {
      menuToggle.classList.add("fixed");
      logo.classList.add("fixed");
    } else {
      menuToggle.classList.remove("fixed");
      logo.classList.remove("fixed");
    }
  });


  const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  container.addEventListener('click', () => {
    container.classList.toggle('active');
  });
});