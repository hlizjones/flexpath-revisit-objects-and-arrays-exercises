// Create an object `user` with properties 'username', 'password', and 'email'. 

// Make 'password' non-enumerable so that it doesn't show up during 
// property enumeration or when converting the object to JSON. 

// Verify this behavior.

let user = {username: "hjones", password: "123!", email: "hlizjones@gmail.com" }

Object.defineProperty(user, "password", {
    enumerable: false
})

let userConverted = JSON.stringify(user)

console.log(userConverted)

let values = Object.entries(user)

console.log(values)