// function charCount(string) {
//     return string.split("").reduce((arr, char) => {
//         arr[char] = (arr[char] || 0) + 1;
//       return arr;
//     }, {});
//   }

// console.log(charCount("jjavaascccripptt")); 

function countCharacters(str) {
  const charCount = {}; // empty object

  for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  // let result = '';
  // for (let char in charCount) {
  //   result += char + charCount[char];
  // }

  return charCount;
  //return result;
}

// Example usage

const result = countCharacters("jjavaascccripptt");
console.log(result);

// function countOccurrences(arr) {
//   let countMap = {}; // empty object

//   for (let item of arr) {
//       countMap[item] = (countMap[item] || 0) + 1;
//   }

//   return countMap;
// }

// const output = countOccurrences([5,6,7,4,3,5,6,3,3,4,5]);
// console.log(output);
