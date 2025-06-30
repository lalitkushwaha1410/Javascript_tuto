let jsonObj = {
    "users" : [
    { 
        "name" : "Rohit",
        "channel" : "Discovery",
        "friend" : "David",
        "Food" : "Pizza",
        "skills" : ["html" , "java", "python"],
        "address" : {
            "city" :"Pune",
            "State" : "Maharashtra",
            "Country" : "India"
        } 
    },
    {
         "name" : "Virat",
        "channel" : "Zee cinema",
        "friend" : "David",
        "Food" : "Momoz",
        "skills" : ["html" , "java", "python"],
        "address" : {
            "city" :"Pune",
            "State" : "Maharashtra",
            "Country" : "India"
        } 
    },
    { "name" : "Abhimanyu",
        "channel" : "AAJtak",
        "friend" : "David",
        "Food" : "Fruits",
        "skills" : ["html" , "java", "python"],
        "address" : {
            "city" :"Agra",
            "State" : "Uttar Pradesh",
            "Country" : "India"
        } 
    } , 
        
    { "name" : "Saurabh",
        "channel" : "Sony",
        "friend" : "David",
        "Food" : "Coke",
        "skills" : ["html" , "java", "python"],
        "address" : {
            "city" :"Ahmedabad",
            "State" : "Gujarat",
            "Country" : "India"
        } 
    } 
]
    
    }


// console.log(jsonObj);
// console.log(jsonObj.Food);
// console.log(jsonObj.skills[0]);
// console.log(jsonObj.address.State);


// jsonObj.users.forEach(user => {    // print all users name 
//   console.log(user.name);
// });

// for (let i = 0; i < jsonObj.users.length; i++) {
//   console.log(jsonObj.users[i].name);
// }


jsonObj.users[0].lastName = "Donald";
console.log(jsonObj.users[0].lastName);



// let myJsonStr = JSON.stringify(jsonObj); // convert to string type to send over network to server
// console.log(myJsonStr);

// myJsonStr = myJsonStr.replace("Rohan" , "Virat"); // replace values in string
// console.log(myJsonStr);

// newJsonObj = JSON.parse(myJsonStr);  // convert string to Json Object
// console.log(newJsonObj);
