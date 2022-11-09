var allOptions = [];

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','=','<','>'];
var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", genPrompt);

function generatePassword(passwordLength, allOptions) {
    var password = '';
    for(var i = 0; i < passwordLength; i++) {
        var randomIndex = (Math.floor(Math.random() * allOptions.length));
        password += allOptions[randomIndex];
    }
    writePassword(password)
}

function writePassword(password) {
    var passwordText = document.querySelector("#password");
   passwordText.value = password;
}

function genPrompt () {
  passwordLength = parseInt(prompt('What is your preferred length for your password? (it must be 8-128)'))
  
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Character length must be a number 8-128, my dude");
    return false;
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

generatePassword(passwordLength, allOptions)

}