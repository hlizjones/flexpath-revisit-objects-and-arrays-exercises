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
