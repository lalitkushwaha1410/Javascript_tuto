try {
    const age = 15;
    console.log(age);
if (age <= 18)
{
    throw new Error("person cannot vote");
    
}
}
catch (err)
{
    console.log(err.name); 
    console.log(err.message)
    //console.log(err);
    
}
finally {
    console.log("Finally block");
    
}

console.log("print this message after error handling");


console.log(1<2<3);
console.log(1>2>3);

