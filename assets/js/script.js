// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
// The character sets for the password
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let specialcharacter = "!@#$%^&*()_+";

  // Password Length
  let charactersLength = prompt("How many characters would you like your password to be?");
  if (charactersLength < 8 || charactersLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }

// Password Criteria
  let useLowercase = confirm("Would you like your password to contain lowercase letters?");
  let useUppercase = confirm("Would you like your password to contain uppercase letters?");
  let useNumbers = confirm("Would you like your password to contain numbers?");
  let useSpecialcharacter = confirm("Would you like your password to contain special characters?");

  // Check to make sure at least one criteria is selected
  if (!useLowercase &&!useUppercase &&!useNumbers &&!useSpecialcharacter) {
    alert("You must choose at least one of the criteria.");
    return;
  }

  // If none of the criteria are selected, return
  let characters = "";

  if (useLowercase) {
    characters += lowercase;
  }
  if (useUppercase) {
    characters += uppercase;
  }
  if (useNumbers) {
    characters += numbers;
  }
  if (useSpecialcharacter) {
    characters += specialcharacter;
  }

  // Generate password
  let password = "";
  for (let i = 0; i < charactersLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Display password
  return password;
}



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
