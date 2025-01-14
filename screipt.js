// Handle Scroll Effect on Banner
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bannerImage = document.querySelector('.banner-image');

    if (scrollY > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
