function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}

window.addEventListener('scroll', function () {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    if (window.scrollY > 0 && menuLinks.classList.contains('open')) {
        menuLinks.classList.remove('open');
        hamburgerIcon.classList.remove('open');
    }
});