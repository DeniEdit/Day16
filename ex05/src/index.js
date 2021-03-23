class Microsoft {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    static henry() {
        console.log("William Henry Gates III");
    }
}

class Facebook extends Microsoft {
    constructor(name, age) {
        super(name)
        this.age = age;
    }
    studentAge() {
        this.name = "{name}";
        this.age = "{age}";
        return this.name + " is " + this.age;
    }

}

let fb = new Facebook();
console.log(fb.studentAge());
Microsoft.henry();

module.exports = {
    Microsoft,
    Facebook
}
