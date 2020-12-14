// JavaScript Document

// https://codepen.io/shooft/pen/BaKGKwm?editors=1100

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("hamburgerMenu");
}

// EINDOPDRACHT
const hamburger = document.querySelector('.hamburger');
const line = document.querySelector('.line');
const navigation = document.querySelector('.navigation');
hamburger.addEventListener('click', animateHamburger);
const hamburgermenu = document.querySelector ('.hamburgermenu')

function animateHamburger() {
	hamburger.classList.toggle('active');
	navigation.classList.toggle('active');
};
