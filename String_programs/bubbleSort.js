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
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  //return arr[arr.length-2]; // return the second largest element
  //return arr[arr.length-1]; // return the largest element
  return arr; // return the sorted array
}

console.log("Sorted Number Array :",sortStringsBasic([4,67,32,335,865,12])); // [4, 12, 32, 67, 335, 865]