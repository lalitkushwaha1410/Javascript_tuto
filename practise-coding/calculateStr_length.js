let myString = "javascript";

function calculateLength(str) {
  let count = 0;

  for (let i=0; i < str.length; i++) {
    count++;
  }
  return count;
}

console.log(calculateLength(myString)); 
