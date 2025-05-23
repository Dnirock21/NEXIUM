window.addEventListener("DOMContentLoaded", function () {
  // Código del slider
  let slideIndex = 0;

  // Obtener todas las imágenes del slider
  const slides = document.querySelectorAll(".banner-slider .slide");

  // Función que cambia a la siguiente imagen
  function showNextSlide() {
    slides[slideIndex].classList.remove("active"); // Ocultar imagen actual
    slideIndex = (slideIndex + 1) % slides.length; // Pasar a la siguiente imagen
    slides[slideIndex].classList.add("active"); // Mostrar la nueva imagen
  }

  // Cambiar la imagen cada 3 segundos
  setInterval(showNextSlide, 10000);
});
