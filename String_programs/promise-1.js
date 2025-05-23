 let mypromise = new Promise ((resolve,reject) => {

    let flag = true ;

    if(flag){

        resolve("promise is resolved");

    }
    else{

        reject("promise is rejected");

    }

 });

mypromise.then((message) =>{
    console.log(message);
}).catch((error) => {
    console.log(error);
});


async function myFunc() {

    try {  
        let value = await mypromise ;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
    
}

myFunc();

console.log("------------------------------------------------------------------------------")

function outerFunc1 (){
    let message1 = "I am a outer variable";

    return function innerFunc1 (){
        console.log(message1);
    }
}

var output = outerFunc1();
output();

console.log("------------------------------------------------------------------------------")


function greeting( name , callback) {
    console.log(`hello ${name} !!!`);
    callback();
}

function sayHello() {
    console.log("Good Morning");
}

greeting("David", sayHello);

console.log("------------------------------------------------------------------------------")