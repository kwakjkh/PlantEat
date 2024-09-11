window.addEventListener("load", function () {
    // 버튼 클릭시 이동
    const itsBetter = this.document.getElementById("about_itsBetter");
    const thePlantEat = this.document.getElementById("about_thePlantEat");
    const itsBetterWrap = this.document.querySelector(".about_its-better");
    const thePlantEatWrap = this.document.querySelector(".about_the-plant-eat");
    const thePlantEatTech = this.document.querySelector(".the-plant-eat_about_main-bg");

    // 더플랜잇 스크롤영역
    const thePlantEatMore = this.document.querySelector(".the-plant-eat_flip"); //배경
    const thePlantEatMore_Bg = this.document.querySelector(".the-plant-eat_about_main-section");
    const thePlantEatMore_BgLogo = this.document.querySelector(".the-plant-eat_about_main-section > .the-plant-eat_flip");
    const thePlantEatTechLine = document.querySelectorAll(".tech");
    // const tpeBgVideo = this.document.querySelector(".video > video");
    // if (tpeBgVideo.paused) {
    //   tpeBgVideo.play();
    // }
    const thePlantEatThink_Bg = this.document.querySelector(".the-plant-eat-s-think-bg");
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
      offset: "-70%",
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
    const info_closebtn = this.document.querySelectorAll(".info_close-bt");
    info_closebtn.forEach((info_closebtns) => {
      info_closebtns.addEventListener("click", function () {
        const closebtns_infos = info_closebtns.closest(".tech");
        const techInfo = closebtns_infos.querySelector(".tech-infos");
        if (closebtns_infos) {
          techInfo.classList.remove("info_active");
          thePlantEatMore.classList.remove("bg-m_line1-after");
          thePlantEatMore.classList.remove("bg-m_line2-after");
          cAni_1Line.classList.remove("m_line1-after");
          cAni_2Line.classList.remove("m_line2-after");
          cAni_3Line.classList.remove("m_line3-after");
          cAni_1Line.classList.remove("hide");
          cAni_2Line.classList.remove("hide");
          cAni_3Line.classList.remove("hide");
        }
      });
    });


    const sw_tpe_more = new Swiper(".sw-mobile-the-plant-eat_about", {
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  })




  });
  