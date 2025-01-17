function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person("Alice");

console.log(alice.greet());
/*
  Hello, my name is Alice.
  this is the new Person with the argument Alice, the name property of this is the argument passed in so this.name = Alice
*/
console.log(alice.hasOwnProperty("greet"));
/*
  false
  hasOwnPrototype does no go up the chain and greet is only available to alice through the chain
*/
console.log(Object.getPrototypeOf(alice) === Person.prototype);
/*
  true
  alice was created using the Person.prototype so it will be a Person.prototype
*/
console.log(Person.prototype.constructor === Person);
/*
  true
  Person is the constructor function for Person.protoype
*/
