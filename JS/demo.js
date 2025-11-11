// Assignment 1: Tolu is 16 years, his country is Nigeria, write a conditional statemet that checks if Tolu can drive. If true, Let it say thats he is eligible and if not, Let it say that he is not eligible  to drive.

// Assignment 2: Gabriel is 16, his country USA, write a conditional statement that checks if Gabriel is eligible to drive and vote and if he is eligible to do none.

// Assignment 3: write a switch statement to get the current day of the week.

const fname = "Tolu";
let age = 16;
let maximumAge = "18";
let country = "Nigeria";
let trueStatement = `${fname} is eligible to drive at ${age} in ${country}.`;
let falseStatement = `${fname} is not eligible to drive at ${age} in ${country}.`;

if (age < maximumAge) {
    console.log(falseStatement);
}
else if (age >= maximumAge) {
    console.log(trueStatement);
}
else {
    console.log(trueStatement);
}