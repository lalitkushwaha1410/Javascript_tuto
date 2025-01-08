// console.log(title);

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their 
// containing scope before code
// temporary dead zone is a time between the variable creation and the variable initialization.

console.log(title); // undefined printed for var , but reference error for let and const
var title = 'Javascript'; 
console.log(title);
// only varible declaration is hoisted not the initialization
// that means the variable is hoisted to the top of the scope but the value is not hoisted
// let and const are not hoisted , only var is hoisted