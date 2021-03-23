function firstName(firstName) {
    firstName = firstName.toUpperCase();
}

function lastName(lastName) {
    lastName = lastName.toLowerCase();
}

console.log(firstName("Deni"));
console.log(lastName("Deni"));

module.exports = {
    firstName,
    lastName
}