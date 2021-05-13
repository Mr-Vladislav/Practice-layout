const menuButton = document.querySelector('.MVP-header-left');
const mainMenu=document.querySelector('.main-menu');
const overlay = document.querySelector('.overlay');
const logoBox = document.querySelector('.main-menu-list-logo');
const logoImage = document.querySelector('.logo-image');
const closeMenu = document.querySelector('.glyphicon-remove');
const dropMenu = document.querySelectorAll('.glyphicon-menu-down')


menuButton.addEventListener('click',function(){
    overlay.classList.add('overlay--active');
    mainMenu.classList.add('main-menu--active');
    logoImage.src = "images/Logo-white.png";
    logoBox.style.background = "#0f58d6";
});
/*overlay.addEventListener('click',function(){
    overlay.classList.remove('overlay--active');
    mainMenu.classList.remove('main-menu--active');
    logoImage.src = "images/Logo.png";
    logoBox.style.background = "#fff";

});*/
closeMenu.addEventListener('click',function(){
    overlay.classList.remove('overlay--active');
    mainMenu.classList.remove('main-menu--active');
    logoImage.src = "images/Logo.png";
    logoBox.style.background = "#fff";

});

dropMenu.forEach(e => e.addEventListener('click', function () {
    this.parentNode.classList.toggle('menu-dropped'); 
    this.parentNode.nextElementSibling.classList.toggle('zero-height');
}))

/*//document.querySelector('.bearings-crawl-left').addEventListener('click', function(){alert('new ALERT')})
// Initialize and add the map*/

