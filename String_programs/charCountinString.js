function charCount(string) {
    return string.split("").reduce((arr, char) => {
        arr[char] = (arr[char] || 0) + 1;
      return arr;
    }, {});
  }

console.log(charCount("javaaaascript")); 
