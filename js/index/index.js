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

  // 높이 값을 계산하는 함수
  function calculateHeights() {
    const headerHeight = document.querySelector(".header").offsetHeight;
    const bannerHeight = document.querySelector(".banner").offsetHeight;
    return headerHeight + bannerHeight;
  }

  // 높이 값 변수 선언 및 초기 계산
  let totalHeight = calculateHeights();

  const header = document.querySelector(".header");
  const mainBanner = document.querySelector(".banner");

  // 스크롤 이벤트 처리 함수
  function handleScroll() {
    const scy = document.documentElement.scrollTop;

    if (scy > totalHeight) {
      header.classList.remove("hide");
      header.classList.add("active");
      mainBanner.classList.add("hide");
      header.style.transform = "translateY(0)"; // 헤더를 완전히 보이게 설정
    } else if (scy > mainBanner.offsetHeight) {
      // 810px ~ 920px 사이에서는 헤더가 점진적으로 내려오며 보이기 시작
      let translateY = (scy - totalHeight) * 0.5; // Y축 이동 값 계산
      header.style.transform = `translateY(${translateY}px)`;
      header.classList.remove("hide");
      header.classList.add("active");
      mainBanner.classList.add("hide");
    } else if (scy > header.offsetHeight) {
      header.classList.add("hide");
      header.classList.remove("active");
      mainBanner.classList.remove("hide");
      header.style.transform = "translateY(-90px)"; // 헤더가 위로 사라지도록 설정
    } else {
      header.classList.remove("hide");
      header.classList.remove("active");
      header.style.transform = "translateY(0)"; // 헤더를 원래 위치에 고정
    }
  }

  // 스크롤 이벤트 리스너 등록
  window.addEventListener("scroll", handleScroll);

  // 창 크기 변경 시 높이 값을 다시 계산하고 스크롤 처리
  window.addEventListener("resize", () => {
    totalHeight = calculateHeights(); // 높이 값 재계산
    handleScroll(); // 현재 스크롤 위치에 따른 처리
  });
});
