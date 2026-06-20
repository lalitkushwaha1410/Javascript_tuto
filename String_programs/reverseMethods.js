let str = "I stay in gurgaon";  // capitalize the first letter of each word using map

let result = str.split(" ").map( word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

console.log(result);

console.log("################################################################################");

function capitalizeWords(str) {  // capitalize the first letter of each word using for loop
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            words[i] = word[0].toUpperCase() + word.slice(1);
        }
    }
    return words.join(" ");
}

// Example
let sentence = "hello world this is javascript";
let capitalized = capitalizeWords(sentence);
console.log(capitalized); 


console.log("--------------------------------------------------------------------------------------------------------");

function reverseEachWord(sentence) {  // reverse each word in a sentence
  let words = sentence.split(" ");
  let result = "";
  for (let word of words) {
    result += word.split("").reverse().join("") + " ";
  }
  return result.trim();
}

console.log(reverseEachWord("hello world"));


console.log("**********************************************************************************");
const mystr = "run123test456";   // extract numbers from a string
const matches = mystr.match(/\d/g); // \d+ matches one or more digits
const myresult = matches.join("");   // Join array into a single string
console.log(myresult); // Output: "123456"

console.log("##################################################################################");

let testStr = "i want to learn javascript";  // capitalize the first letter of each word using for of loop

let words = testStr.split(" ");

let result2 = "";
for (let word of words) 
{
      result2 = result2 + word.charAt(0).toUpperCase() + word.slice(1) + " ";
}


console.log(result2);

console.log("##################################################################################");
 // Reverse each word and whole sentence in single function
function reverseWord (arr) {
        let words = arr.split(" ");
        let reserveWords = [];

        for (let word of words) {
            let result = "";
            for ( let i = word.length-1; i>=0; i--){
                result = result + word[i];
            }
            reserveWords.push(result);
        }
        
let finalResult = [];
    for (let i = reserveWords.length - 1; i >= 0; i--) {
        finalResult.push(reserveWords[i]);
    }

    return finalResult.join(" ");
       
       
}

let str = "hello world from noida";

console.log(reverseWord(str));
// -------------------------------------------------------------------------------------------------------//

function reverseWord(str) {
    return str
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .reverse()
        .join(" ");
}

console.log(reverseWord("hello world from noida"));
