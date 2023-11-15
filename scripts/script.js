// JavaScript Document
console.log("hi");

const imageContainer = document.getElementById('image-container');
const images = imageContainer.querySelectorAll('img');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].style.display = 'none';

  currentImageIndex = (currentImageIndex + 1) % images.length;

  images[currentImageIndex].style.display = 'block';
}

// Stel de tijd in tussen de afbeeldingswisselingen (in milliseconden)
setInterval(showNextImage, 200); // Verander dit getal naar de gewenste intervaltijd