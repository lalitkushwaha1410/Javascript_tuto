function removeAllSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

console.log(removeAllSpaces("This is    my string to  remove     all    spaces "));


function replaceword(str) {
    let result = str.split('t').join('0');
    console.log(result);
    
}

replaceword("potato"); // replace t with 0