// Demonstrate the difference between Object.freeze and Object.seal. 

// Create an object `config` and:

// 1. Use Object.seal on it, then try to add, modify, and delete properties.
// 2. Use Object.freeze on another object `settings`, and 
// 	 attempt the same operations.

// Explain the outcomes.

let config = {name: "Hannah", age: 26}
let settings = {name: "Hannah", age: 26}

Object.freeze(config)
Object.seal(settings)

// config.name = "Holly"
settings.name ="Holly"

// console.log(config)
console.log(settings)