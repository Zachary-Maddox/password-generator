// Assignment code here
var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password = "";

function generatePassword() {
    var passLength = getPassLength();
    while (passLength < 8 || passLength > 128) {
        passLength = getPassLength();
    }
    var criteria = getCriteria();
    //       if(criteria == true){
    // for (var i = 0; i <= passLength; i++)
    // var randomNumber = Math.floor(Math.random() * chars.Length);
    // password += chars.substring(randomNumber, randomNumber +1)
    //       }
}

function getPassLength() {
    return prompt(
        "Please enter a Password:Password must be between 8-128 characters"
    );
    console.log(passLength);
}
function getCriteria() {
    var question = {};
    question.upperCase = confirm(
        "Would you like UPPERCASE letters?: OK for Yes / Cancel for NO"
    );
    console.log(question);
    question.lowerCase = confirm(
        "Would you like lowercase letters?: OK for Yes / Cancel for NO"
    );
    question.numeric = confirm(
        "Would you like Numeric numbers?: OK for Yes / Cancel for NO"
    );
    question.symbols = confirm(
        "Would you like Symbols?: OK for Yes / Cancel for NO"
    );
    return question;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
