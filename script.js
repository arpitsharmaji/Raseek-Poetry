let image = document.getElementById("raseekbig");
let images = ["Raseek main image2.jpg", "Raseek Main 2.jpg", "image3.jpg", "image4.jpg","image5.jpg"];
let index = 0;

// Set the initial image
image.src = images[index];

setInterval(function () {
    image.style.opacity = 0; // Start fade-out

    setTimeout(() => {
        index = (index + 1) % images.length; // Move to next image in sequence
        image.src = images[index]; // Change image
        image.style.opacity = 0; // Fade in effect
    }, 0); // Change after fade-out completes

}, 4000);
