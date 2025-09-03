// callback function
// callback function is a function that is passed as an argument to another function which is then 
// excuted inside the outer function to complete some task or action
// callback helps in asynchronous programming

// Callbacks help ensure code runs in the right order, especially when dealing with tasks that 
// complete at unpredictable times (like network requests, file reads).

// JS is single-threaded. Callbacks help us execute code after a task finishes, without freezing 
// or blocking the main thread

function greeting(name, callback){
    console.log(`Hello ${name}`);
    callback();
}

function sayGoodbye(){
    console.log('Goodbye');
}

greeting('Ankur', sayGoodbye);

console.log('----------------------------------------------------------------------------------------------------------------------------');

// next example for callback function with settimeout

function fetchData(callback){
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 1000);
}

function displayData(){
    console.log('Data received ');
}

fetchData(displayData);


console.log('------------------------------------------------------------------------------------------------------------------------------');
// next topic - function returning another function

 function createSum(num1){
     console.log('num1 is ' + num1);
     
     return function(num2){
        console.log('num2 is ' + num2);
         return num1 + num2;
     }
 }

 console.log(createSum(10)(20)); // here 10 is num1 for outer func and 20 is num2 for inner func

 console.log('----------------------------------------------------------------------------------------------------------------------');

 // callback hell - when we have multiple nested callbacks
 // to avoid callback hell we can use promises or async await
 // pyramids of doom - when we have multiple nested callbacks
 // to avoid pyramids of doom we can use promises or async await

 
// function getCheese(){
//     setTimeout(() => {
//         const cheese = '🧀';
//         console.log('here is cheese', cheese);
//         return cheese;
//     }, 2000);
// }
console.log('-------------------------------------------------------------------------------------------------------------------');


function prepareTea(){
    setTimeout(() => {
        console.log('Take the vessel');
        setTimeout(() => {
            console.log('Add water');
            setTimeout(() => {
                console.log('Boil the water');
                setTimeout(() => {
                    console.log('Add tea powder');
                    setTimeout(() => {
                        console.log('Add milk');
                        setTimeout(() => {
                            console.log('Boil the milk');
                            setTimeout(() => {
                                console.log('Tea is ready');
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

prepareTea();