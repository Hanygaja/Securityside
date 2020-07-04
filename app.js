
/* Nav Section (Responsive Icon) */
$(document).ready(function () {
    $(".sidenav").sidenav();
  });
  


/* Countries and Companies index page */
var swiper = new Swiper('.swiper-container', {
  
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

