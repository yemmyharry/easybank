const navMenuIcon = document.getElementById('navMenuIcon');
const mobileMenu = document.getElementById('mobileMenu');

navMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
