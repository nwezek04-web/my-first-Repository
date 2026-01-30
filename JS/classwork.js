//  PUSH,  POP, SHIFT AND UNSHIFT, LENGTH, CONCAT YOUR NAME TO THE FRUIT ARRAY. RUN THE FOLLOWING METHODS ON THE ARRAY.  ALSO RUN THE METHODS THAT CHECKS IF ITS TRULY THE ARRAY.


const fruits = ["Banana", "Mango", "Apple", "Orange"];

let fruitPush = fruits.push("Pawpaw", "Cucumber");
console.log(fruits, "\n");

let fruitPop = fruits.pop();
console.log(fruits, "\n");

let fruitShift = fruits.shift();
console.log(fruits, "\n");

let fruitUnshift = fruits.unshift("Pineapple");
console.log(fruits, "\n");

let fruitLength = fruits; fruits [fruits.length] = "Guava";
console.log(fruits, "\n");

let fruitC0ncat = fruits.concat("Nweze", "Kingsley");
console.log(fruitC0ncat, "\n");

console.log(Array.isArray(fruits), "\n");


// ASSIGNMEENT:  USE THE FOLLOWING METHODS, COPYWITHIN, SPLICE, AND SLICE, TOSTRING, INDEXOF, AND FIXED, METHODS ON THE ARRAY.


let copyWith = fruits.copyWithin(2, 0);
console.log(copyWith, "\n");


let mySplice = fruits.splice(2, 0, "Pear", "Kiwi");
 console.log(fruits, "\n");


 let mySlicee = fruits.slice(2);
 console.log(mySlicee, "\n");


 let myString = fruits.toString();
 console.log(myString, "\n");

 let myPosition = fruits.indexOf("Mango") + 1;
 console.log("Mango Position is " + myPosition, "\n");


 // CLASSWORK:  create an array of pets, dog, goat, cat,  rat, lizard, MAP through the array and your name on it. forEach, repeat 2 times, filter and get the ones that have more than 3 characters, using the some method, check if there's any pet with more than 7 characters. Run the reduce method on the array 10, 20, 30, 40.

//FOR MAP

 const myAnimals = ["Dog", "Goats", "Cat", "Rat", "Lizard"];
 let secondAnimal = myAnimals.map(pet => pet + " Kingsley");

 console.log("Pets with name:", secondAnimal, "\n");


 //FOR EACH

 myAnimals.forEach(pet => {
   console.log("First pet:", pet, "\n");
 });

 myAnimals.forEach(pet => {
   console.log("Second pet:", pet, "\n");
 });

 // FOR FILTERS THAT HAS MORE THAN 3 CHARACTERS

 let thosePets = myAnimals.filter(pet => pet.length > 3);

 console.log("Pets with more than 3 characters:", thosePets, "\n");


 // FILTER FOR PET THAT HAS MORE THAN 7 CHARACTERS

 let thePet = myAnimals.some(pet => pet.length > 7);

 console.log("Pets longer than 7 characters", thePet, "\n");


let myCharacters = [10, 20, 30, 40];
let total = myCharacters.reduce(myFuntion);

console.log("The Characters is " + total, "\n");

function myFuntion(total, value) {
   return total + value;
}


// CLASSWORK:  run the above methods on the following numbers = {100, 200, 300, 400},  including map and forEach methods.


const  numbers = [100, 200, 300, 400];

//AT metthod

let myAt = numbers.at(0);
console.log(myAt, "\n");

// Join method
let myJoin = numbers.join(", ");
console.log(myJoin, "\n");

// my Shift method
let thatShift = numbers.shift();
console.log(thatShift, "\n");
console.log(numbers, "\n");

// my unShift method
let ourShift = numbers.unshift(90);
console.log(numbers,"\n");

// my splice 
let theSplice = numbers.splice(2,0, 60,80);
console.log(numbers, "\n");

// my slice 
let theSlice = numbers.slice(1);
console.log(theSlice, "\n");

// my concat
let theConcat = numbers.concat(500,600);
console.log(theConcat, "\n");

//my copywithin
let theCopy = numbers.copyWithin(4,0);
console.log(theCopy, "\n");


// the map method
let thetNumbers = numbers.map(myFuntion);

console.log(thetNumbers, "\n");

function myFuntion(value, index, array) {
  return value + 2;
}


//the forEach method 
let theForEach = " ";
numbers.forEach(theForEachFunction);

function theForEachFunction(value) {
  theForEach += value + " ";
}

console.log(theForEach);





































// // forEach 
// let secondNumbers = numbers.forEach(myFuntion);

// console.log(secondNumbers);

// function myFuntion(value, index, array) {
//   secondNumbers += value +;
// }
 