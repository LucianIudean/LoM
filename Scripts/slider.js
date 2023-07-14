const elem = document.querySelectorAll(".manual");
const arrayElem = Array.from(elem);
const divDots = document.getElementsByClassName("div-dots")[0];
const noSlides = document.querySelectorAll(".mySlides");
for (let i = 0; i < noSlides.length; i++) {
  const dots = document.createElement("span");
  dots.classList.add("dot", "active");
  divDots.appendChild(dots);
}

let slideIndex = 0;
showSlides()

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  progress();

  setTimeout(showSlides, 7000);
}

function progress() {
  let width = 0;
  const elem = document.getElementById("myBar");
  const myInterval = setInterval(frame, 60);

  function frame() {
    if (width >= 100) {
      clearInterval(myInterval);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

//? pop-up hamburger menu
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const popupMenu = document.querySelector('.popup-menu');

  menuToggle.addEventListener('click', function() {
    popupMenu.style.display = (popupMenu.style.display === 'block') ? 'none' : 'block';
  });

  popupMenu.addEventListener('mouseout', function(event) {
    const otherElement = event.relatedTarget;
    if (!popupMenu.contains(otherElement)) {
      popupMenu.style.display = 'none';
    }
  });
});
