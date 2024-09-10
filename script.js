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