// bind method returns a new function , it does not call the function
// bind method is used to borrow methods from other objects
// bind method is used to create a new function
// call and apply dont return a function

// example of bind method

function myGreetings(hobby){
    console.log(`Hello ${this.name} and my hobby is ${hobby}`);
}

const user1 = {
    name: 'Ankur',
    age: 30,
    info: function(hobby){
        console.log(`Name is ${this.name}, hobby is ${hobby}`);
    }
};

const mybind1 = myGreetings.bind(user1,'football'); 
mybind1();

const user2 = {
    name: 'Dikshit',
    age: 45,
    
}

const mybind = user1.info.bind(user2,'Cricket'); // here user2 object is passed as this value and 45 is passed as argument 
mybind(); // here bind method is used to borrow method from user1 object and call it using user2 object


user1.info.bind(user2,'Cricket')(); // this is also valid way to call the bind method , IIFE is used here