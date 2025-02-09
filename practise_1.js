
// myfunc();
// function myfunc() {
//     console.log("Hello, World!");
// }
// let num1;
// num1 = 10;
// console.log(num1);

//const num = 40 ; // global variable in lexical scope
function outerFunc1(){
    //const num = 5;
    function innerFunc1(){
        const num = 10;
        console.log(num); // first inner num will be looked for . if not found then outer num will be looked for and 
                                                                // if not found then global num will be looked for
    }   
    innerFunc1();

}
outerFunc1();