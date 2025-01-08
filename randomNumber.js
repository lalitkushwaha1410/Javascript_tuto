function generateRandomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        return 'Please provide numbers only';
    }

    if (min >= max) {
        return 'Minimum number should be less than Maximum number';
    }

    return Math.floor(Math.random()* (max-min+1)) + min;
}

const output = generateRandomNumber(1, 10);
console.log("random number - ",output);

const p1 = '10';
const p2 = 10;
console.log(p1 == p2); 