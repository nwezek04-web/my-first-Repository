// Assignment 2: Gabriel is 16, his country USA, write a conditional statement that checks if Gabriel is eligible to drive and vote and if he is eligible to do none.


const fname = "Gabriel";
let gabrielAge = 16;
let licenseAge = 16;
let hisCountry = "USA";
let votAge = 18;
let trueStatement = `${fname} is eligible to drive but not vote at ${gabrielAge},depending on states laws in ${hisCountry}.`;
let falseStatement = `${fname} is not eligible to drive or vote at ${gabrielAge} in ${hisCountry}.`;

if (gabrielAge >= licenseAge >= votAge) {
    console.log(trueStatement);
}
else if (gabrielAge >= licenseAge >= votAge) {
    console.log(falseStatement);
}
else {
    console.log(trueStatement);
}
console.log ("\n");
// switch 

const currentDay = new Date();
const dayOfWeek = currentDay.getDay();

let dayName;
if (dayOfWeek === 0) {
    dayName = "sunday";
} else if (dayOfWeek === 1) {
    dayName = "Monday";
} else if (dayOfWeek === 2) {
    dayName = "Tuesday";
} else if (dayOfWeek === 3) {
    dayName = "Wednesday";
} else if (dayOfWeek === 4) {
    dayName = "Thursday";
} else if (dayOfWeek === 5) {
    dayName = "Friday";
} else {
    dayName = "Saturday";
}

console.log(`Today is ${dayName}`)

console.log ("\n");

let currentMonth;
switch (new Date().getMonth()) {
    case 0:
        currentMonth = "January";
        break;
    case 1:
        currentMonth = "Febuary";
        break;
    case 2:
        currentMonth = "March";
        break;
    case 3:
        currentMonth = "April";
        break;
    case 4:
        currentMonth = "May";
        break;
    case 5:
        currentMonth = "June";
        break;
    case 6:
        currentMonth = "July";
        break;
    case 7:
        currentMonth = "August";
        break;
    case 8:
        currentMonth = "September";
        break;
    case 9:
        currentMonth = "October";
        break;
    case 10:
        currentMonth = "November";
        break;
    case 11:
        currentDay = "December";
        break;
        default:
            currentMonth ="unknown Month";
}

console.log(`The current Month is ${currentMonth}`);

console.log ("\n")

// class work 

let text = "Apple";
let part = text.slice (1, 2);
console.log (part, "\n");

let secondText = "Apple, Banana, Kiwi";
let slicedPart = secondText.slice (14, 19);
console.log (slicedPart, "\n");

let thirdText = "Banana, Apple, Kiwi"
let cutPart = thirdText.slice (8, 13);
console.log (cutPart, "\n");


//use concat metthod  to concat the web and development and use substring metthod to extract the word develop

let firstTest = "Web";
let secondTest = "Development";
let concatPart = firstTest.concat (" ", secondTest);


let extractPart = concatPart.substring (4, 11);
console.log (extractPart); 