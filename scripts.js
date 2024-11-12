// Toggle visibility of Hire Me dropdown menu
document.querySelector('.dropdown-button').addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent click from closing the dropdown
  const dropdownContent = document.querySelector('.dropdown-content');
  
  // Toggle the display of the dropdown content
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if clicking outside of it
document.addEventListener('click', function() {
  const dropdownContent = document.querySelector('.dropdown-content');
  if (dropdownContent) {
    dropdownContent.style.display = 'none';
  }
});

// Dynamic Project Items
document.addEventListener("DOMContentLoaded", function() {
  const projectItems = document.querySelectorAll('.project-item');

  function handleScroll() {
      projectItems.forEach(item => {
          const itemTop = item.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          // Check if the item is within the viewport
          if (itemTop < windowHeight - 50) {
              item.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', handleScroll);

  // Trigger the function on page load to reveal items already in view
  handleScroll();
});

// Section Scrolling for Internal Links Only
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) { // Only apply to internal links
          link.addEventListener("click", function (event) {
              event.preventDefault();
              const targetId = href.substring(1);
              const targetSection = document.getElementById(targetId);
              if (targetSection) {
                  targetSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                  });
              }
          });
      }
  });
});

// Experience Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.experience-item');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.getElementById('next-slide').addEventListener('click', nextSlide);
document.getElementById('prev-slide').addEventListener('click', prevSlide);

// Initialize the first slide as active
showSlide(currentSlide);