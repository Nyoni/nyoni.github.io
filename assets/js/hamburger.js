const hamburger_menu = document.querySelector(".hamburger-menu");
const navcontainer = document.querySelector(".nav-container");

hamburger_menu.addEventListener("click", () => {
    navcontainer.classList.toggle("active");
})