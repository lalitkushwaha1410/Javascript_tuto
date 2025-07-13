let str = "I stay in gurgaon";

let result = str.split(" ").map( word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

console.log(result);

console.log("############################################################################");

function capitalizeWords(str) {
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
