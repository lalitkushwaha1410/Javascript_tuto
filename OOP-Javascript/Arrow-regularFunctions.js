// Diff bet Arrow and Regular Functions
// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.


// Regular functions are hoisted.
// Regular functions have their own this value.
// Regular functions are better for defining object methods.

// global scope , object scope 

function myRegularFunction(){ // regular function refers to user1 object
    console.log(`Hello ${this.name} - ${this.age}`);
}

var firstname = 'Javascript'; //global scope object
var currentage = 78;
const myArrowFunction = () => {  //arrow function refers to global object
  
    console.log(`Hello ${this.firstname} - ${this.currentage}`);
}

const user1 = {
    name: 'Ankur',
    age: 30,
    myReg: myRegularFunction, // print Ankur - 30 because regular function has its own this value
    myArrow : myArrowFunction // print undefined - undefined because arrow function does not have its own this , refers to global object
};

user1.myReg(); 
user1.myArrow();