// Create a function `createUser` that returns an object with a 
// 'name' property and a method `sayHello`. 

// Use Object.create to set the prototype of the returned object to a 
// shared prototype object. 

// Demonstrate that multiple users share the same prototype.
// 
const userPrototype = {
  sayHello: function () {
    return `Hello, my name is ${this.name}`;
  },
};

function createUser(name) {
  const user = Object.create(userPrototype);
  user.name = name;
  return user;
}

// Testing
const user1 = createUser("Alice");
const user2 = createUser("Bob");

console.log(user1);
console.log(user2)

console.log(user1.sayHello()); // Outputs: Hello, my name is Alice
console.log(user2.sayHello()); // Outputs: Hello, my name is Bob

console.log(Object.getPrototypeOf(user1) === userPrototype); // Outputs: true
console.log(Object.getPrototypeOf(user2) === userPrototype); // Outputs: true

/*
  Explanation:

  `userPrototype` contains methods shared by all users.

  `createUser` creates a new object with userPrototype as its prototype.

  name is set directly on the object, while methods are shared.
  
  This is memory-efficient as methods are not duplicated per instance.

*/
