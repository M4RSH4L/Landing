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



