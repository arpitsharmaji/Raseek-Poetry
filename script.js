let image = document.getElementById("raseekbig");
let images = ["Raseek main image2.jpg", "Raseek Main 2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
let index = 0; // Start from the first image

setInterval(function () {
    // Fade out effect
    image.style.transition = "opacity 1s";
    image.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length; // Move to the next image
        image.src = images[index]; // Change the image
        image.style.opacity = 2; // Fade in effect
    }, 500); // Wait for fade-out to complete before changing the image

}, 4000);



//young poets image change
let youngpoetsimage = document.getElementById("youngpoetsid");
let youngpoetsimages = ["youngpoets1.jpg","youngpoets2.jpg","youngpoets3.jpg"];
let poetindex = 0;

setInterval(function () {
    // Fade out effect
    youngpoetsimage.style.transition = "opacity 1s";
    youngpoetsimage.style.opacity = 0;

    setTimeout(() => {
        poetindex = (poetindex + 1) % youngpoetsimages.length; // Move to the next image
        youngpoetsimage.src = youngpoetsimages[poetindex]; // Change the image
        youngpoetsimage.style.opacity = 2; // Fade in effect
    }, 100); // Wait for fade-out to complete before changing the image

}, 1000);


