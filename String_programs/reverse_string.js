let OriginalString = "gurgaon";

let reverseString = OriginalString.split('').reverse().join('');

console.log(reverseString);

let result = '';
for (let i=OriginalString.length-1; i>=0; i--){
   result += OriginalString[i]; 
}

console.log(result);
