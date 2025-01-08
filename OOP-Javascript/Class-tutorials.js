// Class provides a way to create objects with some initial values and methods to manipulate those values.
// is is used to create objects and methods more easily.
// useful for encapsulation and inheritance.
// promotes reusability, maintainability and object-oriented programming.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() { // method of class
        console.log(`Hello ${this.name} - Age :${this.age}`);
    }
}
const P1 = new Person('Ankit', 43);
P1.greet();

//Static methods
//Static methods are called without instantiating their class and cannot be called through a class instance.

class MathOperations {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }

    subtract(a, b) {
        return a - b;
    }
}

console.log(MathOperations.add(2, 3));
console.log(MathOperations.multiply(5, 6));

const math = new MathOperations();
console.log(math.subtract(50, 8));