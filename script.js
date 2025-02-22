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




$(document).ready(function() {
  
    $('.slick-slider').bxSlider({
      minSlides: 1,
      maxSlides: 1,
      controls: false
    });
    
    $( ".explore-button" ).hover(function() {
      $( this ).parent().addClass("hovered-card");
    }, function() {
      $( this ).parent().removeClass("hovered-card");
    }
  );
    
  });