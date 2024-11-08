function Shape() {}

Shape.prototype.area = function () {
  return 0;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// Inherit from Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

// Testing
const shape = new Shape();
console.log(shape.area()); // Outputs: 0

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // Outputs: 50

console.log(rectangle instanceof Rectangle); // Outputs: true
console.log(rectangle instanceof Shape); // Outputs: true

/*
  Explanation:

  Shape is a constructor function with an area method.

  Rectangle constructor initializes width and height.

  Rectangle.prototype is set to a new object created from 
    Shape.prototype, establishing inheritance.

  The constructor property is reset to Rectangle after prototype chaining.

  The area method is overridden in Rectangle.

  instanceof checks confirm that rectangle is an 
    instance of both Rectangle and Shape.

*/
