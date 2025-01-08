function fact(num){

    if(num < 0){ return "No fact for negative number";}

    if (num === 0 || num === 1) { return 1; }

    // let temp = 1;
    // for (let i = num; i >= 1; i--) {
    //     temp = temp * i;
    // }
    // return temp;

    return num * fact(num - 1);
        
}

const result = fact(5);
console.log(result);