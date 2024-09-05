window.addEventListener("load", function () {
    // 카테고리 클릭시 상품리스트 변경
    const prductsIcon = this.document.querySelectorAll(".prducts-icon > li > button")
    
    prductsIcon.forEach(function(list){
        list.addEventListener("click",function(e){
            e.preventDefault()
            prductsIcon.forEach(function(lists){
                lists.classList.remove("active")
            })
            this.prductsIcon.add("active")

            const prductsItems = document.querySelectorAll(".prducts");
            prductsItems.forEach(function (items) {
                items.style.display = "none";
            });

            const target = this.getAttribute("href");
            document.querySelector(target).style.display = "block";
        })
    })
    cateList[0].click();
})
