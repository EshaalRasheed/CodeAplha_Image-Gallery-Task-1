document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.imageContainer img');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeButton = document.getElementById('closeButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentImageIndex = 0;
    function showOverlay(index) {
        currentImageIndex = index;
        overlayImage.src = images[currentImageIndex].src;
        overlay.style.display = 'flex';
    }
    function closeOverlay() {
        overlay.style.display = 'none';
    }
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        overlayImage.src = images[currentImageIndex].src;
    }
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        overlayImage.src = images[currentImageIndex].src;
    }
    images.forEach((img, index) => {
        img.addEventListener('click', () => showOverlay(index));
    });
    closeButton.addEventListener('click', closeOverlay);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
});