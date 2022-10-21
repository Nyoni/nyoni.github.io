const burgerIcon = document.querySelector(".burger-icon");
const mainMenu = document.querySelector(".main-menu");
const closeMenu = mainMenu.querySelector(".mobile-menu-close");
const goBack = mainMenu.querySelector(".go-back");
let subMenu;

//change title & slide right sub menu
mainMenu.addEventListener("click", (e) => {
 //for reject click in main menu on > 992px
 if (!mainMenu.classList.contains("active")) return;
 if (e.target.closest(".menu-with-submenu")) {
  const hasSubmenu = e.target.closest(".menu-with-submenu");
  showSubMenu(hasSubmenu);
 }
});
function showSubMenu(hasSubMenu) {
 subMenu = hasSubMenu.querySelector(".sub-menu");
 subMenu.classList.add("active");
 subMenu.style.animation = "slideRight 0.5s ease ";
 const menuTitle = hasSubMenu.querySelector("a").innerText;
 mainMenu.querySelector(".current-menu-title").innerText = menuTitle;
 mainMenu.querySelector(".mobile-menu-head").classList.add("active");
}

//click on back goto mian menu
goBack.addEventListener("click", () => {
 backToMainMenu();
});
function backToMainMenu() {
 subMenu.style.animation = "slideLeft 0.5s ease ";
 setTimeout(() => {
  subMenu.classList.remove("active");
 }, 300);
 mainMenu.querySelector(".current-menu-title").innerText = "";
 mainMenu.querySelector(".mobile-menu-head").classList.remove("active");
}

//show Main Menu by click on burger icon
burgerIcon.addEventListener("click", () => {
 toggleMenu();
});

//close Main Menu
closeMenu.addEventListener("click", () => {
 toggleMenu();
});
document.querySelector(".menu-backdrop").addEventListener("click", () => {
 toggleMenu();
});

//==========FUNCTION
function toggleMenu() {
 mainMenu.classList.toggle("active");
 document.querySelector(".menu-backdrop").classList.toggle("active");
}

//============on wide resize
window.onresize = function () {
 if (this.innerWidth > 992) {
  if (mainMenu.classList.contains("active")) {
   toggleMenu();
  }
 }
};

