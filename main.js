let search= document.querySelector('.search-box');
document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
}
var swiper = new Swiper(".vehicles-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop:true,
      grabCursor:true,
      centeredSlides:true,
      autoplay:{
          delay:9500,
          disableOnInteraction:false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        20: {
          slidesPerView: 3,
          
        },
      },
    });
    document.querySelector(".contact-form").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Your message has been sent successfully!");
  });
  