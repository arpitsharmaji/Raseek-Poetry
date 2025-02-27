let image = document.getElementById("raseekbig");
let images = ["raseek main image2.jpg", "Raseek Main 2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
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


// Do You Know read more code
function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btn.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btn.textContent = "Read More";
    }
  }

  //preloader code

  document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("a"); // Select all links
    let preloader = document.getElementById("preloader");

    // Show preloader on initial page load
    preloader.classList.add("show");
    setTimeout(() => {
        preloader.classList.remove("show"); // Hide preloader after 2 seconds
    }, 1500);

    // Attach click event to each link
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            let newPage = this.href;

            // Allow external links & empty links to work normally
            if (this.getAttribute("target") === "_blank" || newPage === "#") return;

            // Prevent default action
            event.preventDefault();

            // Show Preloader
            preloader.classList.add("show");

            // Delay navigation by 2 seconds
            setTimeout(() => {
                window.location.href = newPage;
            }, 1500);
        });
    });
});

    // Hide Preloader on Page Load
    // window.onload = function() {
    //     let loader = document.getElementById("preloader");
    //     setTimeout(() => {
    //         loader.classList.add("hidden");
    //     }, 1000); // Fade out after page loads
    // };


