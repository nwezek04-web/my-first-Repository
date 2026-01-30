// ASSOIGNMENT    MY DETAILS

const myDetails = {
    firstName: "Kingsley",
    lastName: "Nnajiolu",
    age: "18",
    eyeColor: "Brown",

}

console.log(myDetails);

function Student(first, last, age, course = "web Development", month = "august 2025", academy = "digital dreams academy") {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.course = "web";
    this.month = "august";
    this.academy = "academy";
    this.fullname = function() {
        return this.firstName + " " + this.lastName;
    }



this.bio = function() {
    return `My name is ${this.fullname()}, am ${age}  years old and I Regitered for ${course}, on ${month}, at ${academy}).`;
}

}
    


const kingsley = new Student("Kingsley", "Nnajiolu", 18, );


console.log(kingsley.bio());