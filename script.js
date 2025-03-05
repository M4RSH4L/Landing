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
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
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


document.addEventListener("DOMContentLoaded", function () {
    const slider1 = document.querySelector(".slider-izquierda .slide-track");
    const slider2 = document.querySelector(".slider-derecha .slide-track2   ");

    let isDragging = false;
    let startX;
    let lastScrollLeft1;
    let lastScrollLeft2;

    function startDrag(e) {
        isDragging = true;
        startX = e.pageX || e.touches[0].pageX;
        lastScrollLeft1 = slider1.parentElement.scrollLeft;
        lastScrollLeft2 = slider2.parentElement.scrollLeft;
    }

    function moveDrag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX || e.touches[0].pageX;
        const walk = (startX - x) * 1.5; // Sensibilidad del arrastre

        slider1.parentElement.scrollLeft = lastScrollLeft1 + walk;
        slider2.parentElement.scrollLeft = lastScrollLeft2 - walk; // Movimiento contrario
    }

    function endDrag() {
        isDragging = false;
    }

    // Eventos para detectar arrastre en Slider 1 y 2
    ["mousedown", "touchstart"].forEach(event => {
        slider1.parentElement.addEventListener(event, startDrag);
        slider2.parentElement.addEventListener(event, startDrag);
    });

    ["mousemove", "touchmove"].forEach(event => {
        slider1.parentElement.addEventListener(event, moveDrag);
        slider2.parentElement.addEventListener(event, moveDrag);
    });

    ["mouseup", "mouseleave", "touchend"].forEach(event => {
        document.addEventListener(event, endDrag);
    });
});

