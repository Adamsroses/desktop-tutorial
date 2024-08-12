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