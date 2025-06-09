const input = "i am an engineer";
const vowels = ['a', 'e', 'i', 'o', 'u'];

const result = input
  .split(" ")
  .map(word => {
    const count = word
      .toLowerCase()
      .split("")
      .filter(char => vowels.includes(char)).length;
    return count;
  }).join("");

console.log(result); // Output: 1114