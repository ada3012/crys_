let indice = 0;
const carrusel = document.querySelector('.carrusel-container');
const imagenes = document.querySelectorAll('.imagen');

function moverCarrusel(direccion) {
  // Calcula el nuevo índice
  indice += direccion;
  if (indice < 0) indice = imagenes.length - 1; // Vuelve al final
  if (indice >= imagenes.length) indice = 0; // Vuelve al inicio

  // Mueve el carrusel
  const desplazamiento = -indice * 100; // Ancho de cada imagen
  carrusel.style.transform = `translateX(${desplazamiento}%)`;
}
