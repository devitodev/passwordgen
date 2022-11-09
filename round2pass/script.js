var passwordLength = 8;
var allOptions = [];

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','=','<','>'];
var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", genPrompt);

// Get references to the #generate element

// Write password to the #password input
function writePassword(password) {
  // const password = generatePassword();
  // showPasswordForm()
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function generatePassword() {

// }

function genPrompt () {
  characterLength = parseInt(prompt('What is your preferred length for your password?'))
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number 8-128, my dude");
    // return false;
    genPrompt()
  }
  if (confirm('Include lowercase letters?')) {
    allOptions = allOptions.concat(lowercaseLetters);
  }
  if (confirm('Include uppercase letters?')) {
    allOptions = allOptions.concat(uppercaseLetters);
  }
  if (confirm('Include symbols')) {
    allOptions = allOptions.concat(symbols);
  }
  if (confirm('Include number?')) {
    allOptions = allOptions.concat(numbers);
  }
  // return true;
  writePassword(allOptions)
}

// Function for password options window



// Liam's way of prompting
// function showPasswordForm() {
//     const passwordForm = document.getElementById('password-form')
//     if (passwordForm.style.display === "") {
//       passwordForm.style.display = "block"
//     }
//   }
//   console.log(showPasswordForm())








//   getRandomLower = () => {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// },
// function getRandomUpper () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// },
// function getRandomNumber () {
//   return (Math.floor(Math.random() * 10))
// },
// function getRandomSymbol () {
//   const symbols = '!@#$%^&*(){}[]=<>,.'
//   return String.fromCharCode(Math.floor(Math.random() * symbols.length) + 48);
// }
// }

