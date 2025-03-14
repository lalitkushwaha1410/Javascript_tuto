function sum(num1, num2) {  // num1 , num3 are parameters , place holders for actual values at the time of function definition
    return num1 + num2;
}

const result = sum(10, 20); // 10, 20 are arguments , actual values passed during func call
console.error(result);


function FindNum (array , num){
    for (let i = 0 ; i <=array.length ; i++){
        if (array[i] === num){
            return i;
        }       
}
    return 'Element Not Found'; 
}

const numArray = [15,26,32,49,53,66,79,83,92,160];
console.log(FindNum(numArray, 32));


// ways to define a function

//1. traditional way  : named functions
function addnum (a,b){
    return a+b;
}
addnum(40,50);

//2. function expression

const add = function(a,b){
    return a+b;
}

//add(40,50);
console.log(add(1,50));

// 3. arrow function ES2015 , ES6
const printName = (name) => {
    console.log(`My name is ${name}`);
}

printName('Sai');

// 4. IIFE - Immediately Invoked Function Expression
(function(name){
    console.log(`i am IIFE , name is ${name}`);
})('Ankur');

(function(){
    console.log('I am IIFE without any argument');
})();


// Rest parameters : when number of parameters are not known , spread operator is used to define rest parameters

function sumAll(...args){
    let sum = 0;
    for (let arg of args){
        sum += arg;
    }
    return sum;
}
const output = sumAll(1,2,3,4,5,6,7,8,9,10);
console.log(output);

// hoisting : javascript behaviour of moving all variable and function declarations 
// to the top of the current scope before compilation time , before code execution

// call a function before its initialization
// function hoisting is possible
myFunc();
function myFunc(){
    console.log('I am javascript');
}

//variable hoisting is also possible but only declaration is hoisted not initialization
//console.log(myNum); // doesnt give error but prints undefined , only var is hoisted
// var myNum = 10;
//console.log(myNum);


// console.log(myName1);
// let myName1 = 'Ankur'; // gives reference error , let and const are not hoisted

let myName2;
console.log(myName2);
myName2 = 'lalit';
//myName2 = 'lalit'; // gives reference error , let and const are not hoisted
// temoprary dead zone :  period of time when a variable is declared 
// but not yet initialized with a value and cannot be accessed

// function inside another function

function outerFunc(){

    console.log('I am outer function');

    function innerFunc(){
        console.log('I am inner function');
    }

    return innerFunc;
}

outerFunc()();
//---------------------------------------------------------------------------------------------------------------------------------//
// Lexical scoping : inner function has access to variables and parameters of outer function
// defination : scope of a variable is defined by its location within the code

// What is Lexical Scope?
// Lexical scope defines the accessibility of variables and functions depending on their location in the source code. 
// Variables and functions have different levels of scope:

// Global Scope: Variables defined outside any function or block, accessible anywhere in the program.
// Local Scope: Variables defined inside a function or block, accessible only within that specific function or block.
// Nested Scope: Inner functions have access to variables in their parent functions.
// Block Scope: Variables defined with let and const are limited to the block they are declared in, like loops or conditionals.

const num = 40 ; // global variable in lexical scope
function outerFunc1(){
    //const num = 5;
    function innerFunc1(){
     //   const num = 10;
        console.log(num); // first inner num will be looked for . if not found then outer num will be looked for and 
                                                                // if not found then global num will be looked for
    }   
    innerFunc1();

}
outerFunc1();
//--------------------------------------------------------------------------------------------------------------------------------//
// Function scope and block scope

function myFunc3(){
    if (true){
        var result1 = 10; 
    }
    console.log(result1); // accessible outside if block because var is function scoped
                         // but if we use let or const then it will give reference error
}                       //  because let and const are block scoped
myFunc3();

// Parameters destructuring - extract value and store in some other variable
// example-1 : object destructuring

const person = {
    name : 'Ankur',
    age : 30,
    country : 'India'
}

function printPersonDetails(person) {
    const {name, age, country} = person;
    console.log(`Name is ${name}, Age is ${age}, Country is ${country}`);
}

printPersonDetails(person);

//example -2 : array destructuring in function parameters
 
function printArray([name, age, country]){
    console.log(`Name is ${name}, Age is ${age}, Country is ${country}`);
}

const personArray = ['Ankur', 30, 'India'];
printArray(personArray);
