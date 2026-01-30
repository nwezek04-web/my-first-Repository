//Assignment: Take the number 10.01234 and convert it to a string with an exponential of 3 decimal points using toFixed.
//Then to 4 decimal places using toPrecision, then use parseInt to change it to a whole number and use parseFloat to change to a floating number.
//Run the following methods on it, IsIntegar, IsFinite and IsNaN


const myNumber = 10.01234;

let myFixed = myNumber.toFixed(3);
console.log(myFixed, "\n");

let thePlace = myNumber.toPrecision(4);
console.log(thePlace, "\n");

let myParseInt = parseInt(myFixed, 10);
console.log(myParseInt, "\n");

let myFloat = parseFloat(myFixed);
console.log(myFloat, "\n");

let myImtegar = Number.isInteger(myNumber);
console.log(myImtegar, "\n");

let myFinite = Number.isFinite(myNumber);
console.log(myFinite, "\n");

let myNaN = Number.isNaN(myNumber);
console.log(myNaN, "\n");



// Create a  function that will return  multiplication , subtracion, addition and division.


function add (x, y) {
    return x + y;
}

console.log(add(100, 50), "\n");

function multiply (x, y) {
    return x * y;
}

console.log(multiply(100, 50), "\n");

function substract (x, y) {
    return x - y;
}

console.log(substract(100, 50), "\n");

function divide (x, y) {
    return x / y;
}

console.log(divide(100, 50), "\n");
                                                                                                      