// Assignment code here
function generatePassword() {
  // Follow the prompts to select what you would like to include in your password
  alert("Follow the prompts to select what you would like to include in your password.");
var lowerCase = confirm("Would you like to include lower case letters?");
  if (lowerCase === true){
  }
var upperCase = confirm("Would you like to include upper case letters?");
  if (upperCase === true){
  }
var numbers = confirm("Would you like to include numbers?");
  if (numbers === true){
 }
var symbols = confirm("Would you like to include special characters?");
  if (symbols === true){
 }
 var password = "";
for (let i = 0; i < lengthNumber; i++) {
  if (lowerCase === true) {
    password = password + (getRandomLower());
  }
  if (upperCase === true) {
    password = password + (getRandomUpper());
  }
  if (numbers === true) {
    password = password + (getRandomNumber());
  }
  if (symbols === true) {
    password = password + (getRandomSymbol());
  }
}

};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate random lower, upper, number, and symbol functions
function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "`!@#$%^&*(){}[]=<>/,.'";
  return symbols [Math.floor(Math.random() * symbols.length)];
}