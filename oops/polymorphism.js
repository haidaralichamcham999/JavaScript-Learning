// Overriding exampale
class Character {
    constructor(name, phrase, species, power, speed) {
        this.name = name;
        this.phrase = phrase;
        this.species = species;
        this.power = power;
        this.speed = speed
    }
    sayPhrase = () => this.phrase;
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)

}


class Alien extends Character {
    constructor(name, phrase, species, power, speed) {
        super(name, phrase, species, power, speed);
    }
    move = () => "Now I'm doing a different thing, HA!" + this.species;
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
console.log(alien1.move()) // output: "Now I'm doing a different thing, HA!"


//Function Overloading: Example No.1 
function calculateArea(shape) {
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    } else if (shape instanceof Circle) {
        return Math.PI * shape.radius * shape.radius;
    }
}
//Example 2: overloading example with class
class Area {

    calculateArea(...args) {
        if (args.length === 2) {
            return args[0] * args[1]
        } else {
            return Math.pow(args[0], 2);
        }
    }
}

class Rectangle extends Area {
    constructor(width, height) {
        super()
        this.width = width;
        this.height = height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

let rectangle = new Rectangle(5, 10);
let circle = new Circle(7);
console.log('...', rectangle.calculateArea(6,4))
console.log('Function overloading -->', calculateArea(rectangle)); // Output: 50
console.log(calculateArea(circle).toFixed(2)); // Output: ~153.94
