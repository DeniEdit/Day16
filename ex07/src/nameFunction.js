function firstName(firstName) {
    var a = firstName.toUpperCase();
    return a;
}

function lastName(lastName) {
    var b = lastName.toLowerCase();
    return b;
}

const {firstName, lastName} = require('./index.js'); 
const  person = new Person();
console.log(person); 
console.log(firstName("deni"));
console.log(lastName("MILICEVIC"));

module.exports = {
    firstName,
    lastName
}