// Find the duplicate elements in the given array

const arrNumber = [5,8,2,18,45,8,18,2]
const duplicates = arrNumber.filter((value, index, arr) =>{
    return arr.indexOf(value) !== index;
   //return index
} )

console.log(duplicates);