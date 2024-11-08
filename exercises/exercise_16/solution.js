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
