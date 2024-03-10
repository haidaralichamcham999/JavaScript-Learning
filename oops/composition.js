// Composition is a more flexible way to create new objects than inheritance. This is because composition allows 
// you to create objects from any other object, regardless of whether or not the two objects are related. 
// Inheritance, on the other hand, only allows you to create objects from objects that are related to the parent
// object.
// Here is an example of composition in Java/JavaScript
// Example of composition in JavaScript

// Engine class
class Engine {
    constructor(horsepower) {
        this.horsepower = horsepower;
    }

    start() {
        console.log('Engine started');
    }
}

// Car class composed of Engine
class Car {
    constructor(make, model, horsepower) {
        this.make = make;
        this.model = model;
        this.engine = new Engine(horsepower); // Composition: Car has an Engine
    }

    start() {
        console.log(`${this.make} ${this.model} starting...`);
        this.engine.start();
    }
}

// Creating a car
let myCar = new Car('Toyota', 'Corolla', 150);

// Using the car
console.log(myCar.start())