const navOpenButton = document.querySelector('#nav-open');
const navCloseButton = document.querySelector('#nav-close');
const navElement = document.querySelector('nav');


navOpenButton.addEventListener('click', function(){
    navElement.classList.remove('hide');
//show menu


});

navCloseButton.addEventListener('click', function(){
    navElement.classList.add('hide');
//hide menu


});