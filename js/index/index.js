window.addEventListener("load", function () {
  AOS.init();

  const swItem = new Swiper(".sw-item", {
    slidesPerView: 1.3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      600: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const swReview = new Swiper(".sw-review", {
    navigation: {
      nextEl: ".sw-next",
      prevEl: ".sw-prev",
    },
    slidesPerView: 2.2,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      800: {
        slidesPerView: 2.8,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2.8,
        spaceBetween: 40,
      },
    },
  });

});
// 페이지 로드 시 및 창 크기 조정 시 함수를 실행
function adjustAOSOffset() {
  const midBanner = document.querySelector(".mid-banner");
  const bottomBanner = document.querySelector(".bottom-banner");
  const topBannerImg = document.querySelector(".top-banner-img");
  const midBannerImg = document.querySelector(".mid-banner-img");
  const bottomBannerImg = document.querySelector(".bottom-banner-img");
  if (window.innerWidth <= 768) {
    // 넓이가 768px 이하일 때 AOS offset을 제거
    midBanner.setAttribute("data-aos-offset", "-300");
    bottomBanner.setAttribute("data-aos-offset", "-300");
    topBannerImg.setAttribute("src", "images/banner/banner_mobile.png");
    midBannerImg.setAttribute("src", "images/banner/eatsbetter_mobile.png");
    bottomBannerImg.setAttribute("src", "images/banner/theplanteat_mobile.png");
  } else {
    // 넓이가 768px 이상일 때 AOS offset을 다시 설정
    midBanner.setAttribute("data-aos-offset", "300");
    bottomBanner.setAttribute("data-aos-offset", "300");
    topBannerImg.setAttribute("src", "images/banner/banner.png");
    midBannerImg.setAttribute("src", "images/banner/eatsbetter.png");
    bottomBannerImg.setAttribute("src", "images/banner/theplanteat.png");
  }
}
document.addEventListener("DOMContentLoaded", adjustAOSOffset); // DOM이 로드되었을 때 실행
window.addEventListener("resize", adjustAOSOffset); // 윈도우 크기 변경 시 실행
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash === "#mayo") {
    const mayoButton = document.querySelector("#mayo button");
    if (mayoButton) {
      mayoButton.click();
    } else {
      console.log("Mayo button not found!");
    }
  }
});
