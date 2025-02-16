
function isPrime(num) {
    for ( let i=2; i<= num/2; i++) {
        if (num % i === 0  ) {
            return "Num is not prime";
        }
    }
    return "Num is prime" ;  // nmumber is prime
}

console.log(isPrime(10));


