// When ready, use the code below for testing
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.last()); // Outputs: 5

// Enumerating properties
for (let key in numbers) {
  console.log(key); // Outputs: 0,1,2,3,4 (does not include 'last')
}
