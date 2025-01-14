// Smooth scrolling for CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
        top: target.offsetTop - 50, // Adjust for padding
        behavior: 'smooth'
    });
});
