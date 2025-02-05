// Function to validate the user input form
function validateForm() {
    // Get the values that the user typed in the first name, last name, and zip code fields
    var firstName = document.getElementById("firstName").value.trim(); // Removes spaces before/after the text
    var lastName = document.getElementById("lastName").value.trim(); // Removes spaces before/after the text
    var zipCode = document.getElementById("zipCode").value.trim(); // Removes spaces before/after the text

    // Combine first name and last name into one variable, making sure to remove any extra spaces
    var fullName = (firstName + " " + lastName).trim();

    // Get the error message area where we will show validation warnings
    var errorMessage = document.getElementById("error-message");

    // Get the form and the palindrome section so we can show/hide them
    var validationContainer = document.querySelector(".validation-container"); // The login form
    var palindromeSection = document.getElementById("palindrome-section"); // The palindrome checker

    // Clear any old error messages before running new checks
    errorMessage.textContent = "";

    // Check if the full name is too long (more than 20 characters)
    if (fullName.length > 20) {
        errorMessage.textContent = "Your full name must be 20 characters or less.";
        return false; // Stops the form from submitting and tells the user to fix the input
    }

    // Check if the zip code is exactly 5 digits and only contains numbers
    if (!/^\d{5}$/.test(zipCode)) {
        errorMessage.textContent = "Zip code must be exactly 5 digits.";
        return false; // Stops the form from submitting and tells the user to fix the input
    }

    // If all checks pass, hide the login form and show the palindrome game
    validationContainer.style.display = "none"; // Hide the form
    palindromeSection.style.display = "block"; // Show the palindrome checker

    return false; // Prevents the form from reloading the page
}

// Function to check if a word is a palindrome
function checkPal() {
    // Get the word or phrase the user typed in and remove any spaces before/after
    var userInput = document.getElementById("palindrome-input").value.trim();

    // Get the area where we will display the results
    var resultsElement = document.getElementById("palindrome-output");

    // If the user didn't type anything, show a warning message
    if (userInput === "") {
        resultsElement.innerHTML = "<p>⚠ Please enter a word or phrase.</p>";
        return; // Stop the function so it doesn't check an empty input
    }

    // Remove spaces inside the input and make all letters lowercase (so it's not case-sensitive)
    var cleanInput = userInput.replace(/\s+/g, '').toLowerCase();

    // Reverse the cleaned input to see if it matches the original input
    var revString = cleanInput.split('').reverse().join('');

    // Compare the original cleaned input with the reversed version
    if (cleanInput === revString) {
        // If they match, the word is a palindrome
        resultsElement.innerHTML = `<p>✅ "${userInput}" is a palindrome!</p>`;
    } else {
        // If they don't match, it is NOT a palindrome
        resultsElement.innerHTML = `<p>❌ "${userInput}" is NOT a palindrome.</p>`;
    }

    // Clear the input field after checking so the user can try another word
    document.getElementById("palindrome-input").value = "";
}

// Function to reset the game and go back to the login form
function endLoop() {
    // Hide the palindrome checker section
    document.getElementById("palindrome-section").style.display = "none";

    // Show the login form again
    document.querySelector(".validation-container").style.display = "block";

    // Clear all input fields so the user has to re-enter them
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("zipCode").value = "";

    // If there was an error message before, remove it
    var errorMessage = document.getElementById("error-message");
    if (errorMessage.textContent !== "") {
        errorMessage.textContent = "";
    }

    // Clear the palindrome input box and reset the results area
    document.getElementById("palindrome-input").value = "";
    document.getElementById("palindrome-output").innerHTML = "";
}
