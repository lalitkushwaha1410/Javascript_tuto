function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

let sentence = "find the longest word in the sentence";
console.log(findLongestWord(sentence)); 
