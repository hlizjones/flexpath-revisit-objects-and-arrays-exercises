// Create an object `counter` with a property 'count' that cannot 
// be set to a value less than the current value. 

// Use Object.defineProperty to enforce this constraint.

let counter = { count: "2"}

Object.defineProperty(counter, "isCountValid", {
    set: function (value) {
        if (value < 2) {
            console.log("Age cannot be lower than 2")
        } else {
           this.count = value;
        }
}} )

counter.isCountValid = '9'

console.log(counter)