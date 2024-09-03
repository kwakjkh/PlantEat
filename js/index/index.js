window.addEventListener("load", function () {
  AOS.init();
  const swBanner = new Swiper(".sw-banner", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
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
  const mainBanner = this.document.querySelector(".banner")
  this.window.addEventListener("scroll", function () {
    scy = this.window.document.documentElement.scrollTop;
    if (scy > 920) {
      header.classList.remove("hide");
      header.classList.add("active");
      mainBanner.classList.add("hide")
      header.style.transform = "translateY(0)"; // 헤더를 완전히 보이게 설정
    } else if (scy > 810) {
        // 810px ~ 920px 사이에서는 헤더가 점진적으로 내려오며 보이기 시작
        let translateY = (scy - 920) * 0.5; // Y축 이동 값 계산
        header.style.transform = `translateY(${translateY}px)`;
        header.classList.remove("hide");
        header.classList.add("active");
        mainBanner.classList.add("hide")
    }
    else if (scy > 110) {
      header.classList.add("hide");
      header.classList.remove("active");
      mainBanner.classList.remove("hide")
      header.style.transform = "translateY(-90px)"; // 헤더가 위로 사라지도록 설정
    } else {
      header.classList.remove("hide");
      header.classList.remove("active");
      header.style.transform = "translateY(0)"; // 헤더를 원래 위치에 고정
    }
  });
});
