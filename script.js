const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image img');
    
    const contentPosition = heroContent.getBoundingClientRect().top;
    const imagePosition = heroImage.getBoundingClientRect().top;
    
    const screenPosition = window.innerHeight / 1.2;

    if (contentPosition < screenPosition) {
        heroContent.classList.add('fadeIn');
    }

    if (imagePosition < screenPosition) {
        heroImage.classList.add('fadeIn');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});