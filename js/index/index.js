window.addEventListener("load", function () {
    const swReview = new Swiper(".sw-review", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView : 3,
        spaceBetween : 40
      });
});
