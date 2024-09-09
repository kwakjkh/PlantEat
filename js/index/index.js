window.addEventListener("load", function () {
  AOS.init();

  const swBanner = new Swiper(".sw-banner", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // on: {
    //   init: function () {
    //     const slides = document.querySelectorAll(".swiper-slide");
    //     slides.forEach(slide => {
    //       slide.style.zIndex = "1";
    //     });
    //   },
    //   resize: function () {
    //     const slides = document.querySelectorAll(".swiper-slide");
    //     slides.forEach(slide => {
    //       slide.style.zIndex = "1";
    //     });
    //   },
    // },
    // watchSlidesVisibility: true,
  });

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
