window.addEventListener("load", function () {
    const menuItems = document.querySelectorAll(".icon-button");
    const cards = document.querySelectorAll(".card");
    //   console.log(menuItems);
    console.log(cards);
    
    //   로드시 활성화 메뉴랑 카드 index[0]
    //
    menuItems[0].classList.add("active");
    cards[0].classList.add("active");
  
    menuItems.forEach(function (menuItem, index) {
      console.log(menuItem);
      menuItem.addEventListener("click", function () {
        // //   클릭된 메뉴와 해당하는 카드를 비활성화
        menuItems.forEach(function (item) {
          // console.log(item);
          item.classList.remove("active");
        });
        cards.forEach(function (card) {
          console.log(card);
          card.classList.remove("active");
        });
        //   클릭된 메뉴와 해당하는 카드를 활성화
        menuItems[index].classList.add("active");
        cards[index].classList.add("active");
      });
    });
  });
  //누르면 다른거 다 보이기
  //다른거 누르면 클래스명으로 직관해서 작용하게
  