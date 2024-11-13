/* ==================== Dropdown Menu ==================== */
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

/* ==================== Project Items ==================== */
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

/* ==================== Nav Links ==================== */
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

/* ==================== Experience Slideshow ==================== */
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

// Hamburger Menu on mobile
const hamburgerIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');
let wasDragging = false; // Flag to detect if dragging occurred

// Toggle the menu when the hamburger icon is clicked (only if not dragging)
hamburgerIcon.addEventListener('click', function() {
  if (!wasDragging) {
    navMenu.classList.toggle('show-menu');
  }
  wasDragging = false; // Reset the flag after the click
});

/* ==================== Spin the burger  ==================== */
const image = document.getElementById('spin-image');

let isDragging = false;
let lastAngle = 0;
let currentRotation = 0;
let velocity = 0; // Rotation velocity
let spinInterval;

// Helper function to calculate the angle between two points
function calculateAngle(x, y, centerX, centerY) {
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
}

// Function to apply momentum spin
function applyMomentum() {
    // Gradually reduce velocity (simulate friction)
    velocity *= 0.95;
    currentRotation += velocity;
    image.style.transform = `rotate(${currentRotation}deg)`;

    // Stop spinning when velocity is very low
    if (Math.abs(velocity) < 0.01) {
        clearInterval(spinInterval);
    }
}

// Start dragging
image.addEventListener('mousedown', (event) => {
    event.preventDefault();
    isDragging = true;
    wasDragging = false; // Reset dragging flag

    // Stop any existing momentum spin
    clearInterval(spinInterval);

    // Get the center of the image
    const rect = image.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate initial angle based on the starting position of the cursor
    lastAngle = calculateAngle(event.clientX, event.clientY, centerX, centerY);
});

// Rotate the image based on mouse movement
image.addEventListener('mousemove', (event) => {
    if (isDragging) {
        event.preventDefault();
        wasDragging = true; // Set dragging flag to true

        // Get the center of the image
        const rect = image.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate the current angle
        const newAngle = calculateAngle(event.clientX, event.clientY, centerX, centerY);
        
        // Calculate the difference between the current angle and the last angle
        let angleDifference = newAngle - lastAngle;

        // Adjust for the flip by checking if the angle difference crosses the 180-degree boundary
        if (angleDifference > 180) {
            angleDifference -= 360;
        } else if (angleDifference < -180) {
            angleDifference += 360;
        }

        // Update the cumulative rotation and velocity
        currentRotation += angleDifference;
        velocity = angleDifference; // Set velocity based on last movement
        image.style.transform = `rotate(${currentRotation}deg)`;

        // Update lastAngle for the next move
        lastAngle = newAngle;
    }
});

// Stop dragging and start momentum spin
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;

        // Start the momentum effect
        clearInterval(spinInterval); // Clear any existing momentum interval
        spinInterval = setInterval(applyMomentum, 16); // 60fps (1000ms/60 ≈ 16ms)
    }
});

// Touch Events for mobile
image.addEventListener('touchstart', (event) => {
    event.preventDefault();
    isDragging = true;
    wasDragging = false; // Reset dragging flag

    // Stop any existing momentum spin
    clearInterval(spinInterval);

    // Get the center of the image
    const rect = image.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate initial angle
    lastAngle = calculateAngle(event.touches[0].clientX, event.touches[0].clientY, centerX, centerY);
});

// Rotate the image based on touch movement
image.addEventListener('touchmove', (event) => {
    if (isDragging) {
        event.preventDefault();
        wasDragging = true; // Set dragging flag to true

        // Get the center of the image
        const rect = image.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate the current angle
        const newAngle = calculateAngle(event.touches[0].clientX, event.touches[0].clientY, centerX, centerY);

        // Calculate the difference between the current angle and the last angle
        let angleDifference = newAngle - lastAngle;

        // Adjust for the flip by checking if the angle difference crosses the 180-degree boundary
        if (angleDifference > 180) {
            angleDifference -= 360;
        } else if (angleDifference < -180) {
            angleDifference += 360;
        }

        // Update the cumulative rotation and velocity
        currentRotation += angleDifference;
        velocity = angleDifference; // Set velocity based on last movement
        image.style.transform = `rotate(${currentRotation}deg)`;

        // Update lastAngle for the next move
        lastAngle = newAngle;
    }
});

// Stop dragging for touch and start momentum spin
document.addEventListener('touchend', () => {
    if (isDragging) {
        isDragging = false;

        // Start the momentum effect
        clearInterval(spinInterval); // Clear any existing momentum interval
        spinInterval = setInterval(applyMomentum, 16); // 60fps (1000ms/60 ≈ 16ms)
    }
});

/* ==================== To top button on mobile  ==================== */
// Select the scroll-to-top button
const scrollToTopButton = document.getElementById('to-top');

// Show button when scrolled down a certain amount
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Adjust scroll value as needed
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});

// Smooth scroll to the top when button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* ==================== Education Details  ==================== */
if (window.innerWidth <= 768) {
  // Select all education items
  const educationItems = document.querySelectorAll('.education-item');

  // Set up the Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-on-scroll'); // Add 'reveal-on-scroll' class when in view
      } else {
        entry.target.classList.remove('reveal-on-scroll'); // Remove 'reveal-on-scroll' class when out of view
      }
    });
  }, {
    threshold: 1 // Trigger when 50% of the element is in view
  });

  // Observe each education item
  educationItems.forEach((item) => {
    observer.observe(item);
  });
}