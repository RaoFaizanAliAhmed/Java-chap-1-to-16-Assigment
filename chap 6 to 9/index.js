// 1. Arithmetic Operations
var number = 10; // You can change the number here

// Perform arithmetic operations
var addition = number + 5;
var subtraction = number - 3;
var multiplication = number * 2;
var division = number / 4;

// Display the result in the browser
document.write("Number: " + number + "<br>");
document.write("Addition: " + addition + "<br>");
document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");






       // Question no 2//
var a = 2, b = 1;
var result = --a - --b + ++b + b--;




// 3. Greet the user
var userName = prompt("Enter your name: ");
alert("Hello, " + userName + "!");




// 4. Multiplication table
var number = prompt("Enter a number for the multiplication table: ");
number = number ? parseInt(number) : 5; // If no input, default to 5

document.write("Multiplication Table of " + number + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}



// 5. Marks and Percentage Calculation

// Input subject names
var subject1 = prompt("Enter first subject name: ");
var subject2 = prompt("Enter second subject name: ");
var subject3 = prompt("Enter third subject name: ");

// Total marks for each subject
var totalMarks = 100;

// Input obtained marks for each subject
var obtainedMarks1 = parseFloat(prompt("Enter marks obtained in " + subject1 + ": "));
var obtainedMarks2 = parseFloat(prompt("Enter marks obtained in " + subject2 + ": "));
var obtainedMarks3 = parseFloat(prompt("Enter marks obtained in " + subject3 + ": "));

// Calculate total and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in the browser
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("</table>");

document.write("<br>Total Marks: " + (totalMarks * 3) + "<br>");
document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");




