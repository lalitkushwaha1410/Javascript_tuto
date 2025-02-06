let str1 = "occurrence";
let duplicates = [...str1].filter((value, index, str2) => {
  return str2.indexOf(value) !== index;
  //return index
});

console.log(duplicates);
