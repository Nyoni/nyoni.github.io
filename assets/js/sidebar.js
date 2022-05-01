let dropdownmenu = document.querySelector('.dropdown-menu-bar')

document.querySelector('#menu-btn').onclick = () => {
    dropdownmenu.classList.toggle('active');
}

window.onscroll = () =>{
    dropdownmenu.classList.remove('active');
    searchForm.classList.remove('active');

}