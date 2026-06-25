let a = 10;
let b = a;
console.log("Before Update");
console.log(a);
console.log(b);

a = a + 5;

console.log("After Update");
console.log(a);
console.log(b);
//----------------------------------------------------------------------//
let obj1 = {
    "name": "John",
    "password": "1234"
};

let obj2 = obj1;

obj2.password = "5678";
console.log(obj1);
console.log(obj2);

// javascript is by default pass by value