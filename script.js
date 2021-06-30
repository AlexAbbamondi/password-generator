// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//function to generate a password
function generatePassword() {
  //Created empty array to store all characters for password selection
  var combinedCharacters = [];
  var finalPassword = [];
  //Prompt to get the length for the password, if not in range tell user and show prompt again
  passLength = parseInt(prompt("Enter length of password"));

  // If statment to check length
  if (passLength <= 8 || passLength >= 128) {
    alert("Password must be atleast 8 characters and no more than 128");
    passLength = prompt("Enter length of password");
  }

  //Check if special charaters should be included in the new array and if so add them
  var containsSpecialCharacters = confirm(
    "Click ok to confirm special characters in your password"
  );
  if (containsSpecialCharacters === true) {
    combinedCharacters = specialCharacters.concat(combinedCharacters);
    console.log(combinedCharacters);
  }

  //Check if numeric charaters should be included in the new array and if so add them
  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  );
  if (hasNumericCharacters === true) {
    combinedCharacters = numericCharacters.concat(combinedCharacters);
    console.log(combinedCharacters);
  }

  //Check if lowercase charaters should be included in the new array and if so add them
  var hasLowercasedCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  );
  if (hasLowercasedCharacters === true) {
    combinedCharacters = lowerCasedCharacters.concat(combinedCharacters);
    console.log(combinedCharacters);
  }

  //Check if uppercase charaters should be included in the new array and if so add them
  var hasUppercasedCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  );
  if (hasUppercasedCharacters === true) {
    combinedCharacters = upperCasedCharacters.concat(combinedCharacters);
    console.log(combinedCharacters);
  }

  for (let i = 0; i < passLength; i++) {
    var randomChar =
      combinedCharacters[Math.floor(Math.random() * combinedCharacters.length)];
    finalPassword.push(randomChar);
  }
  return finalPassword.join("");
  //try writepassword with finalpassword
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
