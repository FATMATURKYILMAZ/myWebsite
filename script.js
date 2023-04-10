window.onscroll=()=>{
let header=document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY>100);
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween:50,
    loop:true,
    grabCursor:true,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });