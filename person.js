class Person {
    constructor(prename="John", name="Doe") {
        this.prename = prename;
        this.name = name;
    }
    toString(){ return `Hello. My name is ${this.prename} ${this.name}`; };
}
module.exports = Person;