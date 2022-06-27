// Assignment code here
var chars = "";

var upperCaseChars = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numericChars = "0123456789";
var symbolsChars = "!@#$%^&*()";
var password = "";

function generatePassword() {

    var passLength = getPassLength();
    while (passLength < 8 || passLength > 128) {
        passLength = getPassLength();
    }
    var criteria = getCriteria();

    if (
        criteria.upperCase === false &&
        criteria.lowerCase === false &&
        criteria.numeric === false &&
        criteria.symbols === false
    ) {
        alert("You must choose at least one Character type, Please try again.");
        return "Password not generated!";
    }

    if (criteria.upperCase === true) {
        chars += upperCaseChars;
        console.log("chars " + chars);
    }
    if (criteria.lowerCase === true) {
        chars += lowerCaseChars;
        console.log("chars " + chars);
    }
    if (criteria.numeric === true) {
        chars += numericChars;
        console.log("chars " + chars);
    }
    if (criteria.symbols === true) {
        chars += symbolsChars;
        console.log("chars " + chars);
    }

    for (var i = 0; i <= passLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    return password;
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
    document.getElementById("password").value = ""
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
passwordText.value = "";
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
