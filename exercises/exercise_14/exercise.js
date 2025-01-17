// Implement a simple class hierarchy without using ES6 classes. 

// Create a `Shape` constructor function with a method 'area' that returns 0. 

// Then, create a `Rectangle` constructor that inherits from `Shape` and 
// overrides the 'area' method to compute the area of a rectangle.

function Shape() {
    this.name = "I am a shape!"
}

Shape.prototype.area = function() {
    return 0;
}

function Rectangle(width, length) {
    Shape.call(this)
    this.width = width
    this.length = length
}

Rectangle.prototype=Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return this.width*this.length;
}

const shape = new Shape();
console.log(shape);
console.log(shape.area());

const rectangle = new Rectangle(5, 10);
console.log(rectangle);
console.log(rectangle.area());
console.log(rectangle.constructor) // Without pointing the constructor property back to Rectabgle, this will log Shape()
console.log(Rectangle.prototype.constructor) // Without pointing the constructor property back to Rectabgle, this will log Shape()