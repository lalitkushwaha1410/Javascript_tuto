// call and apply method in javascript
// call, apply , bind method is used to borrow methods from other objects
// call method : used to call a function with a given this value and arguments provided individually
// apply method : used to call a function with a given this value and arguments provided as an array

// example of call method

const user1 = {
 name : 'Ankur',
 age : 30,
 sayHello : function(hobby, food){
     console.log(`Hello ${this.name} and my hobby is ${hobby} and favourite food is ${food}`);
}
}

//user1.sayHello('Cricket');

const user2 = {
    name : 'Sunil',
    age : 45,
   }

user1.sayHello.call(user2, 'Football', 'Pizza'); // here user2 object is passed as this value and hobby is passed as argument
// call method can be used to borrow methods from other objects

//user2.sayHello.call(user1, 'Kabaddi', 'Biryani'); // sayhello method in user2 not present , hence it will give error

// apply method example
user1.sayHello.apply(user2, ['Volleyball', 'Burger']); // here user2 object is passed as this value and
                                                                    // hobby and food are passed as array
const result = user1.sayHello.bind(user2, 'Chess', 'Momoz'); // here bind method is used to borrow method from user1 object and call it using user2 object
result();