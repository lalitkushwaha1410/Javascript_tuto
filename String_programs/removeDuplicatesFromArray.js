let numArray = [1,2,3,4,5,6,7,3,4,5];

function removeDuplicates(numArray) {
    let uniqueArray = [];
    for (let i = 0; i < numArray.length; i++) {
        if (uniqueArray.indexOf(numArray[i]) === -1) {
            uniqueArray.push(numArray[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates(numArray));

function removeDuplicatesUsingSet(numArray) {
    let uniqueArray1 = [...new Set(numArray)];
    return uniqueArray1;
}

console.log(removeDuplicatesUsingSet(numArray)); 

