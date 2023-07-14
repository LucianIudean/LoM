// Function to validate email addresses
function isValidEmail(email) {
    // Define the JS Regex pattern for a valid email address (with 7 characters after @)
    // const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    //checks for the presence of an @ symbol, followed by at least one character on both sides of the @, 
    //and a . symbol followed by at least one character after it.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern and return the result (true or false)
    return emailRegex.test(email);
}


const newsletterForm = document.getElementById("newsletter");
if (newsletterForm) {
  document.getElementById("newsletter").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  
  if (!isValidEmail(email)) {
    const errorElement = document.getElementById("errorNews");
    errorElement.textContent = "Please enter a valid email address.";
    errorElement.style.display = "block";
    emailInput.classList.add("error-input");
    return;
  }
  
  // Proceed with form submission
  this.submit();
  alert('Your email adress was sent!');
  });
}
