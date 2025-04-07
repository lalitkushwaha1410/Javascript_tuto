// palindrome are words that read the same forward and backward 
let str1="racecar";

let reverseString = str1.split('').reverse().join('');

if(str1 === reverseString){
    console.log("The string is a palindrome");
}
else {
    console.log("The string is not a palindrome");
}