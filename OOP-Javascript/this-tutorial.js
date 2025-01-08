// this keyword concept in javascript

//console.log(this); // window object
//console.log(this === window); // window object

// this keyword refers to current execution context
// in global execution context , this refers to window object

const person1 = {
 name : 'Ankur',
 age : 30,
 info : function(){  // if we create a function inside object , that becomes a method of that object
       // console.log(this); // person1 object
        console.log(`Name is ${this.name}, Age is ${this.age}`);
 }

}

const person2 = {
    name : 'David',
    age : 67,
    info : function(){  // if we create a function inside object , that becomes a method of that object
          // console.log(this); // person1 object
           console.log(`Name is ${this.name}, Age is ${this.age}`);
    }
   
   }
person1.info();
person2.info();

// here info method is comman in both objects , hence it can defined as a global function outside the object and can be called using call method
// example below for person3 object
function myinfo(){
    console.log(`Name is ${this.name}, Age is ${this.age}`);
}

const person3 = {
    name : 'Charlie',
    age : 37,
    info : myinfo,
   
   }

person3.info();