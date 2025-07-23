function isValidBracketString(str) {
    let prevStr;
    do {
        prevStr = str;
        str = str.replace("()", "").replace("{}", "").replace("[]", "");
    } while (str !== prevStr);
    
    return str.length === 0;
}

// Test cases
console.log(isValidBracketString("({})"));     // true
console.log(isValidBracketString("[(]"));      // false
console.log(isValidBracketString("[]{}()"));   // true
console.log(isValidBracketString("([)]"));     // false
console.log(isValidBracketString("{[()]}"));   // true