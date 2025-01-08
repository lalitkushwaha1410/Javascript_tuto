// Inheritance is a mechanism in which a new class is derived from an existing class.
// It allows a class to inherit properties and behavior from another class.
// The class that inherits properties and behavior is known as a subclass or derived class.
// The class whose properties and behavior are inherited is known as a superclass or base class.
// Inheritance is one of the key features of object-oriented programming.
// It promotes reusability, maintainability, and object-oriented programming.

// Inheritance in JavaScript

// Inheritance in JavaScript is implemented using the prototype chain.

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    makeSound() {
        console.log('Animal sound');
    }

    aboutme(){
        console.log(`I am in Animal Class`);
    }

}

// const dog = new Animal('Dog');
// dog.makeSound();

class Dog extends Animal {
    makeSound() {
        console.log('Bark');
    }
}

class cat extends Animal {
    makeSound() {
        super.makeSound(); // super keyword is used to call the parent class method
        console.log('cat sound - Meow');
    }
}

const dog = new Dog('Tommy');
dog.makeSound();
dog.aboutme();

const mycat = new cat();
mycat.makeSound();

// method overriding - when a subclass provides a specific implementation of a method that is already provided by its parent class.
// super keyword - used to call the parent class method.
// method overloading - JavaScript does not support method overloading. In JavaScript, 
// you can define multiple methods with the same name, but the method that is defined last will override the previous methods.

class State {
    constructor(name) {
        this.name = name;
    }
    DifferentCity() {
        console.log(`I am in State Method`);
    }

    DifferentCity() {
        console.log(`I am in Agra`);
    }

    DifferentCity() {
        console.log(`I am in Lucknow`);
    }

    DifferentCity() {
        console.log(`I am in Kanpur`);
    }
    
    DifferentCity() {
        console.log(`I am in Varanasi`);
    }

}

const mystate = new State('Uttar Pradesh');
mystate.DifferentCity(); // it will print only the last method i.e. Varanasi because JavaScript does not support method overloading
