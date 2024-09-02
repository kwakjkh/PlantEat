window.addEventListener("load", function () {
  const swBanner = new Swiper(".sw-banner", {});
  const swReview = new Swiper(".sw-review", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
  });
  const header = this.document.querySelector(".header");
  this.window.addEventListener("scroll", function () {
    scy = this.window.document.documentElement.scrollTop;
    if (scy > 920) {
      header.classList.remove("hide");
      header.classList.add("active");
    }else if (scy > 110) {
      header.classList.add("hide");
      header.classList.remove("active");
    } else {
      header.classList.remove("hide");
      header.classList.remove("active");
    }
  });
});
