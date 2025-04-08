// function shiftZerosLeft(arr) {
//     let zeros = arr.filter(num => num === 0);
//     let ones = arr.filter(num => num === 1);
//     return [...zeros, ...ones];
//   }
  
//   // Example usage:
//   let input = [1, 0, 1, 0, 1, 0];
//   let result = shiftZerosLeft(input);
//   console.log(result); 

  function shiftZerosLeft(arr) {
    let zeroCount = 0;
  
    // Count the number of 0s
    for (let num of arr) {
      if (num === 0) 
        {
            zeroCount++;
        }
    }
  
    // Fill the result array: zeros first, then ones
    for (let i = 0; i < arr.length; i++) {
      if (i < zeroCount) {
        arr[i] = 0; // Fill with 0s
      } else {
        arr[i] = 1; // Fill with 1s
      }
    }
  
    return arr;
  }
  
  // Example usage:
  let input = [1, 0,1,0, 1,1,1,0,0,1,0,1,0,1,0,1];
  let result = shiftZerosLeft(input);
  console.log(result);