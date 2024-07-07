document.addEventListener('DOMContentLoaded', function() {
    // Array of gallery items, each with a thumbnail, full-sized image, and description
    const galleryItems = [
        {
            thumbnail: 'images/flowers-pink-small.jpg',
            full: 'images/flowers-pink-large.jpg',
            alt: 'Flowers Pink',
            description: 'Beautiful pink flowers in bloom.'
        },
        {
            thumbnail: 'images/flowers-purple-small.jpg',
            full: 'images/flowers-purple-large.jpg',
            alt: 'Flowers Purple',
            description: 'Stunning purple flowers in the field.'
        },
        {
            thumbnail: 'images/flowers-red-small.jpg',
            full: 'images/flowers-red-large.jpg',
            alt: 'Flowers Red',
            description: 'Vibrant red flowers in a garden.'
        },
        {
            thumbnail: 'images/flowers-white-small.jpg',
            full: 'images/flowers-white-large.jpg',
            alt: 'Flowers White',
            description: 'White flowers with delicate petals.'
        },
        {
            thumbnail: 'images/flowers-yellow-small.jpg',
            full: 'images/flowers-yellow-large.jpg',
            alt: 'Flowers Yellow',
            description: 'Bright yellow flowers under the sun.'
        }
    ];

    const featured = document.getElementById('featured');
    const caption = document.getElementById('caption');
    const thumbnails = document.getElementById('thumbnails');

    // Function to build the thumbnail list dynamically
    function buildThumbnails() {
        galleryItems.forEach((item, index) => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = item.thumbnail;
            img.setAttribute('data-full', item.full);
            img.setAttribute('alt', item.alt);
            img.setAttribute('data-description', item.description);
            img.style.filter = 'grayscale(100%)'; // Apply grayscale filter initially
            if (index === 0) { // Set the first thumbnail as active
                img.classList.add('active');
                img.style.filter = 'none'; // Remove grayscale filter for the active thumbnail
                featured.src = item.full;
                caption.textContent = item.description;
            }
            li.appendChild(img);
            thumbnails.appendChild(li);
        });
    }

    // Function to update the featured image and caption
    function updateFeaturedImage(img) {
        const fullSrc = img.getAttribute('data-full');
        const description = img.getAttribute('data-description');
        featured.src = fullSrc;
        caption.textContent = description;

        // Remove the active class from the currently active thumbnail
        const active = document.querySelector('#thumbnails img.active');
        if (active) {
            active.classList.remove('active');
            active.style.filter = 'grayscale(100%)';
        }

        // Add the active class to the clicked thumbnail
        img.classList.add('active');
        img.style.filter = 'none';
    }

    // Add a click event listener to the thumbnails container
    thumbnails.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            updateFeaturedImage(event.target);
        }
    });

    // Build the thumbnails when the page loads
    buildThumbnails();
});
