class Person {
    constructor(message) {
        this._message = message;
    }
    static display() {
        console.log("Static method is invoked from Person class");
    }
    static show() {
        
    }
}
var message = new Person();
message.show();
module.exports = Person;