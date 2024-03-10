// Remember that classes aren't actual entities or objects. 
// Classes are the blueprints or molds that we're going to use to create the actual objects.

// First Example

class Person{
    constructor(name, cername){
        this.firstName =name;
        this.lastName = cername;
    }
    // below method is called as non static method
    fullName(emp){
        return `Full Name is ${this.firstName} ${this.lastName} and is Employee of ${emp}`
    }
    // //below is static method which can be accessable with class only
    // static myName(){
    //     return this.firstName
    // }
}

const person1 = new Person("Haidarali", "Chamcham")
console.log(person1.fullName('Fractal'))
// console.log('I can access static method only with the className direct and not with instance', Person.myName())

// Second Example from   url = https://www.freecodecamp.org/news/object-oriented-javascript-for-beginners/

class Alien{
    constructor(name, phrase){
        this.name = name;
        this.phrase = phrase;
        this.species = 'alien'
    }
    fly =()=>console.log('ZZZZZZZZZZZ');
    sayPhrase =()=> console.log(this.phrase)
}

class Bug{
    constructor(name, phrase){
        this.name = name;
        this.phrase = phrase;
        this.species = 'bug'
    }
    hide =()=>console.log('You can"t catch me now');
    sayPhrase =()=> console.log(this.phrase)
}

class Robot{
    constructor(name, phrase){
        this.name = name
        this.phrase = phrase
        this.species = "robot"
    }
    transform =()=> console.log('Optimus prime');
    sayPhrase =()=> console.log(this.phrase)
}

const alien1 = new Alien("Ali", "I'm Ali the alien!")
// We use the "new" keyword followed by the corresponding class name
// and pass it the corresponding parameters according to what was declared in the class constructor function

const alien2 = new Alien("Lien", "Run for your lives!")
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!")
const bug2 = new Bug("Erik", "I drink decaf!")
const Robot1 = new Robot("Tito", "I can cook, swim and dance!")
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!")
console.log(alien1.name) // output: "Ali"
console.log(bug2.species) // output: "bug"
Robot1.sayPhrase() // output: "I can cook, swim and dance!"
Robot2.transform()