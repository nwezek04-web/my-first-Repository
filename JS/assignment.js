//ASSINMENT: Create a const word to be Kids coding club.Extract kids coding, also extract coding club, concatement adult coding  club and extract adult coding and change it to uppercase. Pad start it to **** coding club for the kids and adult coding club. Repeat coding club 3 times.


const speach = "Kids Coding club";
let firstExtract = speach.slice(0, 11);
console.log(firstExtract, "\n");

let secondExtract = speach.slice(5, 16);
console.log(secondExtract, "\n");

let second_Concat = "Adult" .concat (" ", secondExtract);
console.log(second_Concat, "\n");

let thirdExtract = second_Concat.slice(0, 12);
let extract_UpperCase = thirdExtract.toUpperCase();
console.log(extract_UpperCase, "\n");


const paddedSpeach = secondExtract.padStart(speach.length, "**** ");
console.log(paddedSpeach, "\n")

let repeat_3 = secondExtract.repeat(3);
console.log(repeat_3, "\n")


//class work
//Check the strint Locate where Locate occurs in the location
//Find the first locate and the last locate
//search for Locaion
//March for locat
//Check if the string includes the word
//"Location"
//Check if the word stars of ends with locate


let test = "Please locate where locate occurs in the location"

let firstLocate = test.indexOf("locate");
console.log(firstLocate, "\n");

let secondLocate = test.lastIndexOf ("locate");
console.log(secondLocate, "\n");

let locationSearch = test.search("location");
console.log(locationSearch, "\n");

let locationMatch = test.match("locate");
console.log(locationMatch, "\n");

let locationIncludes = test.includes("location");
console.log(locationIncludes, "\n");

let start = test.startsWith("locate");
console.log(start, "\n");

let end = test.endsWith("locate");
console.log(end, "\n");
