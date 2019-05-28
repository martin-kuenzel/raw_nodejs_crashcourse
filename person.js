class Person {
    constructor(prename="John", name="Doe") {
        this.prename = prename;
        this.name = name;
    }
    toString(){ return `My name is ${this.prename} ${this.name}`; };
}
module.exports = Person;