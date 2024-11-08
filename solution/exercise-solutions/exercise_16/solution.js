const data = {};

Object.defineProperty(data, "items", {
  value: [],
  writable: false,
  configurable: false,
  enumerable: true,
});

// Testing

// Attempting to reassign items
data.items = [1, 2, 3]; // Fails silently (or throws in strict mode)

// Modifying the content of items
data.items.push(1);
data.items.push(2);

console.log(data.items); // Outputs: [1, 2]

// Attempting to delete items
delete data.items; // Fails silently

console.log(data.items); // Still Outputs: [1, 2]

/*
  Explanation:

  `writable: false` prevents reassignment of data.items.

  `configurable: false` prevents deletion of data.items.

  Since the value is an array, its contents can still be modified.
  
  This allows controlled mutability.

*/
