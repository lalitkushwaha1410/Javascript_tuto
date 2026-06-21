let myJson = { 
"persons" : [
    {
        "name" : "David",
        "org":"microsoft",
        "place":"US",
        "pincode": 201234      
    },
    {
        "name" : "Tiger",
        "org":"google",
        "place":"japan",
        "pincode": 123567
    },{

        "name" : "mark",
        "org":"hyndai",
        "place":"korea",
        "pincode": 431234
    }
]
}
myJson.persons.forEach( person => console.log(person.name));

myJson.persons.forEach( person => console.log(person.pincode));

let myString = JSON.stringify(myJson);
console.log(myString);