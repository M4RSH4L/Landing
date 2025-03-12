$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 }, //  Movil
            600: { items: 2 }, // Tablet
            1000: { items: 2} //  Pc
        }
    });
    $('.next').click(function() { owl.trigger('next.owl.carousel'); });
    $('.prev').click(function() { owl.trigger('prev.owl.carousel'); });
});



// Codigo de next en servicios

// let currentIndex = 0;
// function nextCard() {
//     const cards = document.querySelector('.cards');
//     const totalCards = document.querySelectorAll('.font-card').length;
//     currentIndex = (currentIndex + 1) % totalCards;
//     cards.style.transform = `translateX(-${currentIndex * 100}%)`;}



// Animacion de letras.$

document.addEventListener("DOMContentLoaded", () => {
    function applyScrollEffect(elementId, targetColor) {
      const letters = document.querySelectorAll(`#${elementId} span`);
  
      window.addEventListener("scroll", () => {
        letters.forEach((letter) => {
          const rect = letter.getBoundingClientRect(); // Posición de la letra en pantalla
          const offset = window.innerHeight * 3; // Punto en el que empieza a cambiar
  
          // Calculamos la visibilidad individual de cada letra
          let visibility = (offset - rect.top) / offset;
          visibility = Math.min(Math.max(visibility, 0), 1); // Limitar entre 0 y 1
  
          // Aplicamos el color según el grupo de texto
          letter.style.color = `rgba(${targetColor === "black" ? "0, 0, 0" : "255, 255, 255"}, ${visibility})`;
        });
      });
    }
  
    applyScrollEffect("text-white", "white"); // Letras que cambian a blanco
    applyScrollEffect("text-black", "black"); // Letras que cambian a negro
  });
  
  
  