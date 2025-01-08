// getter and setter in javascript
// getter and setter are used to get and set the value of an object property
// getter and setter are used to define computed properties

// it gives us to encapsulate the object properties , means data hiding
// get - used to retrieve the value of a property
// set - used to set the value of a property

class circle {
    constructor(radius) {
        this._radius = radius; // _ is used to define private variable
    }

    get getRadius() {
        return this._radius;
    }

    set SetRadius(newRadius) {       
        this._radius = newRadius;
    }

    get getArea() {
        return Math.PI * this._radius * this._radius;
    }
}

const c1 = new circle(10);
console.log(c1.getRadius); 

c1.SetRadius = 60;
console.log(c1.getRadius);  

console.log(c1.getArea);  // 3.14 * 60 * 60 = 11304