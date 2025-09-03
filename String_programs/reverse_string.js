let OriginalString = "gurgaon";

let reverseString = OriginalString.split('').reverse().join('');

console.log(reverseString);

let result = '';
for (let i=OriginalString.length-1; i>=0; i--){
   result += OriginalString[i]; 
}

console.log(result);


console.log('----------------------------------------------------------------------------------------------------------');

function reverseEachWord(sentence) {
  const words = sentence.split(' ');
  const reversedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversedWord = '';

    for (let j = word.length - 1; j >= 0; j--) {
      reversedWord += word[j];
    }

    reversedWords.push(reversedWord);
  }

  return reversedWords.join(' ');
}

// Example usage
const input = "Hello World from Noida";
const output = reverseEachWord(input);
console.log(output); // "olleH dlroW morf TPGTahC"

