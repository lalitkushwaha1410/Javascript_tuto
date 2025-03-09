let myString = "javascript";

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString(myString));


function reverseMyString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseMyString(myString));