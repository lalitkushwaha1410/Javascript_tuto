function largestNumber(arr){
    let largest=arr[0];

    for (let i=1 ; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let numArray = [4,7,765,78,54,190,34,87];
console.log(largestNumber(numArray));
