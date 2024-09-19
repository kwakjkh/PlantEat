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



})