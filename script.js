// document.addEventListener('DOMContentLoaded', () => {

//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

//   // Add a click event on each of them
//   $navbarBurgers.forEach( el => {
//     el.addEventListener('click', () => {

//       // Get the target from the "data-target" attribute
//       const target = el.dataset.target;
//       const $target = document.getElementById(target);

//       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//       el.classList.toggle('is-active');
//       $target.classList.toggle('is-active');

//     });
//   });

const textContainer = document.getElementById("sectionBox");
const text = textContainer.innerText;
let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        textContainer.style.opacity = 1;
        textContainer.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50);
    } else {
        // Animation is complete, you can add logic to stop or perform any other action here
        clearInterval(typingInterval); // Stop the animation
    }
}

// Start the typing animation when the page loads
const typingInterval = setInterval(typeText, 50);







