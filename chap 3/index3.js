//Question 1 //
var age = "im 21 years old "

alert(age)
//Question 1 //
//.....//



//Question 2 //

var visitCount = localStorage.getItem("visitCount");

if (visitCount === null) {
    visitCount = 0;
}

visitCount++;

localStorage.setItem("visitCount", visitCount);

document.write("You have visited this site " + visitCount + " times.");
//Question 2 //
//.....//



//Question 3 //
var birthYear = 2002
document.write("<br/>My birth year is" +  birthYear)

var sent = "<br/>Data type of my declared variable is number"
document.write(sent)
//Question 3 //
//......//



//Question 4 //
var visitorName = "<br/>Ali"
var productTitle = "T-shirt"  
var quantity = 10;              


var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";


document.write(message);