// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArray=["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] ;
var numericValArray=["0","1", "2", "3", "4","5","6","7","8","9","10"];
var upperCaseArray=["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharArray=["!", "#", "$", "@","%","^","&","*","?","+","=","_","-","<",">","/"];
var userChoiceArray=[];
function generatePassword(){
  var charLength= prompt ("How many characters?")
  if (charLength<8 || charLength>128){
    alert("Character length must be 8-128 characters.")
    return 
  }
  var lowerCase= confirm ("Want password to include lowercase characters?")
  if (lowerCase===true){
    userChoiceArray=userChoiceArray.concat(lowerCaseArray)
  }
  var numericVal= confirm ("Want password to include numeric values?")
  if (numericVal===true){
    userChoiceArray=userChoiceArray.concat(numericValArray)
  }
  var specialChar= confirm ("Want password to include special characters?")
  if (specialChar===true){
    userChoiceArray=userChoiceArray.concat(specialCharArray)
  }
  var upperCase= confirm ("Want password to include uppercase letters?")
  if (upperCase===true){
    userChoiceArray=userChoiceArray.concat(upperCaseArray)
  }
  if (lowerCase===false && numericVal===false && specialChar===false && upperCase===false){
    alert("Must choose at least one type of character.")
    return
  }
  var pswdChars=[]
  for (var i=0; i< charLength; i++){
    var randNumb= Math.floor(Math.random()*userChoiceArray.length)
    pswdChars.push(userChoiceArray[randNumb])
    //math.floor on W3schools shows functionality
  }
  console.log (pswdChars)
  return pswdChars.join("")
  //.join adds all items in array together seperated by comma. empty quotes" prevents comma, so not one btwn each char
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
