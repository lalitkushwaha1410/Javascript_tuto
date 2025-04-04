// Class provides a way to create objects with some initial values and methods to manipulate those values.
// is is used to create objects and methods more easily.
// useful for encapsulation and inheritance.
// promotes reusability, maintainability and object-oriented programming.
//encapsulation - the bundling of data and methods that operate on that data within one unit, such as a class in JavaScript.
// encapsulation is a way to restrict access to certain details of an object and only expose the necessary parts of it.
// abstraction - the concept of hiding the complex implementation details and showing only the essential features of the object.
// abstraction in javsascript is achieved using classes and objects.
// polymorphism means "many forms" and it means that a single function or method can work in different ways based on the input or the object it is called on.


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