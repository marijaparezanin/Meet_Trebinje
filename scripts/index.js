let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function moveCarousel(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1; // Go to the last card if negative
    } else if (currentIndex >= totalCards) {
        currentIndex = 0; // Go back to the first card if exceeded
    }

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
