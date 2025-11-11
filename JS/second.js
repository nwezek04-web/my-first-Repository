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