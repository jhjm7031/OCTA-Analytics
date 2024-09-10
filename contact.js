document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
});