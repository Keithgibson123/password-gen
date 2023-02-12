// Assignment Code
var characterlength = 8;
var choiceArr = [];

var specialCharArr = ["!","@","#","$","%","^","&","*","(",")","-","+","=",">","<"];
var lowerCassArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numberArr = ["1","2","3","4","5","6","7","8","9","0",];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var correctprompts = getprompts();
    if (correctprompts){
    var newpassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newpassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var password = "";
  for(var i = 0; i < characterlength; i++){
    var randomletter = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomletter];
  }
  return password;
}

function getprompts(){

  choiceArr = [];
  characterlength = parseInt(prompt("How many characters do you want your password to be? (8-128 characters"));

  if(isNaN(characterlength) || characterlength < 8 || characterlength > 128){
    alert("character length has to be a number, 8 - 128 digits.");
    return false;
  }
  if (confirm("would you like lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCassArr);
  }
  if (confirm("would you like uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  
  }
  if (confirm("would you like special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("would you like numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}

