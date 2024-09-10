document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.offer-container');
    const leftNav = document.querySelector('.carousel-nav.left');
    const rightNav = document.querySelector('.carousel-nav.right');

    leftNav.addEventListener('click', () => {
        container.scrollBy({
            left: -250, // Adjusted scroll amount
            behavior: 'smooth'
        });
    });

    rightNav.addEventListener('click', () => {
        container.scrollBy({
            left: 250, // Adjusted scroll amount
            behavior: 'smooth'
        });
    });
});