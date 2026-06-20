function extractParts(str) {
  let letters = '';
  let numbers = '';
  let specials = '';

  for (let char of str) {
    if ((/[a-zA-Z]/g).test(char)) {   // /[a-zA-Z]/.test(char) is checking the RegExp for alphabets
      letters += char;
    } else if ((/[0-9]/g).test(char)) {
      numbers += char;
    } else {
      specials += char;
    }
  }

  console.log("Letters:", letters);
  console.log("Numbers:", numbers);
  console.log("Special Characters:", specials);
}

extractParts("dsfdsf45678#$#@fefe564%#$%#zzz");

console.log("---------------------------------------------------------------------------------------------------------");

const str = "dsf34535dsf45678#$#@lewbnnvm34&@*4564";

const letters = str.split('').filter(c => /[a-zA-Z]/g.test(c)).join('');
const numbers = str.split('').filter(c => /[0-9]/g.test(c)).join('');
const specials = str.split('').filter(c => !/[a-zA-Z0-9]/g.test(c)).join('');

console.log("Letters:", letters);
console.log("Numbers:", numbers);
console.log("Special Characters:", specials);