// function charCount(string) {
//     return string.split("").reduce((arr, char) => {
//         arr[char] = (arr[char] || 0) + 1;
//       return arr;
//     }, {});
//   }

// console.log(charCount("jjavaascccripptt")); 

function countCharacters(str) {
  const charCount = {};

  for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

// Example usage

const result = countCharacters("jjavaascccripptt");
console.log(result);