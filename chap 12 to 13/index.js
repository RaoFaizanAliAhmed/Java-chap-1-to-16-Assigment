
var char = prompt("Enter a character:");

var ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("The input is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    console.log("The input is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is not a number or letter.");
}


 
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num2 > num1) {
    console.log("The larger number is: " + num2);
} else {
    console.log("Both numbers are equal.");
}








var number = parseInt(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}









var char = prompt("Enter a character:");

var lowerChar = char.toLowerCase();

if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    console.log("True, the character is a vowel.");
} else {
    console.log("False, the character is not a vowel.");
}








var correctPassword = "yourPassword123"; // Store the correct password

var userPassword = prompt("Enter your password:");

if (!userPassword) {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}









var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);






var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night!");
} else {
    console.log("Invalid time format.");
}
