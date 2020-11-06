// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialcharacters = [" ", "!", `"`, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",  ];

function generatePassword() {
  var passwordlength = prompt("Please select a password length of at least 8 characters and no more than 128 characters")
  //   ## Acceptance Criteria
  //confirm ("what is your password?")
  // ```
  console.log(passwordlength);
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters

  // IF NOT ( passwordlength >= 8 || passwordlength <= 128 )
  if (!(passwordlength >= 8 || passwordlength <= 128)) {
    // THEN ALERT to the user that they tp provide a correct length
    alert("WRONG!")
    // AND EXIT FUNCTION
    return;
  }

  // DECLARE a new list of 'charactersToUse'
  var charactersToUse = [];

  // DECLARE a new 'password' string
  var password = "";

  //  CONFIRM if the password generator 'isUsingNumbers'
  var useNumbers = confirm ("Would you like your password to contain numbers ?");

  console.log(useNumbers);
  //  IF 'isUsingNumbers'
  //  THEN push 'numbers' into 'charactersToUse' list
  //  AND APPEND on random number from the 'numbers' list

  //  CONFIRM if the password generator 'isUsingLowercaseLetters'
  var useLowercaseLetters = confirm ("Would you like your password to contain lowercase characters?");

  console.log(useLowercaseLetters);
  //  IF 'isUsingLowercaseLetters'
  //  THEN push 'lowercaseLetters' into 'charactersToUse' list

  //  CONFIRM if the password generator 'isUsingUppercaseLetters'
  var useUppercaseLetters = confirm ("Would you like your password to contain uppercase characters?");

  console.log(useUppercaseLetters);
  //  IF 'isUsingUppercaseLetters'
  //  THEN push 'uppercaseLetters' into 'charactersToUse' list

  //  CONFIRM if the password generator 'isUsingSpecialCharactersLetters'
  var useSpecialCharacters = confirm ("Would you like your password to contain special characters?");

  console.log(useSpecialCharacters);
  //  IF 'isUsingSpecialCharactersLetters'
  //  THEN push 'specialCharacters' into 'charactersToUse' list


  // IF NOT 'charactersToUse.lenght'
  // THEN ALER to the user they they need to provide a correct length 
  // AND EXIT FUNCTION


  // WHILE password.length < passwordlength
  while (password.length < passwordlength) {


    //  SELECT 'randomCharacter' a character from 'charactersToUse'
    //  APPEND 'randomCharacter' to 'password' string


  }


  // RETURN 'password'
  return password;


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
