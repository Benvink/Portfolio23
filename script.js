document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

const navbar = document.querySelector('navSectionBar');

window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // Set a threshold for when to add/remove the sticky class
  const threshold = 50; // Adjust this value as needed

  // Add or remove the sticky class based on the scroll position
  if (scrollY >= threshold) {
    navbar.classList.add('navbar-sticky');
  } else {
    navbar.classList.remove('navbar-sticky');
  }
});



const textToType = [
    "I'm a ",
    "<strong>growth product manager</strong> with a ",
    "<strong>broad range of experience</strong> in startups and scale-ups ",
    "across multiple industries and verticals. My main areas of focus are: ",
    "<ul>",
    "<li class='arrow-list-item'>Sustainability</li>",
    "<li class='arrow-list-item'>SaaS</li>",
    "<li class='arrow-list-item'>FinTech</li>",
    "</ul>"
  ];
  
  const arrowListCSS = `
    .arrow-list-item {
      list-style-type: none;
      padding-left: 20px;
      background:  no-repeat left center;
    }
  `;
  
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = arrowListCSS;
  document.head.appendChild(styleSheet);
  
  const typingContainer = document.getElementById("typing-container");
  const typingText = document.getElementById("typing-text");
  const cursor = document.getElementById("cursor");
  let partIndex = 0;
  
  function typeText() {
    if (partIndex < textToType.length) {
      typingText.innerHTML += textToType[partIndex];
      partIndex++;
      setTimeout(typeText, 1000);
    } else {
      cursor.style.display = "none";
    }
  }
  
  typeText();

  const portfolioBlurb = document.querySelector('.portfolioBlurb');
  const selectedPortfolioProjects = document.querySelector('.selectedPortfolioProjects');
  
  window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      const selectedProjectsOffsetTop = selectedPortfolioProjects.getBoundingClientRect().top;
  
      if (scrollY > selectedProjectsOffsetTop) {
          portfolioBlurb.style.top = `${scrollY - selectedProjectsOffsetTop}px`;
      } else {
          portfolioBlurb.style.top = '0';
      }
  });