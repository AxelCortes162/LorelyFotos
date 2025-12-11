const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const overlay = document.querySelector('.mobile-overlay');

menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    overlay.classList.toggle('show');
    menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
        overlay.classList.remove('show');
        menuToggle.textContent = '☰';
    });
});

overlay.addEventListener('click', () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    menuToggle.textContent = '☰';
});
