// print duplicate characters in an array
//let str1 = "occurence";
let str1 = [4,6,3,6,9,2,4,7,5,8,9,5];
let duplicates = [...new Set([...str1].filter((value, index, str1) => 
  str1.indexOf(value) !== index )
)];

console.log(duplicates);
// output : [ 6, 4, 9, 5 ]

// let result = [new Set([...str1].filter((value, index, str1) =>
//   str1.indexOf(value) !== index) 
// )];