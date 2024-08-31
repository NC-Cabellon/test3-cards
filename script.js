document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const popup = document.getElementById('description-popup');
    const closeButton = document.getElementById('close-btn');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.getAttribute('data-name');
            const description = card.getAttribute('data-description');
            const imageSrc = card.querySelector('img').src;

            popupImage.src = imageSrc;
            popupTitle.textContent = name;
            popupDescription.textContent = description;
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup if clicked outside of the content
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
