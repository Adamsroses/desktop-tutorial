document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const toggleButton = document.querySelector('.toggle-button');
    const navbarNav = document.querySelector('.navbar-nav');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
        link.style.transform = 'scale(1.1)';
      });
  
      link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';
      });
    });
  
    toggleButton.addEventListener('click', function() {
      navbarNav.style.display = navbarNav.style.display === 'block' ? 'none' : 'block';
    });
});

function toggleMenu() {
  var navbarLinks = document.getElementById("navbarLinks");
  var overlay = document.querySelector(".overlay");
  var bars = document.querySelectorAll('.bar');
  navbarLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  bars.forEach(function(bar) {
    bar.classList.toggle("animate");
  });
  // Toggle the hamburger icon and exit icon
  var navbarToggle = document.querySelector(".navbar-toggle");
  navbarToggle.classList.toggle("exit");
}

document.addEventListener("DOMContentLoaded", function() {
    const hiddenSections = document.querySelectorAll('.hidden-section');
  
    function showSection() {
      hiddenSections.forEach(function(hiddenSection) {
        const sectionTop = hiddenSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        if (sectionTop < screenHeight * 0.75) {
          hiddenSection.classList.add('visible-section');
        }
      });
  
      // Remove the event listener if all sections are visible
      if (document.querySelectorAll('.hidden-section:not(.visible-section)').length === 0) {
        window.removeEventListener('scroll', showSection);
      }
    }
  
    window.addEventListener('scroll', showSection);
  
    // Call the function initially to check if any sections are already visible
    showSection();
  });

