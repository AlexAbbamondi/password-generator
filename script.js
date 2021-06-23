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

function generatePassword() {
  var combinedPassword = [];
  var passLength = prompt("Enter length of password");
  // If statment to check length
  if (passLength >= 8 && passLength <= 128) {
    console.log(passLength);
  } else {
    alert("Password must be atleast 8 characters and no more than 128");
    var passLength = prompt("Enter length of password");
  }

  //check if characters are included, true or false
  var containsSpecialCharacters = confirm(
    "Click ok to confirm special characters in your password"
  );
  if (containsSpecialCharacters === true) {
    combinedPassword = specialCharacters.concat(combinedPassword);
    console.log(combinedPassword);
  }

  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  );
  if (hasNumericCharacters === true) {
    combinedPassword = numericCharacters.concat(combinedPassword);
    console.log(combinedPassword);
  }

  var hasLowercasedCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  );
  if (hasLowercasedCharacters === true) {
    combinedPassword = lowerCasedCharacters.concat(combinedPassword);
    console.log(combinedPassword);
  }

  var hasUppercasedCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  );
  if (hasUppercasedCharacters === true) {
    combinedPassword = upperCasedCharacters.concat(combinedPassword);
    console.log(combinedPassword);
  }

  //create empty array to contain password
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
