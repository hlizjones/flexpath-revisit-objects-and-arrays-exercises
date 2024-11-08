function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person("Alice");

console.log(alice.greet());
/*
  Explain here
*/
console.log(alice.hasOwnProperty("greet"));
/*
  Explain here
*/
console.log(Object.getPrototypeOf(alice) === Person.prototype);
/*
  Explain here
*/
console.log(Person.prototype.constructor === Person);
/*
  Explain here
*/
