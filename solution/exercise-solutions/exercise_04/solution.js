Object.defineProperty(Array.prototype, "last", {
  value: function () {
    return this[this.length - 1];
  },
  writable: true,
  configurable: true,
  enumerable: false,
});

// Testing
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.last()); // Outputs: 5

// Enumerating properties
for (let key in numbers) {
  console.log(key); // Outputs: 0,1,2,3,4 (does not include 'last')
}
