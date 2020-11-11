// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialcharacters = ["!", `"`, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];

function generatePassword() {
  var passwordlength = prompt("Please select a password length of at least 8 characters and no more than 128 characters")

  console.log(passwordlength);


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
    console.log(useNumbers);
    console.log(charactersToUse);

    //  CONFIRM if the password generator 'isUsingLowercaseLetters'
    var useLowercaseLetters = confirm("Would you like your password to contain lowercase characters?");
    if (useLowercaseLetters === true) {
      charactersToUse = charactersToUse.concat(lowercase)
    }
    console.log(useLowercaseLetters);
    //  IF 'isUsingLowercaseLetters'
    //  THEN push 'lowercaseLetters' into 'charactersToUse' list

    //  CONFIRM if the password generator 'isUsingUppercaseLetters'
    var useUppercaseLetters = confirm("Would you like your password to contain uppercase characters?");
    if (useUppercaseLetters === true) {
      charactersToUse = charactersToUse.concat(uppercase)
    }
    console.log(useUppercaseLetters);
    //  IF 'isUsingUppercaseLetters'
    //  THEN push 'uppercaseLetters' into 'charactersToUse' list

    //  CONFIRM if the password generator 'isUsingSpecialCharactersLetters'
    var useSpecialCharacters = confirm("Would you like your password to contain special characters?");
    if (useSpecialCharacters === true) {
      charactersToUse = charactersToUse.concat(specialcharacters)
    }
    console.log(useSpecialCharacters);
    //  IF 'isUsingSpecialCharactersLetters'
    //  THEN push 'specialCharacters' into 'charactersToUse' list


    // IF NOT 'charactersToUse.lenght'
    if (!charactersToUse.length) {
      alert("Please select at least 1 char")
      characterSet()
    }
    console.log(charactersToUse)
    // THEN ALERT to the user they they need to provide a correct length 
    // AND EXIT FUNCTION
  }

  // WHILE password.length < passwordlength

  var passwordChar = [];

  for (var i = 0; i < passwordlength; i++) {


    //  SELECT 'randomCharacter' a character from 'charactersToUse'
    var randomCharacter = charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
    //  APPEND 'randomCharacter' to 'password' string
  passwordChar.push(randomCharacter)


  }
  passwordstr = passwordChar.toString();
    console.log(passwordstr)

    // RETURN 'password'
    return passwordstr;

  
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // ```
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}
// Add event listener to generate button
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
