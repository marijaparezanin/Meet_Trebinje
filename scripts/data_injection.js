const filePath = "data/";
const jsonFiles = [ 'restaurants.json','attractions.json', 'religious_landmarks.json', 'wineries.json','cities_near_by.json']; 

jsonFiles.forEach(fileName => renderCategory(fileName));
jsonFiles.forEach(fileName => console.log(fileName));



function renderCategory(fileName) {
    fetch(`${filePath}/${fileName}`)
    .then(response => response.json())
    .then(data => {
        const mainContainer = document.getElementById('content');

        // Create a category section
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('card-category');

        // Add branch separator image
        const branchSeparator = document.createElement('img');
        branchSeparator.classList.add('branch-separator');
        branchSeparator.src = 'images/logo/branch_separator.png';
        categoryDiv.appendChild(branchSeparator);

        // Add category title
        const categoryTitle = document.createElement('h1');
        categoryTitle.textContent = data.category_name; // Access the category name directly
        categoryDiv.appendChild(categoryTitle);

        const carouselContainer = document.createElement('div');
        carouselContainer.classList.add('carousel-container');

        const carousel = document.createElement('div');
        carousel.classList.add('carousel');
        carousel.setAttribute('data-current-index', 0);

        // Loop through locations in the JSON
        data.locations.forEach(location => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = location.image_source;
            img.alt = location.alt_name;
            card.appendChild(img);

            const cardText = document.createElement('div');
            cardText.classList.add('card-text');

            const title = document.createElement('h2');
            title.textContent = location.name;
            cardText.appendChild(title);

            const description = document.createElement('p');
            description.innerHTML = location.description; // Use innerHTML to support embedded links
            cardText.appendChild(description);

            const button = document.createElement('button');
            button.classList.add('show-map');
            button.textContent = "Show Map";
            button.addEventListener('click', () => toggleMap(button));
            cardText.appendChild(button);

            const mapContainer = document.createElement('div');
            mapContainer.classList.add('map-container');
            mapContainer.style.display = "none";

            const iframe = document.createElement('iframe');
            iframe.src = location.map_link;
            iframe.width = "600";
            iframe.height = "450";
            iframe.style.border = "0";
            iframe.allowFullscreen = true;
            iframe.loading = "lazy";
            iframe.referrerPolicy = "no-referrer-when-downgrade";
            mapContainer.appendChild(iframe);

            cardText.appendChild(mapContainer);
            card.appendChild(cardText);
            carousel.appendChild(card);
        });

        carouselContainer.appendChild(carousel);

        const prevButton = document.createElement('button');
        prevButton.classList.add('carousel-control', 'prev');
        prevButton.innerHTML = "&#10094;";
        prevButton.addEventListener('click', () => moveCarousel(-1, carousel));
        carouselContainer.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.classList.add('carousel-control', 'next');
        nextButton.innerHTML = "&#10095;";
        nextButton.addEventListener('click', () => moveCarousel(1, carousel));
        carouselContainer.appendChild(nextButton);

        categoryDiv.appendChild(carouselContainer);
        mainContainer.appendChild(categoryDiv);
    })
    .catch(error => console.error('Error loading JSON data:', error));
}
