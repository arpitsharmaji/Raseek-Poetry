let image = document.getElementById("mainimage");
let images = ["image1.jpg","Raseek Main 2.jpg","image3.jpg","image4.jpg","image5.jpg"];
let index = 0; // Start from first image

setInterval(function(){
    // Fade out effect
    image.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length; // Move to next image in sequence
        image.src = images[index]; // Change image
        image.style.opacity = 1; // Fade in effect
    }, 1000); // Adjust delay to match transition time

}, 4000);