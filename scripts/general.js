// Get the button
var btnTop = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scroll();
};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    // Smooth scrolling animation with ease-out effect
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    var start = Date.now();

    function scrollStep() {
        const elapsed = Date.now() - start;

        if (elapsed < 500) { // Adjust the duration of the scroll animation (milliseconds)
            const progress = Math.min(elapsed / 500, 1); // 500 is the duration in milliseconds
            const easedProgress = easeOut(progress);

            // Determine how much to scroll for this step
            const scrollAmount = currentScroll * easedProgress;

            // Scroll the document
            document.documentElement.scrollTop = currentScroll - scrollAmount;
            document.body.scrollTop = currentScroll - scrollAmount;

            // Request another animation frame
            requestAnimationFrame(scrollStep);
        } else {
            // Ensure the final position is reached
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }

    // Start the animation
    requestAnimationFrame(scrollStep);
}


function easeOut(progress) {
    return 1 - Math.pow(1 - progress, 3); // Cubic ease-out function
}