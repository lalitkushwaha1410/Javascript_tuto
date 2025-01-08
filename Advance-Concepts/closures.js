// closures is a function that has access to the outer function scope even after the outer function has returned.
// closures is function inside a function that relies on variables in the outer function.
// closure is combination of a function and their lexical environment within which the function was declared.

// why need closures? // to maintain state of a function , to maintain private variables , data encapsulation ,data hiding
// closures are used to create private variables in javascript.

// example-1 of closures
function outerFunction(){
    let count = 0;
    
    return function (){
        count = count +4;
        return count;
    }
}

const myFunction = outerFunction();
console.log(myFunction()); // 1
console.log(myFunction()); // 2
console.log(myFunction()); // 3
// here count is private variable , it is not accessible outside the function
// myFunction is a closure , it has access to the outer function scope even after the outer function has returned.

// example-2 of closures

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
// even after the parent function has completed execution. This allows for data to be "closed over" or 
// remembered by the inner function, even after the outer function has returned.

//Closures are based on lexical scoping, meaning that a function’s scope is determined by where the function is defined, not where it is executed.
// This allows inner functions to access variables from their outer function.


// example-3 of closures

function outerFunction1(){
    var outerVar = 'I am outer variable';

    function innerFunction1(){
        console.log(outerVar);
    }
    return innerFunction1;
}

const var1 = outerFunction1();
console.log(var1());