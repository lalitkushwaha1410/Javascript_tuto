function encodeConsecutiveChars(str) {
    let result = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += count + str[i - 1];
            count = 1;
        }
    }

    return result;
}

// Example
let input = "eeffhhhieee";
let output = encodeConsecutiveChars(input);
console.log(output); // Output: 2e2f3h1i3e