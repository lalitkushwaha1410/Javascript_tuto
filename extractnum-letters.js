function extractParts(str) {
  let letters = '';
  let numbers = '';
  let specials = '';

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      letters += char;
    } else if (/[0-9]/.test(char)) {
      numbers += char;
    } else {
      specials += char;
    }
  }

  console.log("Letters:", letters);
  console.log("Numbers:", numbers);
  console.log("Special Characters:", specials);
}

extractParts("dsfdsf45678#$#@");

console.log("---------------------------------------------------------------------------------------------------------");

const str = "dsfdsf45678#$#@";

const letters = str.split('').filter(c => /[a-zA-Z]/.test(c)).join('');
const numbers = str.split('').filter(c => /[0-9]/.test(c)).join('');
const specials = str.split('').filter(c => !/[a-zA-Z0-9]/.test(c)).join('');

console.log("Letters:", letters);
console.log("Numbers:", numbers);
console.log("Special Characters:", specials);