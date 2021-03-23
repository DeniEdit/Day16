class Pets {
    constructor(name, legs) {
        this._name = name;
        this._legs = legs;
    }
    walk() {
        var numberOfLegs;
        return "Pujdo is walking on 4 legs" + super.walk;
    }
}

class Dog extends Pets {
    constructor(name, legs) {
        super(name)
        this.legs = legs;
    }
    bark() {
        var dogSay;
        return "Pujdo says WUF-WUF" + super.dogSay;
    }

}

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}
