// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  showPasswordForm()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function showPasswordForm() {
  const passwordForm = document.getElementById('password-form')
  if (passwordForm.style.display === "") {
    passwordForm.style.display = "block"
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber () {
    return (Math.floor(Math.random() * 10))
}
function getRandomSymbol () {
  const symbols = '!@#$%^&*(){}[]=<>,.'
  return String.fromCharCode(Math.floor(Math.random() * symbols.length) + 48);
}

console.log(getRandomUpper());