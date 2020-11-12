// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialcharacters = ["!", `"`, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];

function generatePassword() {

  var passwordlength = prompt("Please select a password length of at least 8 characters and no more than 128 characters")
  var charactersToUse = [];
  var password = "";

  characterSet()

  function characterSet() {

    // IF NOT ( passwordlength >= 8 || passwordlength <= 128 )
    if ((passwordlength < 8 || passwordlength > 128)) {
      // THEN ALERT to the user that they tp provide a correct length
      alert("Please select 8 or more characters")
      // AND EXIT FUNCTION
      return;
    }
    //  CONFIRM if the password generator 'isUsingNumbers'
    var useNumbers = confirm("Would you like your password to contain numbers ?");
    if (useNumbers === true) {
      charactersToUse = charactersToUse.concat(numbers)
    }
    //  CONFIRM if the password generator 'isUsingLowercaseLetters'
    var useLowercaseLetters = confirm("Would you like your password to contain lowercase characters?");
    if (useLowercaseLetters === true) {
      charactersToUse = charactersToUse.concat(lowercase)
    }
    //  CONFIRM if the password generator 'isUsingUppercaseLetters'
    var useUppercaseLetters = confirm("Would you like your password to contain uppercase characters?");
    if (useUppercaseLetters === true) {
      charactersToUse = charactersToUse.concat(uppercase)
    }
    //  CONFIRM if the password generator 'isUsingSpecialCharactersLetters'
    var useSpecialCharacters = confirm("Would you like your password to contain special characters?");
    if (useSpecialCharacters === true) {
      charactersToUse = charactersToUse.concat(specialcharacters)
    }
    // IF NOT 'charactersToUse.lenght'
    if (!charactersToUse.length) {
      alert("Please select at least 1 char")
      characterSet()
    }

  }

  for (var i = 0; i < passwordlength; i++) {
    //  SELECT 'randomCharacter' a character from 'charactersToUse'
    var randomCharacter = charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
    //  APPEND 'randomCharacter' to 'password' string
    password += randomCharacter;


  }
  // RETURN 'password'
  return password;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
