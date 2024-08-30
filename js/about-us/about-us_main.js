window.addEventListener("load", function () {
  // 버튼 클릭시 이동
  const itsBetter = this.document.getElementById("about_itsBetter");
  const thePlantEat = this.document.getElementById("about_thePlantEat");
  itsBetter.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".about_its-better").scrollIntoView({ behavior: "smooth" });
  });
  thePlantEat.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".about_the-plant-eat").scrollIntoView({ behavior: "smooth" });
  });
  // 잇츠베러 클릭 영역
  const eatsBetterMore = document.querySelector(".its-better_middle-img_after");
  eatsBetterMore.addEventListener("click", function () {
    eatsBetterMore.style.display = "none";
    const eatsClicking = document.querySelector(".its-better_img"); //앗츠베러 상품 이미지
    const eAboutInfo = document.querySelector(".its-better_i_info"); //잇츠베러 상품 정보
    const goAShop = document.querySelector(".go_a__shop"); //잇츠베러 상품 바로 가기 버튼
    const ePbtList = document.querySelector(".its-better_a_pbt_list"); //잇츠베러 다른 상품 리스트
    const ePbtList1080 = document.querySelector(".its-better_a_pbt-1080"); //잇츠베러 다른 상품 리스트 1080
    eatsClicking.classList.add("its-better_mover");
    eAboutInfo.classList.add("more-infoActive");
    goAShop.classList.add("go_a__shop-active");
    ePbtList.classList.add("a_pbt_list-active");
    ePbtList1080.classList.add("a_pbt_list-active-1080");
  });
  // 잇츠베러 다른 상품 클릭시 이미지 및 상품 정보 바뀌기
  const ePbtListLi = document.querySelectorAll(".its-better_a_pbt_list li img"); //잇츠베러 다른 상품 리스트 li
  ePbtListLi.forEach(function (img) {
    img.addEventListener("click", function () {
      const dataImgSrc = this.getAttribute("data-img_src");
      const dataImgAlt = this.getAttribute("data-img_alt");
      const dataTitle = this.getAttribute("data-title");
      const dataSub1 = this.getAttribute("data-sub1");
      const dataSub2 = this.getAttribute("data-sub2");
      // console.log(dataTitle)
      // console.log(dataSub1)
      // console.log(dataSub2)
      const mainImg = document.querySelector(".ib_display-img");
      const title = document.querySelector(".its-better-i-data_title");
      const sub1 = document.querySelector(".its-better-i-data_sub1");
      const sub2 = document.querySelector(".its-better-i-data_sub2");
      // 이미지 전환 효과를 위해 opacity를 0으로 설정
      mainImg.style.opacity = 0;
      title.style.opacity = 0;
      title.style.transform = "translateX(30px)";
      sub1.style.opacity = 0;
      sub1.style.transform = "translateX(70px)";
      sub2.style.opacity = 0;
      sub2.style.transform = "translateX(80px)";

      setTimeout(function () {
        // 이미지 src와 alt를 업데이트
        mainImg.src = dataImgSrc;
        mainImg.alt = dataImgAlt;

        // 이미지가 부드럽게 나타나도록 opacity를 1로 설정
        mainImg.style.opacity = 1;

        // 텍스트 업데이트
        title.textContent = dataTitle;
        sub1.textContent = dataSub1;
        sub2.textContent = dataSub2;

        setTimeout(function () {
          title.style.opacity = 1;
          title.style.transform = "translateX(0px)";
          sub1.style.opacity = 1;
          sub1.style.transform = "translateX(10px)";
          sub2.style.opacity = 1;
          sub2.style.transform = "translateX(20px)";
        }, 400);
      }, 400); // 0.5초 동안의 투명화 후에 이미지 업데이트
    });
  });
  // 잇츠베러 다른 상품 클릭시 이미지 및 상품 정보 바뀌기 1080
  const ePbtListLi1080 = document.querySelectorAll(".its-better_a_pbt_list-1080 li img"); //잇츠베러 다른 상품 리스트 li
  ePbtListLi1080.forEach(function (img) {
    img.addEventListener("click", function () {
      const dataImgSrc = this.getAttribute("data-img_src");
      const dataImgAlt = this.getAttribute("data-img_alt");
      const dataTitle = this.getAttribute("data-title");
      const dataSub1 = this.getAttribute("data-sub1");
      const dataSub2 = this.getAttribute("data-sub2");
      // console.log(dataTitle)
      // console.log(dataSub1)
      // console.log(dataSub2)
      const mainImg = document.querySelector(".ib_display-img");
      const title = document.querySelector(".its-better-i-data_title");
      const sub1 = document.querySelector(".its-better-i-data_sub1");
      const sub2 = document.querySelector(".its-better-i-data_sub2");
      // 이미지 전환 효과를 위해 opacity를 0으로 설정
      mainImg.style.opacity = 0;
      title.style.opacity = 0;
      title.style.transform = "translateX(30px)";
      sub1.style.opacity = 0;
      sub1.style.transform = "translateX(70px)";
      sub2.style.opacity = 0;
      sub2.style.transform = "translateX(80px)";

      setTimeout(function () {
        // 이미지 src와 alt를 업데이트
        mainImg.src = dataImgSrc;
        mainImg.alt = dataImgAlt;

        // 이미지가 부드럽게 나타나도록 opacity를 1로 설정
        mainImg.style.opacity = 1;

        // 텍스트 업데이트
        title.textContent = dataTitle;
        sub1.textContent = dataSub1;
        sub2.textContent = dataSub2;

        setTimeout(function () {
          title.style.opacity = 1;
          title.style.transform = "translateX(0px)";
          sub1.style.opacity = 1;
          sub1.style.transform = "translateX(10px)";
          sub2.style.opacity = 1;
          sub2.style.transform = "translateX(20px)";
        }, 400);
      }, 400); // 0.5초 동안의 투명화 후에 이미지 업데이트
    });
  });

  // 더플랜잇 스크롤영역
  const thePlantEatMore = this.document.querySelector(".the-plant-eat_flip");
  const thePlantEatMore_Bg = this.document.querySelector(".the-plant-eat_about_main-section");
  const thePlantEatMore_BgLogo = this.document.querySelector(".the-plant-eat_about_main-section > .the-plant-eat_flip");
  const thePlantEatTechLine = document.querySelectorAll(".tech");
  // const tpeBgVideo = this.document.querySelector(".video > video");
  // if (tpeBgVideo.paused) {
  //   tpeBgVideo.play();
  // }
  const waypoint_plantEat = new Waypoint({
    element: document.querySelector(".about_the-plant-eat"),
    handler: function (direction) {
      console.log(direction);
      if (direction === "down") {
        thePlantEatMore.classList.add("hover");
        thePlantEatMore_Bg.classList.add("bg_hover");
        setTimeout(function () {
          thePlantEatTechLine.forEach(function (element) {
            element.classList.add("bgLogo-active");
          });
        }, 400);
      } else {
        thePlantEatMore.classList.remove("hover");
        thePlantEatMore_Bg.classList.remove("bg_hover");
        setTimeout(function () {
          thePlantEatTechLine.forEach(function (element) {
            element.classList.remove("bgLogo-active");
          }, 400);
        });
      }
    },
    offset: "-40%",
  });
});
