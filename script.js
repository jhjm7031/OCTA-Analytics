document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.offer-container');
    const leftNav = document.querySelector('.carousel-nav.left');
    const rightNav = document.querySelector('.carousel-nav.right');

    leftNav.addEventListener('click', () => {
        container.scrollBy({
            left: -300, // Adjust scrolling distance
            behavior: 'smooth'
        });
    });

    rightNav.addEventListener('click', () => {
        container.scrollBy({
            left: 300, // Adjust scrolling distance
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
});