window.onscroll = function(){
    if(document.documentElement.scrollTop > 500){
        document.querySelector(".go-top-container")
        .classList.add("show-my")
    }else{
        document.querySelector(".go-top-container")
        .classList.remove("show-my")
    }
}

document.querySelector(".go-top-container")
.addEventListener("click",() =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
