// console.log(window);  //this and window keyword are same
// console.log(this);
function myinfo(){
    console.log(`my name is ${this.name} and my age is ${this.age}`);
 }

var object1 = {
    name : 'sanskar',
    age : 1.5,
    info : myinfo
}

var object2 = {
    name : 'lalit',
    age : 31,
    info : myinfo
   }

var object3 = {
 name : 'vaanu',
 age : 6,
 info : myinfo
}  

object1.info();
object2.info();
object3.info();