/*

	Exercise 10: Custom Iterators with Generators

  Since we didn't cover this in the PluralSight videos, just view the solution
  code below and modify it to better understand it.


	Problem:

	Create a custom iterator for an object that contains a collection of numbers. 
	
	The iterator should return each number multiplied by 2. 
	
	Use a generator function to implement the iterator protocol.

*/

// Solution below
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

/*

  Explanation:

  The *[Symbol.iterator]() defines a generator function that 
    implements the iterator protocol.

  Using yield, it returns each number multiplied by 2.

  This allows the object to be iterable with for...of.
  
  Generators provide an elegant way to create custom iterators.
*/
