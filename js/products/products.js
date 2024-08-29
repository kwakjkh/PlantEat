window.addEventListener("load", function () {
  // 카테고리 클릭시 상품리스트 변경
  const prductsIcon = this.document.querySelectorAll(".prducts-icon > li > a");

  prductsIcon.forEach(function (list) {
    list.addEventListener("click", function (e) {
      e.preventDefault();
      prductsIcon.forEach(function (lists) {
        lists.classList.remove("active");
      });
      thisprductsIcon.add("active");

      const prducts = document.querySelectorAll(".prducts");
      prducts.forEach(function (items) {
        items.style.display = "none";
      });

      const target = this.getAttribute("href");
      document.querySelector(target).style.display = "block";
    });
  });
  cateList[0].click();
});
