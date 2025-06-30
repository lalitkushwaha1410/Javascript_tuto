// Object is an entity ( non- premitive datatype) that contains properties and methods.
// obejcts are written with curly braces { key1 : "value" , key2: "value" } and has key value pairs

// variables are used to store data values , but objects are used to store collections of related data and more complex entities
// varibales are used to store single values , but objects are used to store multiple values
// variable eg : let name = "David" , let age = 25 , let city = "Agra" , let country = "India"
// It gets messy if you have many people, because you'd need separate variables for each person.
// but if we want to store all these values in a single entity then we can use object
// let person = { name : "David" , age : 25 , city : "Agra" , country : "India" }

var car1 = {
    name: "Hyundai Aura",
    color: "White",
    manufactureYear: 2022,
    price: '10 lakhs ',
    isAutomatic: true,
    manufacturer: "Hyundai",
    isElectric: false,
    features: ["ABS", "Airbags", "Touchscreen", "Reverse Camera", "Alloy Wheels"],
    topSpeed: function () {
        console.log("The top speed of the car1 is 180 km/hr");
    }

}

var car2 = {
    name: "Maruti Suzuki Baleno",
    color: "Red",
    manufactureYear: 2021,
    price: '9 lakhs',
    isAutomatic: true,
    manufacturer: "Maruti Suzuki",
    isElectric: false,
    features: ["ABS", "Airbags", "Reverse Camera"],

}
// objects are Easy to read
//  Easy to access: person1.name, person2.age
//  Easy to manage lists of people

let vehicle = [car1, car2];

// object creation using 3 ways : 1. object literal 2. new keyword 3. object constructor
// 1. object literal
let exampleObject = {
        key1: "value1",
        key2: "value2"
    };

// key is always a string , if we dont provide a string then it will be converted to string
// value can be any datatype
// Object properties can be accessed using dot notation or bracket notation

console.log(car1); // print whole object
console.log(car1.name); // print only name of the car
//console.log(car1.topSpeed());
car1.topSpeed();
console.log(car2["name"]); // print only name of the car
car1.model = "sedan"; // add new property to the object

// 2. Object using new keyword

var myDetail = new Object();
console.log(myDetail);

myDetail.name = "David";
myDetail.age = 25;
myDetail.skills = ["html", "css", "javascript"];
myDetail.city = "Agra";
myDetail.country = "India";
myDetail.getFullName = function () {
    console.log("My name is " + this.name + " and I am from " + this.city);
}

console.log(myDetail);
//console.log(myDetail.getFullName());
myDetail.getFullName();


// 3. Object using object constructor
function Course(name, duration, fees) {
    this.name = name;
    this.duration = duration;
    this.fees = fees;
    this.courseDetails = function () {
        console.log("I am learning " + this.name + " and the duration of the course is " + this.duration);
    }
}

var course1 = new Course("Javascript", "3 months", "30000");
var course2 = new Course("Python", "2 months", "20000");
var course3 = new Course("Java", "4 months", "40000");

console.log(course1.courseDetails());
console.log(course2.courseDetails());

//delete course1.fees; // delete a property from the object

//console.log(course1);

// Object methods

// 1. Object.keys() : returns an array containing the names of all the enumerable own properties of the object
// 2. Object.values() : returns an array containing the values of the enumerable own properties of the object

// console.log(Object.keys(course1)); // print all the keys of the object

// console.log(Object.values(course1)); // print all the values of the object

// // 3. Object.entries() : returns an array containing all the enumerable own property [key, value] pairs of the object

// console.log(Object.entries(course1)); // print all the key value pairs of the object

// // 4. hasOwnProperty() : returns a boolean indicating whether the object has the specified property as its own property and not inherited from the prototype chain
// console.log(course1.hasOwnProperty("name")); // true


// 5. freeze() : The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, 
// existing properties
console.log(Object.freeze(course1));

// console.log(Object.isFrozen(course1)); // false

// 6. seal() : The Object.seal() method seals an object, preventing new properties from being added or deleted, allowed to modify values of the property.

console.log(Object.seal(course1));

// 7. for in loop : The for...in statement iterates over all enumerable properties of an object that are keyed by strings

for (let key in course1) {
    console.log(key + " : " + course1[key]);
    
}
