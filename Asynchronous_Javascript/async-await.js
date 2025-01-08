// async await is a special syntax to work with promises in a more comfortable fashion
// async await is syntactic sugar for promises
// async await is built on top of promises
// async await is non blocking
// async await is used to write synchronous looking async code
// async await is used to handle multiple promises
// async await is used to handle dependent promises
// async await is used to write async code to execute in a sequential(synchronus) manner
// async returns a promise

// problem with promise is that resolve and reject function needs to be called explicitly
// if a statment is awaited then the function should be async
// but async function not necessary to have await statement

async function myFunction() {
    console.log('2 : Message');
    await console.log('3 : Message');
    console.log('4 : Message');
}

console.log('1 : Message');
myFunction();
console.log('5 : Message');

// example -2

async function test() {
    try {
        const response = await fetch("Asynchronous_Javascript/student_data.json");
        const students = await response.json();
        return students;
        
    } catch (error) {
        console.log(error);
    }

} 

test().then((data) => {
    console.log(data);
});