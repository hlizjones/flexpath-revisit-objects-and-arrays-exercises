let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Remove elements from index 2 to 4 (inclusive)
numbers.splice(2, 3); // Removes 3 elements starting from index 2
// numbers is now [1, 2, 6, 7, 8, 9]

// 2. Create a new array containing elements from index 5 to the end
const newArray = numbers.slice(5);
// newArray is [9]

// 3. Insert the number 10 at index 3
numbers.splice(3, 0, 10); // Inserts 10 at index 3
// numbers is now [1, 2, 6, 10, 7, 8, 9]

// Final arrays
console.log(numbers); // Outputs: [1, 2, 6, 10, 7, 8, 9]
console.log(newArray); // Outputs: [9]

/*
	Explanation:

	splice modifies the original array by removing or adding elements.

	slice returns a new array containing a portion of the original array.

	Inserting with splice is done by specifying 0 as the delete count.
	
	The original array is mutated, and the new array is a separate copy.

*/
