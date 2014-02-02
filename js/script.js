/*Joseph Martin Rivera
Sun Feb 2 2014
Homework Assignment #5 
CHEAT SHEET */

// This is a single line comment

/* This is a multiple line comment
must close with ==> */

/* Declaring variables */

var variable1 = 55;

/* Not part of the HW -- producing and alert message */

alert("This is the homework assignment for lesson 5");

/* Not part of the HW -- Get users name and assign string to variable */

var name = prompt("What is your name?");

/* print user name to console and product alert */

alert("Hello " + name);
console.log ("Hello " + name);

/* data types -- print type to console */

// string
var stringData = "Hello World";
// number -- all numbers in javascript are floats
var numberData = 10;
// boolean
var boolData = false;
// undefined
var undefinedData =  undefined;

/* print kind of data to console */
// string
console.log("The variable 'stringData' is a: " + typeof(stringData));
// number
console.log("The variable 'numberData' is a: " + typeof(numberData));
// boolean
console.log("The variable 'boolData' is: " + typeof(boolData));
// undefined
console.log("The variable 'undefinedData' is: " + typeof(undefinedData));

/* Arrays */

// define an array and assign it strings

var variousNames = [ "Joseph", "Martin", "Rivera", "Eddy", "Luis", "Maria"]

// print array content to console

for ( var i = 0; i < 5; i++ ) {

	console.log("Array position " + i + " contains the name: " + variousNames[i] );
}

/* testing and logic-- var 'name' was declared and stored via user input */

var nameOne = "Joe";
var nameTwo = "Joseph";

// print test to console using logic

console.log ("Declared two string variables: " + nameOne + " and " + nameTwo + "  Are they equal?");
if ( nameOne === nameTwo) {

	console.log (nameOne + " <== Names ==> " + nameTwo + " they are equal!");
} else {

	console.log (nameOne + " <== Names ==> " + nameTwo + " they are  NOT equal!");

}

// declare function getTwoAndCompare

function getTwoAndCompare (compNames) {

	var nameThree = prompt("Enter a name");
	var nameFour = prompt("Enter another name");

	if ( nameThree === nameFour) {

	console.log ("You entered: " + nameThree + " and " + nameFour + ". They are equal!");
	} 
	else {

	console.log ("You entered: " + nameThree + " and " + nameFour + ". They are NOT equal!");

}

}

// call function getTwoAndCompare

getTwoAndCompare();

// declare function getNumeAndMulti

function getNumAndMulti (number) {

	var userNum = prompt("Enter a number");
	randomNum = Math.random();
	newNum = userNum * randomNum;
	console.log ("You entered: " + userNum + ". it was multiplied by: " + randomNum + ". The product of that multiplication is: " + newNum);

}

// call function getTwoAndCompare

getNumAndMulti();

// declare function getTwoNamesAndCombine

function getTwoNamesAndCombine (number) {

	var givenName = prompt("Enter a first name");
	var lastName = prompt("Enter a last name");
	var fullName = givenName + " " + lastName;
	console.log ("You entered the first name:" + givenName + ". And the last name: " + lastName + ". The first and last name combined is:" + fullName);

}

// call function getTwoNamesAndCombine

getTwoNamesAndCombine();
