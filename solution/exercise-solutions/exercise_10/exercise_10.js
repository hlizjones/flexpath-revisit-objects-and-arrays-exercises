/*

	Exercise 10: Custom Iterators with Generators

	Problem:

	Create a custom iterator for an object that contains a collection of numbers. 
	
	The iterator should return each number multiplied by 2. 
	
	Use a generator function to implement the iterator protocol.

*/

// solution below
const numberCollection = {
  numbers: [1, 2, 3, 4, 5],
  *[Symbol.iterator]() {
    for (const number of this.numbers) {
      yield number * 2;
    }
  },
};

// Testing
for (const num of numberCollection) {
  console.log(num); // Outputs: 2, 4, 6, 8, 10
}
