let str1 = "occurrence";
let duplicates = [...new Set([...str1].filter((value, index, str1) => 
  str1.indexOf(value) !== index )
)];

console.log(duplicates);
