window.addEventListener("load", function () {
  const noticeBtn = this.document.querySelector(".community-notice-title");
  const noticeSection = this.document.querySelector(".notice-list");
  const qnaBtn = this.document.querySelector(".community-qAa-title");
  const qnaSection = this.document.querySelector(".qAa-list");
  noticeBtn.addEventListener("click", function () {
    noticeBtn.classList.add("active");
    qnaBtn.classList.remove("active");
    noticeSection.style.display = "block";
    qnaSection.style.display = "none";
  });
  qnaBtn.addEventListener("click", function () {
    qnaBtn.classList.add("active");
    noticeBtn.classList.remove("active");
    qnaSection.style.display = "block";
    noticeSection.style.display = "none";
  });
});
