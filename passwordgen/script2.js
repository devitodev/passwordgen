
var allOptions = [];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','=','<','>'];
var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", genPrompt);

function generatePassword(passwordLength,password) {
  let remaining = 0;
  remaining = passwordLength - password.length;
    for(var i = 0; i < remaining; i++) {
        var randomIndex = (Math.floor(Math.random() * allOptions.length));
        password += allOptions[randomIndex];
    }
    writePassword(password)
}

function loopCharacter (arr) {
  var randomIndex = (Math.floor(Math.random() * arr.length));
        return arr[randomIndex];
}

function writePassword(password) {
    var passwordText = document.querySelector("#password");
   passwordText.value = password;
   password = "";
}

function genPrompt () {
  var password = ""
  let passwordLength = parseInt(prompt('What is your preferred length for your password? (it must be 8-128)'))
  
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Character length must be a number 8-128, my dude");
    return null;
  }
  if (confirm('Include lowercase letters?')) {
    allOptions = allOptions.concat(lowercaseLetters);
    password += loopCharacter(lowercaseLetters)
  }
  if (confirm('Include uppercase letters?')) {
    allOptions = allOptions.concat(uppercaseLetters);
    password += loopCharacter(uppercaseLetters)
  }
  if (confirm('Include symbols')) {
    allOptions = allOptions.concat(symbols);
    password += loopCharacter(symbols)
  }
  if (confirm('Include number?')) {
    allOptions = allOptions.concat(numbers);
    password += loopCharacter(numbers)
  }

generatePassword(passwordLength,password)

}