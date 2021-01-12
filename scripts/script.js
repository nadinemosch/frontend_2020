//JavaScript Document

var deButton = document.querySelector('div button');
deButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    var deNav = document.querySelector('nav');
	deNav.classList.toggle('toonMenu');
}

function myFunction(smallImg) {
  var fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}