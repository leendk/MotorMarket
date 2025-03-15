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
        250: {
          slidesPerView: 3,
          
        },
      },
    });
    document.querySelector(".contact-form").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Your message has been sent successfully!");
  });
  window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    let btn = document.getElementById("topBtn");
    if (window.scrollY > 300) {
        btn.style.display = "block"; 
    } else {
        btn.style.display = "none"; 
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

 
    let btnSvg = document.querySelector("#topBtn svg");
    btnSvg.style.transform = "rotate(360deg)";
    setTimeout(() => {
        btnSvg.style.transform = "rotate(0deg)";
    }, 500);
}

  