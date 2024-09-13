window.addEventListener("load", function () {
  const left_xilk_carton = this.document.querySelector(".left-xilk-carton");
  const right_xilk_carton = this.document.querySelector(".right-xilk-carton");
  const waypoint_xilk_left = new Waypoint({
    element: document.querySelector(".xilk-nutritionFacts"),
    handler: function (direction) {
      // console.log(direction);
      if (direction === "down") {
        left_xilk_carton.classList.add("carton_active");
      } else {
        left_xilk_carton.classList.remove("carton_active");
      }
    },
    offset: "50%",
  });
  const waypoint_xilk_right = new Waypoint({
    element: document.querySelector(".xilk-nutritionFacts"),
    handler: function (direction) {
      // console.log(direction);
      if (direction === "down") {
        right_xilk_carton.classList.add("carton_active");
      } else {
        right_xilk_carton.classList.remove("carton_active");
      }
    },
    offset: "20%",
  });

  const readingMore = this.document.querySelector("#reading-more");
  const hideP = this.document.querySelector(".use-txt-wrap-p");
  readingMore.addEventListener("click", function(){
    hideP.classList.remove("readMore_active")
    readingMore.style.display = "none"
  })
});
