const screenWidth = window.innerWidth;
const errorElement = document.getElementById("error");
errorElement.innerHTML = "";
// Function to validate email addresses
function isValidEmail(email) {
    //checks for the presence of an @ symbol, followed by at least one character on both sides of the @, 
    //and a . symbol followed by at least one character after it.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern and return the result (true or false)
    return emailRegex.test(email);
}

// Function to validate phone numbers
function isValidPhoneNumber(phone) {
    // Define the JS Regex pattern for a valid 10-digit phone number
   const phoneRegex = /^\d{10}$/;
   return phoneRegex.test(phone);
}

// Function to display an error message on the web page
function displayError(message) {
    const errorElement = document.getElementById("error");
    errorElement.innerHTML = message;
    errorElement.style.display = "block";
}
  

 // Function to validate the contact form
 function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["emailForm"].value;
    const phone = document.forms["contactForm"]["phone"].value;
    const errPhone = document.getElementById("error-phone");
    const errEmail = document.getElementById("error-email");
    
    const errors = [];
  
    if (!name) {
      errors.push("Please enter your name.<br>");
    }
    
    if (!email) {
      errors.push("Please enter your email address (example@gmail.com).<br>");
    } else if (!isValidEmail(email)) {
      errors.push("Please enter a valid email address.<br>");
      errEmail.innerHTML = "Please enter a valid email address (example@gmail.com).";
      errEmail.style.display = "block";
    }
  
    if (phone && !isValidPhoneNumber(phone)) {
      errors.push("Please enter a valid phone number.<br>");
      errPhone.innerHTML = "Please enter a valid phone number (must be 10 digits).";
      errPhone.style.display ="block";
    }
    
    if (errors.length > 0) {
      displayError(errors.join(" "));
      if (screenWidth > 768) {
        moveError(errorElement);
      } else {
        errorElement.style.left = "110px";
        // errorElement.style.color = "red";
        errorElement.style.background = "white";
        errPhone.style.display = "none";
        errEmail.style.display = "none"
      }
      return false;
    }
    
    return true;
}
  

  // Function to display an error message on the web page
function displayError(message) {
    errorElement.innerHTML = message;

    errorElement.classList.add("flash-error");
    setTimeout(function() {
        errorElement.classList.remove("flash-error");
    }, finalPosition * 10);

    errorElement.style.display = "block";
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        this.submit();
    }
});
  
// move the error div
let id = null;
let initialPosition = 50; 
let finalPosition = 1000;
function moveError(elem) {
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  
  function frame() {
    if (pos == finalPosition) {
      clearInterval(id);
      id = setInterval(reverseFrame, 10);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }

  function reverseFrame() {
    if (pos == initialPosition) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.left = pos + 'px';
    }
  }
}

function sendOk() {
  if (validateForm()) {
    alert('Your message was sent!');
  }
}
