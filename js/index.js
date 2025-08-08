let indice = 0;
const carrusel = document.querySelector('.carrusel-container');
const imagenes = document.querySelectorAll('.imagen');

function moverCarrusel(direccion) {
  // Cicla el índice
  indice += direccion;
  if (indice < 0) indice = imagenes.length - 1;
  if (indice >= imagenes.length) indice = 0;

  // Mueve el carrusel
  const desplazamiento = -indice * 100;
  carrusel.style.transform = `translateX(${desplazamiento}%)`;
}

// ==== MODAL ====
const modal = document.getElementById("imagenModal");
const modalImg = document.getElementById("modalImg");
const modalTexto = document.getElementById("modalTexto");

imagenes.forEach((imgContenedor) => {
  const img = imgContenedor.querySelector("img");
  const titulo = imgContenedor.querySelector(".carrusel_title");

  img.addEventListener("click", () => {
  const textoModal = imgContenedor.getAttribute("data-text") || "Sin descripción.";
  modal.style.display = "block";
  modalImg.src = img.src;
  modalTexto.innerText = textoModal;
});

});

function cerrarModal() {
  modal.style.display = "none";
}

// ==== SWIPE TÁCTIL ====
let touchStartX = 0;
let touchEndX = 0;

const umbral = 50; // píxeles mínimos para considerar swipe

carrusel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carrusel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;

    if (diff > umbral) {
        moverCarrusel(1); // swipe izquierda
    } else if (diff < -umbral) {
        moverCarrusel(-1); // swipe derecha
    }

    // Reiniciar
    touchStartX = 0;
    touchEndX = 0;
}, { passive: true });
