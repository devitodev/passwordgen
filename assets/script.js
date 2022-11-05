// Assignment code here

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}
function getRandomSymbol () {
  const symbols = '!@#$%^&*(){}[]=<>,.'
  return String.fromCharCode(Math.floor(Math.random() * symbols.length) + 48);
}

console.log(getRandomLower(),getRandomUpper(),getRandomNumber(), getRandomSymbol());

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
