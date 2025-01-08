// Asynchronous javascript is a way of handling code execution in a non-blocking way.
// In synchronous code, things happen one after another, in a sequence.
// In asynchronous code, things can happen independently of the main program flow.
// Asynchronous code is important for web applications because it allows the program to run multiple 
// operations at the same time.

// In synchronous code, if an operation takes 10 seconds to execute, the program will stop and wait for 10 seconds before moving on to the next line of code.
// In asynchronous code, if an operation takes 10 seconds to execute, the program can continue to run other operations while waiting for the 10 seconds to complete.

// Asynchronous code is usually written using callbacks, promises, or async/await.

// Callbacks are functions that are passed as arguments to other functions.
// Callback functions are called when the operation they are associated with completes.
// Callback functions can be used to handle asynchronous operations in a non-blocking way.

// Synchronous Javascript - single threaded , blocking code execution

// console.log('Programming Start');

// for (let i = 0; i < 40; i++) {
//     console.log("javascript course");
// }
// console.log('Programming End');


//set timeout function is used to execute a function after a specified amount of time
console.log('Programming Start');

setTimeout(() => {
    console.log('We are in timeout');
}, 1000);

console.log('Programming End');
console.log('Programming End');
console.log('Programming End');


// set interval function
// set interval function is used to execute a function at regular intervals
// set interval function returns an interval id which can be used to clear the interval

console.log('Set Interval Programming Start');

 setInterval(function() {
    console.log('We are in set interval');
 }, 1000);

 console.log('Set Interval Programming End');