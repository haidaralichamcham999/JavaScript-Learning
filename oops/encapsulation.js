// Encapsulation is useful in cases where we need certain properties or methods for the inner working of the 
// object,but we don't want to expose that to the exterior. Having private properties/methods ensures we don't 
// "accidentally" expose information we don't want.

class Alien {
    //  private variable are defined outside constructor with # as prefix
    // We first need to declare the private property, always using the '#' symbol as the start of its name.
    //property '#birthDay' is not accessible outside class 'Alien' because it has a private identifier
    // we can declare protected property using typescript and not with only javascript and protected means subclass can have access to 
    // the property and not the instance of the class you can see udemy course lecture 12 of typescript 
    #birthDay;
    #name;
    constructor(year, name) {
        this.#birthDay = year;
        this.#name = name;
        this.fullName = name;
    }
    getYear() {
        return this.#getFullName();
    }
    #getFullName(){
        return `${this.#birthDay} ${this.#name}`
    }
}
const alien1 = new Alien('1999', "Haidarali");
console.log(alien1.getYear());

class Character extends Alien {
    constructor(year, name) {
        super(year, name)
    }
    getName(){
        return this.getYear();
    }

}

const person = new Character(23234, 'Yellow')
console.log(person.getName())