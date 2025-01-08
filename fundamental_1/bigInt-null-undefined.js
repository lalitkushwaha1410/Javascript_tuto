// undefined means the value is not assgined .

let str ;

console.log(str);

// null - means nothing , means no value is stored into this variable.

let title = null;
//title = "hello"
console.log(typeof title, title);  // in case of error , typeof returns object.
// because this behaviour is now widely used in modern browsers, if now this is fixed , it will
// impact the backward compatibility of the browser.

// Bigint - primitve data type in javascript

let var3 = BigInt(345353535345);
console.log(var3);

let var1 = 24n;
console.log(var1);

let var2 = 6n;
console.log(typeof(var1+var2),var1+var2);
