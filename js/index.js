let indice = 0;
const carrusel = document.querySelector('.carrusel-container');
const imagenes = document.querySelectorAll('.imagen');

function moverCarrusel(direccion) {
  indice += direccion;
  if (indice < 0) indice = imagenes.length - 1;
  if (indice >= imagenes.length) indice = 0;

  const desplazamiento = -indice * 100;
  carrusel.style.transition = "transform 0.3s ease-in-out";
  carrusel.style.transform = `translateX(${desplazamiento}%)`;
}

// ==== MODAL ====
const modal = document.getElementById("imagenModal");
const modalImg = document.getElementById("modalImg");
const modalTexto = document.getElementById("modalTexto");

imagenes.forEach((imgContenedor) => {
  const img = imgContenedor.querySelector("img");

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

// ==== SWIPE TÁCTIL CON ARRASTRE ====
let startX = 0;
let currentX = 0;
let isDragging = false;

carrusel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  carrusel.style.transition = "none"; // quitar animación para arrastrar
}, { passive: true });

carrusel.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;
  const desplazamiento = -indice * 100 + (deltaX / carrusel.offsetWidth) * 100;
  carrusel.style.transform = `translateX(${desplazamiento}%)`;
}, { passive: true });

carrusel.addEventListener("touchend", () => {
  isDragging = false;
  const movedPercent = (currentX - startX) / carrusel.offsetWidth;

  if (movedPercent > 0.2) {
    moverCarrusel(-1); // anterior
  } else if (movedPercent < -0.2) {
    moverCarrusel(1); // siguiente
  } else {
    moverCarrusel(0); // vuelve a la actual
  }
});
