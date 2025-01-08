//datatypes 
//string
// number
// boolean
// undefined
// null
// bigInt
// symbol

let str1 = "56";;
console.log(typeof str1);

var num1 = 10;
console.log(typeof num1);

let result = false;
console.log(typeof result);

 
// convert str to number
let num2 = Number(str1);
console.log(typeof num2,"---",num2);

let num3 = +num1;
console.log(typeof num3, num3);

// convert number to string

let str3 = num1+'';
console.log(typeof str3 , str3);

let num4= 50;
let num5 = "70"; // it will concatenate the string

let output = num4 + num5;
console.log(typeof output, output);

