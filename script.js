// Simple contact form
const form = document.getElementById('contactForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    msg.textContent = "Your message has been sent successfully!";
    form.reset();
});
