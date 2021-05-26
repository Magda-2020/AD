// NAVBAR

function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

// SERVICES



// TARIFS

let priceIndex = 1;
priceSlides(priceIndex);

function plusSlides(n) {
  priceSlides(priceIndex += n);
}

function currentSlide(n) {
  priceSlides(priceIndex = n);
}

function priceSlides(n) {
  let i;
  let price = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("dot");
  if (n > price.length) {priceIndex = 1}
  if (n < 1) {priceIndex = price.length}
  for (i = 0; i < price.length; i++) {
      price[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  price[priceIndex-1].style.display = "block";
  dots[priceIndex-1].className += " active";
} 

// Bouton scroll

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 

// Validation de formulaire

function validateForm() {
  let x = document.forms["myForm"]["fname"]["lname"]["email"]["subject"].value;
  if (x == "") {
    alert("Le champs doit être rempli");
    return false;
  }
} 