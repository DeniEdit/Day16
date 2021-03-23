class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        return `Name: ${this.name} , ${this.email} , ${this.age}`;
    }
}
const personInfo = new Person("John", "john@example.com", "35");
console.log(personInfo);

module.exports = Person;