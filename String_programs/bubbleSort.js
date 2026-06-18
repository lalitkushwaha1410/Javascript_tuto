function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example
let numbers = [49,2,8,12,19];
console.log("Sorted array:", bubbleSort(numbers));

function sortStringsBasic(arr) {
  let secondLargest = arr.length-2;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  //return arr[secondLargest]; // return the second largest element
  //return arr[arr.length-1]; // return the largest element
  return arr; // return the sorted array
}

console.log("Sorted Number Array :",sortStringsBasic([4,67,32,335,865,12])); // [4, 12, 32, 67, 335, 865]

console.log( " %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% ")

function numSort (arr) {
    let n = arr.length ;
    

    for (let i = 0 ; i < n ; i++) {
        for (let j =0 ; j < n-i-1; j++) {
            if (arr[j] > arr[j+1])
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp ;
            }
        }
    }
    
   let largest = arr[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < largest) {
            return arr[i];
        }
    }

    return null; // if no second largest

    // let secondlargest = arr.length-2;
    // //return arr ;
    // return arr[secondlargest];
}

let numArray = [5,10,15,20,25,30,30];
console.log(numSort(numArray));