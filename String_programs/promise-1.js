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