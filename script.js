
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("show");
}



// Add your JavaScript code here
function animateProgressBar(elementId, skill, targetProgress, duration) {
let progressBar = document.getElementById(elementId);
let currentProgress = 0;
const increment = targetProgress / (duration / 10);

function updateProgressBar() {
    if (currentProgress < targetProgress) {
        currentProgress += increment;
        progressBar.style.width = currentProgress + "%";
        progressBar.textContent = skill + " " + Math.round(currentProgress) + "%";
        setTimeout(updateProgressBar, 10);
    }
}

updateProgressBar();
}

// Call the animation function for each skill
animateProgressBar("html-progress","" ,90, 1000); // Adjust the values as needed
animateProgressBar("css-progress", "", 80, 1000);   // Adjust the values as needed
animateProgressBar("js-progress", "", 75, 1000); // Adjust the values as needed
animateProgressBar("boot-progress", "", 75, 1000);
animateProgressBar("react-progress", "", 70, 1000);
animateProgressBar("wo-progress", "", 84.5, 1000);
animateProgressBar("ex-progress", "", 80, 1000);

animateProgressBar("ppt-progress", "", 75, 1000);



