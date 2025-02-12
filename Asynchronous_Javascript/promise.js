// promises are special objects in javascript that are used to handle async operations
// when we have multiple async operations that are dependent on each other
// promises are used to avoid callback hell or pyramids of doom
// promises are used to avoid blocking the main thread
// promises are used to write cleaner code
// promises are used to write error handling code
// promises are used to return a single value
// promises are used to return a single error

// promises is an object that represent the eventual completion or failure of an async operation
// it provides clean syntax for handling async code compare to traditional callback function
// its imp because they allow to write async code in a more readable and maintainable way

// promise has 3 states - pending, fulfilled, rejected
// pending - initial state,when the executer starts the execution
// fulfilled - operation has completed successfully
// rejected - operation has failed
// Promise object contains these 3 things:
// prototype : promise
// PromiseState : pending
// PromiseResult : undefined


let myPromise = new Promise((resolve, reject) => {
    let flag = true;
    if(flag){
        setTimeout(()=>{
            resolve('Promise is resolved');
        },3000);
    }
    else{
        reject('Promise is rejected');
    }

});

console.log(myPromise);

myPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});


