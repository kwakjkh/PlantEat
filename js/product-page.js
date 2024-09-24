let ppNum = 1; // 초기 수량 값
let ppPrice = 3800; // 초기 가격 값
let d_coupon = 3500;

// 물건들의 수량을 감소시키는 함수
function discount(count, price) {
  if (ppNum > 1) {
    // 수량이 1 이하로 내려가지 않도록 설정
    ppNum -= count;
    ppPrice -= price;
  }
  displayPpNum();
  displayTotal();
}

// 물건들의 수량을 증가시키는 함수
function add(count, price) {
  ppNum += count;
  ppPrice += price;
  displayPpNum();
  displayTotal();
}

// 수량을 화면에 표시하는 함수
function displayPpNum() {
  const num = document.querySelector(".num");
  const all_p = document.querySelector(".all_p");
  num.innerHTML = ppNum; // 수량을 표시
  all_p.innerHTML = `${ppPrice.toLocaleString()}`;
}

// 쿠폰 할인 적용 함수
function couponDiscount(coupon) {
  if (d_coupon < 3500) {
    // 최대 3500원까지 할인 가능
    d_coupon += coupon;
  } else {
    d_coupon -= coupon;
  }
  displayCoupon();
  displayTotal();
}

// 쿠폰 할인 금액을 화면에 표시하는 함수
function displayCoupon() {
  const coupon_discount = document.querySelector("#coupon-discount");
  coupon_discount.innerHTML = `${d_coupon.toLocaleString()}`;
}

// 총 가격을 화면에 표시하는 함수 (쿠폰 할인을 반영)
function displayTotal() {
  const total_price = document.querySelector(".total_price");
  const overcoupon = document.querySelector("#coupon-discount");
  const common_price = ppPrice;
  const discountedPrice = ppPrice + d_coupon; // 쿠폰 할인을 적용한 총 가격
  const over35000 = d_coupon - 3500;
  if (discountedPrice > 35000) {
    total_price.innerHTML = `${common_price.toLocaleString()}`;
    overcoupon.innerHTML = `${over35000.toLocaleString()}`;
  } else {
    total_price.innerHTML = `${discountedPrice.toLocaleString()}`;
  }
}

window.addEventListener("load", function () {
  displayPpNum();
  displayTotal();
  // 실크 상품 이미지 js
  const sub_img = this.document.querySelectorAll(".sub_img-list > li > img");
  sub_img.forEach(function (img) {
    img.addEventListener("click", () => {
      const mainImg = this.document.querySelector("#mainImg > img");
      console.log(mainImg);
      mainImg.src = img.src;
      mainImg.alt = img.alt;
    });
  });
  // 리뷰, 문의 더보기 누를 시 나타나는 알림창
  const prevbtn = this.document.querySelectorAll(".prev");
  const nextbtn = this.document.querySelectorAll(".next");
  prevbtn.forEach(function (prev) {
    prev.addEventListener("click", function () {
      alert("이전 페이지가 없습니다.");
    });
  });
  nextbtn.forEach(function (next) {
    next.addEventListener("click", function () {
      alert("다음 페이지가 없습니다.");
    });
  });

  // 리뷰, 더보기(하단 숫자) 클릭시 그에 해당하는 페이지 등장
  const review_pages = this.document.querySelectorAll(".best-review-list");
  const review_num_btn = this.document.querySelectorAll(".other_review .num-btn button");

  review_pages[0].classList.add("page_active");
  review_num_btn[0].classList.add("num_active");

  review_num_btn.forEach(function (numBtn, index) {
    numBtn.addEventListener("click", function () {
      review_num_btn.forEach(function (btn) {
        btn.classList.remove("num_active");
      });
      review_pages.forEach(function (pages) {
        pages.classList.remove("page_active");
      });
      // 클릭된 버튼과 페이지만 활성화
      review_num_btn[index].classList.add("num_active");
      review_pages[index].classList.add("page_active");
    });
  });

  const ask_pages = this.document.querySelectorAll(".qna-list");
  const ask_num_btn = this.document.querySelectorAll(".other_ask .num-btn button");

  ask_pages[0].classList.add("page_active");
  ask_num_btn[0].classList.add("num_active");

  ask_num_btn.forEach(function (numBtn, index) {
    numBtn.addEventListener("click", function () {
      ask_num_btn.forEach(function (btn) {
        btn.classList.remove("num_active");
      });
      ask_pages.forEach(function (pages) {
        pages.classList.remove("page_active");
      });
      ask_num_btn[index].classList.add("num_active");
      ask_pages[index].classList.add("page_active");
    });
  });
});
