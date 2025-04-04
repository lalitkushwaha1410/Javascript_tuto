let a = 10;
let b = a;

b = a+5;
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
