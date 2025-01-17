// Create a function `createUser` that returns an object with a 
// 'name' property and a method `sayHello`. 

// Use Object.create to set the prototype of the returned object to a 
// shared prototype object to give the return object thr method

// Demonstrate that multiple users share the same prototype.

function createUser (name) {
    let user = Object.create(userPrototype);
    user.name = name;
    return user;
}

let userPrototype = {
    sayHello : function() {
    console.log(`Hello, ${this.name}!`)
} }

let hannah = new createUser("Hannah")

let nadine = new createUser("Nadine")

console.log(hannah)
console.log(nadine)

hannah.sayHello()

nadine.sayHello()

