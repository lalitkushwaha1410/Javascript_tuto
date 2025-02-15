let str1 = "occurrence";
let duplicates = [...str1].filter((value, index, str1) => {
  return str1.indexOf(value) !== index;
  //return index
});

console.log(duplicates);
