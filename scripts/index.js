let hasScrolled = false; // Track if the user has scrolled

window.addEventListener('scroll', function() {
    const textSection = document.querySelector('main');
    const scrollY = window.scrollY;

    console.log(hasScrolled); // Check the scroll state

    // Trigger the shift as soon as user scrolls a little bit
    if (scrollY > 0 && !hasScrolled) {
        hasScrolled = true;
        textSection.style.transform = 'translateY(-60vh)'; // Shift the main section up immediately
    } else if (scrollY === 0 && hasScrolled) {
        hasScrolled = false;
        textSection.style.transform = 'translateY(0)'; // Move it back to the original position
    }
});
