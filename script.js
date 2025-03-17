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
document.addEventListener("DOMContentLoaded", function () {
  function revealSteps() {
      let section = document.querySelector(".steps-section , .containeer");
      let steps = document.querySelectorAll(".step , .containeer, .cards-containeer");
      let screenPosition = window.innerHeight * 0.8; // Ajuste para mejor detección

      if (section) {
          let sectionPosition = section.getBoundingClientRect().top;

          if (sectionPosition < screenPosition) {
              section.classList.add("visible");
          } else {
              section.classList.remove("visible");
          }
      }

      steps.forEach(step => {
          let position = step.getBoundingClientRect().top;

          if (position < screenPosition) {
              step.classList.add("visible");
          } else {
              step.classList.remove("visible"); // Se oculta si vuelve a salir de la vista
          }
      });
  }

  window.addEventListener("scroll", revealSteps);
  revealSteps(); // Llamado inicial para verificar la visibilidad
});



