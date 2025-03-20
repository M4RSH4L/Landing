// Carousel
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





// Animacion de aparicion gradual
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



// Desplegable
function toggleText(event) {
    // Obtener el botón y el texto en el contexto de la tarjeta específica
    let toggleButton = event.target;
    let text = toggleButton.previousElementSibling;  // Asume que el texto está antes del botón

    // Cambiar la visibilidad del texto y el texto del botón
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        toggleButton.textContent = "Ver menos.";
    } else {
        text.style.display = "none";
        toggleButton.textContent = "Ver más...";
    }
}

// Añadir el evento a todos los botones con la clase 'toggle-text'
document.querySelectorAll('.toggle-text').forEach(button => {
    button.addEventListener('click', toggleText);
});


