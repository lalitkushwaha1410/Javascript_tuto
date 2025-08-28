function firstNonRepeatingChar(str) {
  for (let char of str) {
    if ( str.indexOf(char) === str.lastIndexOf(char) ) {
      return "Non-Repeating Character: "+char;
    }
  }
  return "all characters are repeating";
}

console.log(firstNonRepeatingChar("typescript")); //

// Capitalize first letter of each word

function capitalizeWords(str) {
  let result = str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

    return result;
}

console.log(capitalizeWords('my interest always lies in automation'));