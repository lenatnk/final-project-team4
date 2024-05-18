var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n-1);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].className += " active";
  dots[slideIndex-1].className += " active";
} 

function check(n) {
  const selectedAnswer = document.querySelector('input[name="flexRadioDefault"]:checked');
  
    if (selectedAnswer.value === "correct") {
      alert("Correct! Great job!");
    } else {
      alert("Your answer is incorrect. Try again.")
      } 
}
    
    