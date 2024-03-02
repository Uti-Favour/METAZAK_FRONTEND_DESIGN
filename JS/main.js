document.addEventListener('DOMContentLoaded' , function(){
let navButton = document.getElementById('btn');
let hiddenToggle = document.querySelector('.menu_toggle_hidden');





const fadeInElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
  fadeInElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const triggerHeight = window.innerHeight * 0.8; // Adjust the percentage as needed

    if (rect.top < triggerHeight && rect.bottom >= 0) {
      element.classList.add("in-view");
    } else {
      element.classList.remove("in-view");
    }
  });
}

window.addEventListener("scroll", checkFadeIn);
window.addEventListener("resize", checkFadeIn);

// Initial check when the page is loaded
checkFadeIn();


});