function country(n) {
  var textElement = document.querySelector('.text-' + n); // Select the text element corresponding to the marker
  
  if (textElement) {
    textElement.classList.add('active'); // Add the 'active' class to show the text
  }

  var countryElement = document.querySelector(`.country-${n}`); // Select the country element corresponding to the marker
  if (countryElement) {
    countryElement.classList.add('hovered');
  }
}

function resetCountry(n) {
  var textElement = document.querySelector('.text-' + n); // Select the text element corresponding to the marker
  
  if (textElement) {
    textElement.classList.remove('active'); // Remove the 'active' class to hide the text
  }

  var countryElement = document.querySelector(`.country-${n}`); // Select the country element corresponding to the marker
  if (countryElement) {
    countryElement.classList.remove('hovered');
  }
}





// Select all elements with class "country-Japan" and attach event listeners
var countryElements = document.querySelectorAll('.country-Japan');

countryElements.forEach(function(element) {
  // Add event listener for mouseenter event
  element.addEventListener('mouseenter', function() {
    // Apply hover effect to all elements with class "country-Japan"
    countryElements.forEach(function(countryElement) {
    countryElement.setAttribute('fill', '#e5e5e5');
    countryElement.setAttribute('stroke', '#289cd7');
    countryElement.setAttribute('stroke-width', '3');
    countryElement.setAttribute('stroke-linecap', 'butt');
    countryElement.setAttribute('stroke-linejoin', 'round');
    countryElement.setAttribute('stroke-miterlimit', '4');
    countryElement.setAttribute('stroke-dasharray', 'none');
    countryElement.setAttribute('stroke-dashoffset', '0');
    countryElement.setAttribute('stroke-opacity', '1');
    });
  });

  // Add event listener for mouseleave event
  element.addEventListener('mouseleave', function() {
    // Remove hover effect from all elements with class "country-Japan"
    countryElements.forEach(function(countryElement) {
    countryElement.removeAttribute('fill');
    countryElement.removeAttribute('stroke');
    countryElement.removeAttribute('stroke-width');
    countryElement.removeAttribute('stroke-linecap');
    countryElement.removeAttribute('stroke-linejoin');
    countryElement.removeAttribute('stroke-miterlimit');
    countryElement.removeAttribute('stroke-dasharray');
    countryElement.removeAttribute('stroke-dashoffset');
    countryElement.removeAttribute('stroke-opacity');
    });
  });
});