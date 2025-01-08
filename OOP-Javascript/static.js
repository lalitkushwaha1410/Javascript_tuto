// static methods can be called directly using the class name , dont require object creation
// static variables are shared among all instances of a class.
// static methods are used to create utility functions.

class Animal {
   
    static myMethod(){
        console.log('This is an Animal');
    }
    // static variable or property
    static title = 'The complete Javascript Course';
    newtitle = 'Hello Docker';
}

Animal.myMethod(); 
console.log(Animal.title);

//console.log(Animal.newtitle); // undefined , non static variables can be called using object.

const dog = new Animal();
console.log(dog.newtitle); // non static variables can be called using object.
