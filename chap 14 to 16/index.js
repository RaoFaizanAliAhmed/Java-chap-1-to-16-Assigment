var studentNames = [];

var studentNames = new Array();

var stringsArray = ["Ali", "Sara", "Ahmed"];

var numbersArray = [10, 20, 30, 40, 50];

var booleanArray = [true, false, true];

var mixedArray = [10, "Apple", true, null];



var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
var list = document.getElementById("qualifications");
qualifications.forEach(function(qualification) {
    var li = document.createElement("li");
    li.textContent = qualification;
    list.appendChild(li);
});



var students = ["Ali", "Sara", "Ahmed"];
var scores = [450, 350, 400];
var totalMarks = 500;
var list = document.getElementById("studentScores");

students.forEach(function(student, index) {
    var percentage = (scores[index] / totalMarks) * 100;
    var li = document.createElement("li");
    li.textContent = student + " scored " + scores[index] + " marks with a percentage of " + percentage.toFixed(2) + "%";
    list.appendChild(li);
});




var colors = ["Red", "Green", "Blue"];
function displayColors() {
    document.getElementById("colors").textContent = colors.join(", ");
}
displayColors();

// a. Add color to the beginning
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);
displayColors();

// b. Add color to the end
var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
displayColors();

// c. Add two more colors to the beginning
colors.unshift("Yellow", "Purple");
displayColors();

// d. Delete the first color
colors.shift();
displayColors();

// e. Delete the last color
colors.pop();
displayColors();

// f. Add color at a specific index
var indexToAdd = prompt("Enter the index where you want to add a color:");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
displayColors();

// g. Delete color(s) at a specific index
var indexToDelete = prompt("Enter the index where you want to delete colors:");
var numToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, numToDelete);
displayColors();




var studentScores = [320, 230, 480, 120];
studentScores.sort(function(a, b) { return a - b; });
console.log(studentScores);



var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);
console.log(selectedCities);


var arr = ["This", "is", "my", "cat"];
var sentence = arr.join(" ");
console.log(sentence);



var fifoArray = [];
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
console.log(fifoArray.shift());  // Outputs: First
console.log(fifoArray.shift());  // Outputs: Second
console.log(fifoArray.shift());  // Outputs: Third



var lifoArray = [];
lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");
console.log(lifoArray.pop());  // Outputs: Third
console.log(lifoArray.pop());  // Outputs: Second
console.log(lifoArray.pop());  // Outputs: First




var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var dropdown = document.getElementById("phoneDropdown");

phoneManufacturers.forEach(function(manufacturer) {
    var option = document.createElement("option");
    option.text = manufacturer;
    dropdown.add(option);
});