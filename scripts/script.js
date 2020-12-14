// JavaScript Document

// https://codepen.io/shooft/pen/BaKGKwm?editors=1100

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}
