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

    // Hide all map containers when changing cards
    const mapContainers = document.querySelectorAll('.map-container');
    mapContainers.forEach(container => {
        container.style.display = 'none'; // Hide each map container
    });

    // Optionally, reset button text for all buttons
    const buttons = document.querySelectorAll('.show-map');
    buttons.forEach(button => {
        button.textContent = 'Show Map'; // Reset button text to "Show Map"
    });
}


function toggleMap(button) {
    const mapContainer = button.nextElementSibling; // Get the map container next to the button
    const isHidden = mapContainer.style.display === 'none';

    // Toggle the display property
    mapContainer.style.display = isHidden ? 'block' : 'none';

    // Optionally, you could change the button text based on visibility
    button.textContent = isHidden ? 'Hide Map' : 'Show Map';
}
