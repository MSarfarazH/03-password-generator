
// Assignment Code
var generateBtn = document.querySelector("#generate");
var i;
var passArray = [];
var randomPassArray = [];

// Write password to the #password input
// var specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

function writePassword() {
 var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  passLength();
  lowerCase();
  specialChars();
  numbers();
  upperCase();



  for (var j = 0; j < i; j ++) {
    var passChar = passArray[Math.floor(Math.random() * passArray.length)]
    // console.log(passChar)
    randomPassArray.push(passChar)
  }
    // console.log(randomPassArray.join(""))
    return randomPassArray.join("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  function passLength (){
    i = prompt("Password length? Has to be at least 8 to 128 characters")
      if (i < 8 || i > 128){
        alert("Password must be longer than 8 and shorter than 128 chars")
  }
 
}

function lowerCase (){
 if (confirm("Do you want lower case characters in the password?") == true) {
   passArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
   console.log(passArray.toString());
  } 
  else {
    console.log(passArray.toString());
  }
}

function specialChars (){
  if (confirm("Do you want special characters in the password?") == true) {
    passArray.push("@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".");
    console.log(passArray.toString());
   } 
   else {
     console.log(passArray.toString());
   }
 }

 function numbers (){
  if (confirm("Do you want numeric characters in the password?") == true) {
    passArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    console.log(passArray.toString());
   } 
   else {
     console.log(passArray.toString());
   }
 }

 function upperCase (){
  if (confirm("Do you want upper case characters in the password?") == true) {
    passArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    console.log(passArray.toString());
   } 
   else {
     console.log(passArray.toString());
   }
 }