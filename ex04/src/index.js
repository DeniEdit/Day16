class Pets {
    constructor(name, legs) {
        this.name = name;
        this.legs = legs;
    }
    walk() {
        var numberOfLegs;
        console.log(`${this.name} is walking on ${this.legs}`);
        return numberOfLegs;
    }
}

class Dog extends Pets {
    constructor(name, legs) {
        super(name)
        this.legs = legs;
    }
    bark() {
        let dogSay = "Pujdo says WUF-WUF";
        console.log(dogSay);
        return dogSay;
    }

}

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}
