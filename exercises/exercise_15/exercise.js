// Create an object `data` with a property 'items' that is an array. 

// Use Object.defineProperty to make 'items' read-only and prevent it from 
// being deleted, but allow the array's content to be modified.

let data = { items : [1,2,3,] }

Object.defineProperty(data, "items", {
    writable: false,
    configurable: true
})