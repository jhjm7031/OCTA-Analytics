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

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Thank you for contacting us! We will get back to you soon.');
    // Here, you would normally send the form data to your server using AJAX or a form handler
});