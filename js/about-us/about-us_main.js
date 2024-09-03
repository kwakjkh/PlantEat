window.addEventListener("load", function () {
  // 버튼 클릭시 이동
  const itsBetter = this.document.getElementById("about_itsBetter");
  const thePlantEat = this.document.getElementById("about_thePlantEat");
  const itsBetterWrap = this.document.querySelector(".about_its-better")
  const thePlantEatWrap = this.document.querySelector(".about_the-plant-eat")
  itsBetter.addEventListener("click", function () {
    this.classList.add("title-active")
    thePlantEat.classList.remove("title-active")
    itsBetterWrap.classList.add("about-display")
    thePlantEatWrap.classList.remove("about-display")
  });
  thePlantEat.addEventListener("click", function () {
    this.classList.add("title-active")
    itsBetter.classList.remove("title-active")
    thePlantEatWrap.classList.add("about-display")
    itsBetterWrap.classList.remove("about-display")
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
  const thePlantEatMore = this.document.querySelector(".the-plant-eat_flip"); //배경
  const thePlantEatMore_Bg = this.document.querySelector(".the-plant-eat_about_main-section");
  const thePlantEatMore_BgLogo = this.document.querySelector(".the-plant-eat_about_main-section > .the-plant-eat_flip");
  const thePlantEatTechLine = document.querySelectorAll(".tech");
  // const tpeBgVideo = this.document.querySelector(".video > video");
  // if (tpeBgVideo.paused) {
  //   tpeBgVideo.play();
  // }
  const thePlantEatThink_Bg = this.document.querySelector(".the-plant-eat-s-think-bg")
  const waypoint_plantEat_p_bg = new Waypoint({
    element: document.querySelector(".about_the-plant-eat"),
    handler: function (direction) {
      // console.log(direction);
      if (direction === "down") {
        thePlantEatThink_Bg.classList.add("think-bg-active")
      } else {
        thePlantEatThink_Bg.classList.remove("think-bg-active")
      }
    },
    offset: "10%",
  });
  const waypoint_plantEat = new Waypoint({
    element: document.querySelector(".about_the-plant-eat"),
    handler: function (direction) {
      // console.log(direction);
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

  // .click-ani 요소들을 선택
  thePlantEatTechLine.forEach((techs) => {
    const cAni = techs.querySelector(".click-ani");
    const techInfo = techs.querySelector(".tech-infos");
    cAni.addEventListener("click", function () {
      // 모든 .tech-infos 요소에서 info_active 클래스 제거
      document.querySelectorAll(".tech-infos").forEach((info) => {
        info.classList.remove("info_active");
      });

      // 현재 클릭된 요소에만 info_active 클래스 추가
      techInfo.classList.add("info_active");
    });
  });



  const cAni_1 = this.document.querySelector(".line1-after");
  const cAni_1Line = this.document.querySelector(".tech-1 .line");
  const cAni_2 = this.document.querySelector(".line2-after");
  const cAni_2Line = this.document.querySelector(".tech-2 .line");
  const cAni_3 = this.document.querySelector(".line3-after");
  const cAni_3Line = this.document.querySelector(".tech-3 .line");

  cAni_1.addEventListener("click", function () {
    thePlantEatMore.classList.add("bg-m_line1-after");
    cAni_1Line.classList.add("m_line1-after");
    cAni_2Line.classList.remove("m_line2-after");
    cAni_3Line.classList.remove("m_line3-after");
    cAni_2Line.classList.add("hide");
    cAni_3Line.classList.add("hide");
  });
  cAni_2.addEventListener("click", function () {
    thePlantEatMore.classList.add("bg-m_line1-after");
    cAni_2Line.classList.add("m_line2-after");
    cAni_3Line.classList.remove("m_line3-after");
    cAni_1Line.classList.remove("m_line1-after");
    cAni_1Line.classList.add("hide");
    cAni_3Line.classList.add("hide");
  });
  cAni_3.addEventListener("click", function () {
    thePlantEatMore.classList.add("bg-m_line2-after");
    cAni_3Line.classList.add("m_line3-after");
    cAni_2Line.classList.remove("m_line2-after");
    cAni_1Line.classList.remove("m_line1-after");
    cAni_1Line.classList.add("hide");
    cAni_2Line.classList.add("hide");
  });
  const info_closebtn = this.document.querySelectorAll(".info_close-bt")
  info_closebtn.forEach((info_closebtns)=>{
    info_closebtns.addEventListener("click", function(){
      const closebtns_infos = info_closebtns.closest('.tech');
      const techInfo = closebtns_infos.querySelector(".tech-infos");
      if(closebtns_infos) {
        techInfo.classList.remove("info_active")
        thePlantEatMore.classList.remove("bg-m_line1-after")
        thePlantEatMore.classList.remove("bg-m_line2-after");
        cAni_1Line.classList.remove("m_line1-after");
        cAni_2Line.classList.remove("m_line2-after");
        cAni_3Line.classList.remove("m_line3-after");
        cAni_1Line.classList.remove("hide");
        cAni_2Line.classList.remove("hide");
        cAni_3Line.classList.remove("hide");
      }
    })
  })
});
