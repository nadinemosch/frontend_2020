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


var button = document.getElementById('addButton');

button.addEventListener('click', productToevoegen);

function productToevoegen(){
	button.classList.toggle('welToegevoegd');
    var isToegevoegd = button.classList.contains('welToegevoegd')
    
    if(isToegevoegd){
        button.textContent='Delete from cart'
    }
    else{
        button.textContent='Add to cart'
    }
}