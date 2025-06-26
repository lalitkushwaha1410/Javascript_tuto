let jsonObj = {
    name : "Rohan",
    channel : "Discovery",
    friend : "David",
    Food : "Pizza"

}
console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj); // convert to string type
console.log(myJsonStr);

myJsonStr = myJsonStr.replace("Rohan" , "Virat"); // replace values in string
console.log(myJsonStr);

newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);
