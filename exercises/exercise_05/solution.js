function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person("Alice");

console.log(alice.greet());
/*
  Outputs: "Hello, my name is Alice"
  
  Explanation: greet is defined on Person.prototype and 
  is accessible to alice through the prototype chain.
*/
console.log(alice.hasOwnProperty("greet"));
/*
  Outputs: false

  Explanation: hasOwnProperty checks if greet is a direct property of alice. 
  Since greet is on the prototype, it returns false.
*/
console.log(Object.getPrototypeOf(alice) === Person.prototype);
/*
  Outputs: true

  Explanation: The prototype of alice is Person.prototype.
*/
console.log(Person.prototype.constructor === Person);
/*
  Outputs: true

  Explanation: The constructor property of Person.prototype points 
    back to Person.
*/
