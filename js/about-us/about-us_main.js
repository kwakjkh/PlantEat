window.addEventListener("load", function(){
    // 버튼 클릭시 이동
    const itsBetter =this.document.getElementById("about_itsBetter")
    const thePlantEat =this.document.getElementById("about_thePlantEat")
    itsBetter.addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(".about_its-better").scrollIntoView({behavior: "smooth"})
    })
    thePlantEat.addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(".about_the-plant-eat").scrollIntoView({behavior: "smooth"})
    })
    // 잇츠베러 클릭 영역
    const eatsBetterMore = document.querySelector(".its-better_middle-img_after")
    eatsBetterMore.addEventListener("click", function(){
        const eatsClicking = document.querySelector(".its-better_img")
        const moreEatsBetterProducts = document.querySelector(".its-better_more-info")
        eatsClicking.classList.add("its-better_mover")
    })
    // 더플랜잇 스크롤영역
})