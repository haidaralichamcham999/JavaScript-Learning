// What is an abstract class?

// An abstract class is a class that cannot be instantiated.

// This means that you cannot use an abstract class to directly create an object. 
// if we think of a class as a blueprint for constructing a house for example, then an abstract class is a type 
// of blueprint that we cannot use to directly build a house. Instead, an abstract class is a class that another 
// class can inherit from. It acts as a base class for other classes. Using our blueprint analogy, it is a 
// blueprint that another blueprint can use as its base.

class AbstractShape {
    constructor() {
        if (new.target === AbstractShape) {
            throw new Error("Cannot instantiate abstract class");
        }
    }

    // Abstract method
    calculateArea() {
        throw new Error("Abstract method 'calculateArea' must be implemented");
    }
}

// Concrete class implementing AbstractShape
class Circle extends AbstractShape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

// Create an instance of Circle
const circle = new Circle(5);
console.log("Circle area:", circle.calculateArea()); // Outputs: Circle area: 78.53981633974483
