window.addEventListener("load", function () {
  AOS.init();



  window.addEventListener("resize", function () {
    swBanner.update();
    document.querySelector(".sw-banner").style.zIndex = "1"; // 다시 z-index 설정
  });
  const swItem = new Swiper(".sw-item", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  const swReview = new Swiper(".sw-review", {
    navigation: {
      nextEl: ".sw-next",
      prevEl: ".sw-prev",
    },
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    breakpoints:{
      800:{
        slidesPerView:3,
        spaceBetween:30
      },
      1200:{
        slidesPerView:3,
        spaceBetween:40
      }
    }
  });






});
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hash === '#mayo') {
    const mayoButton = document.querySelector('#mayo button');
    if (mayoButton) {
      mayoButton.click();
    } else {
      console.log('Mayo button not found!');
    }
  }
});
