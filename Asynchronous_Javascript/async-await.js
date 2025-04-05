// async await is a special syntax to work with promises in a more comfortable fashion
// async await is built on top of promises
// async await is non blocking
// async await is used to write synchronous looking async code
// async await is used to handle multiple promises
// async await is used to handle dependent promises
// async await is used to write async code to execute in a sequential(synchronus) manner
// async returns a promise

// problem with promise is that resolve and reject function needs to be called explicitly
// but async function will automatically return a promise
// if a statment is await then the function should be async
// but async function not necessary to have await statement

// async function myFunction() {
//     console.log('2 : Message');
//     await console.log('3 : Message');
//     console.log('4 : Message');
// }

// console.log('1 : Message');
// myFunction();
// console.log('5 : Message');

// // example -2

// async function test() {
//     try {
//         const response = await fetch("Asynchronous_Javascript/student_data.json");
//         const students = await response.json();
//         return students;
        
//     } catch (error) {
//         console.log(error);
//     }

// } 

// test().then((data) => {
//     console.log(data);
// });

// example -3
const items = ['bat' , 'stumps', 'shoes', 'gloves'];

let myPromise = new Promise((resolve, reject) => {
    if(items.includes('bat') && items.includes('ball') && items.includes('stumps')){
        resolve('We can play cricket');
    }
    else{
        reject('Some items are missing to play cricket');
    }

});

async function PlayCricket() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

PlayCricket();