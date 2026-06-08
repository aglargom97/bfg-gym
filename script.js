// Navbar con efecto scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.backgroundColor = '#000000';
        navbar.style.boxShadow = 'none';
    }
});