// If a child class inherits any properties from a parent class, it must first assign 
// the parent properties calling the super() function before assigning its own properties.
// super refer to the contructor, method, attribute of the parent class
// The super keyword is used to access the parend class constructor and method examplet super.parentMethod()

class Character {
    constructor(name, phrase, species, power, speed) {
        this.name = name;
        this.phrase = phrase;
        this.species = species;
        this.power = power;
        this.speed = speed
    }
    sayPhrase = () =>  this.phrase;
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)

}


class Alien extends Character {
    constructor(name, phrase, species, power, speed) {
        super(name, phrase, species, power, speed); // for accessing parent property you have to pass those in super();
    }
    fly = () => 'ZZZZZZZZZZZ' + this.species;
}

class Bug extends Character{
    constructor(name, phrase, species, power, speed) {
        super(name, phrase, species, power, speed);
    }
    hide = () => console.log('You can"t catch me now' + this.species);
}

class Robot extends Character {
    constructor(name, phrase, species, power, speed) {
        super(name, phrase, species, power, speed);
    }
    transform = () => console.log('Optimus prime' + this.species);
}


const alien1 = new Alien("Ali", "I'm Ali the alien!",'Alien', 10, 50)
const bug1 = new Bug("Lien", "Run for your lives!",'Bug', 15, 60)
const robot1 = new Robot('Iron Man', 'flying beat', 'Robot', 100, 200)
console.log(alien1.fly())
console.log(bug1.sayPhrase())
console.log(robot1.move(), robot1.transform())