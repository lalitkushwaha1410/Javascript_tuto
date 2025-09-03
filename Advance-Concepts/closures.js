// closures is a function that has access to the outer function scope even after the outer function has returned.
// closures is function inside a function that relies on variables in the outer function.
// closure is combination of a function and their lexical environment within which the function was declared.

// why need closures? // 
// to maintain state of a function , to maintain private variables , data encapsulation ,data hiding
// closures are used to create private variables in javascript.
//“closure” is a fundamental concept that arises from the combination of functions and lexical scoping.
//  A closure allows a function to retain access to variables from its outer (enclosing) scope even after that outer scope has finished executing. 
// This means that a function “closes over” the variables from its surrounding context, and it can still reference and use those variables 
// even when called outside of their original scope. This is an example of lexical scoping, where the inner function can "see" and 
// access variables from its lexical scope. 

// example-1 of closures
function outerFunction(){
    let count = 0;
    
    return function (){
        count = count +4;
        return count;
    }
}

const myFunction = outerFunction();
console.log(myFunction()); // 4
console.log(myFunction()); // 8
console.log(myFunction()); // 12
// here count is private variable , it is not accessible outside the function
// myFunction is a closure , it has access to the outer function scope even after the outer function has returned.

//A closure is:
//A function that "remembers" the variables from its outer lexical scope, even after that outer function has finished executing.
//In this case: The inner function remembers count even after outerFunction is done.
//count lives as long as the inner function lives (in this case, as long as myFunction exists).

// example-2 of closures
console.log("***********************************************************************************************************************************");

function mutiplier(factor) {
   console.log('value of factor -',factor);
 // here the value of factor will remain retained in the memory even after the function has returned.
 // in lexical environment , the value of factor will be retained.
    return function(x) {
        console.log('value of x -',x,' and ','value of factor -',factor);
        return x*factor;
    }
}
const output = new mutiplier(3);
console.log(output()); 

console.log('------------------------------------------------------');

//A closure in JavaScript is a function that has access to the variables in its parent scope, 
// even after the parent function has completed execution. This allows for data to be  
// remembered by the inner function, even after the outer function has returned.

//Closures are based on lexical scoping, meaning that a function’s scope is determined by 
// where the function is defined, not where it is executed.
//This allows inner functions to access variables from their outer function.


// example-3 of closures

function outerFunction1(){
     const  outerVar = 'I am outer variable';

    return function innerFunction1(){
         console.log(outerVar);
         
    }
   
}

const result = outerFunction1();
result();