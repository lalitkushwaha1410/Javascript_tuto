let myString = "javascript";

function removeCharacter(str, char) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== char) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeCharacter(myString, "a"));
