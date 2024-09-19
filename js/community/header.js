window.addEventListener("load", function () {
    // AOS.init();
    const navPop = this.document.querySelector(".nav-pop");
    const mobileHeader = this.document.querySelector(".mobile-header");
    const headerClose = this.document.querySelector(".header-close");
    navPop.addEventListener("click", function () {
      mobileHeader.classList.add("mobile-header-active");
    });
    headerClose.addEventListener("click", function () {
      mobileHeader.classList.remove("mobile-header-active");
    });

    const mobileAbout = this.document.querySelector(".mobile-header-nav li img")
    const mobileAboutLi = this.document.querySelector(".mobile-about-us")
    mobileAbout.addEventListener("click",function(){
      mobileAboutLi.classList.toggle("active")
    })





      
  const mbSrc = this.document.querySelector(".mobile-search")
  const mbSrcBar = this.document.querySelector(".mobile-search-bar")
  const mbClose = this.document.querySelector(".mobile-search-bar > button")
  mbSrc.addEventListener("click",function(){
    mbSrcBar.classList.toggle("active")
  })
  mbClose.addEventListener("click", function() {
    mbSrcBar.classList.remove("active");
});



const header = document.querySelector(".header");
const commu = this.document.querySelector(".community")
function applyCSSOnScroll() {
  // header의 높이를 가져옴
  const headerHeight = header.offsetHeight;
  // 현재 스크롤 위치가 header 높이보다 클 경우


  if (window.scrollY >= headerHeight) {
    // header.classList.remove("hide");
    header.classList.add("active");
    commu.classList.add("active")
  } else {
    // header.classList.remove("hide");
    header.classList.remove("active");
    commu.classList.remove("active")
  }
}

// 스크롤할 때마다 applyCSSOnScroll 함수 실행
window.addEventListener('scroll', applyCSSOnScroll);


})