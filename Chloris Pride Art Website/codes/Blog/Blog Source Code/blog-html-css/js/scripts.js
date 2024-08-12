$(document).ready(function() {
  $(".menu-toggle").on("click", function() {
    $(".nav").toggleClass("showing");
    $(".nav ul").toggleClass("showing");
  });

  $(".post-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

ClassicEditor.create(document.querySelector("#body"), {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote"
  ],
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1"
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2"
      }
    ]
  }
}).catch(error => {
  console.log(error);
});

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
