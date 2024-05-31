const menubtn = document.querySelector(".menu-btn");
const bar = document.querySelector(".bar");
const close = document.querySelector(".close");
const nav = document.querySelector("#header nav");


let isMenuActive = false;
// Toggle Menu Function Start
const toggleMenu = (isMenuActive)=>{
    if (isMenuActive) {
        bar.style.display = "none";
        close.style.display = "block";
        nav.classList.add("active")
    } else {
        bar.style.display = "block";
        close.style.display = "none";
        nav.classList.remove("active")
    }
}
// Toggle Menu Function End

menubtn.addEventListener("click",()=>{
    isMenuActive = !isMenuActive
    toggleMenu(isMenuActive)
})


nav.addEventListener("click",()=>{
    isMenuActive = false;
    toggleMenu(isMenuActive)
})