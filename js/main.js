addEventListener("DOMContentLoaded", function(){
    const iconMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.header-top__nav');
    const bodyLock = this.document.querySelector('body');

    iconMenu.addEventListener('click', function(){
        iconMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    });
});