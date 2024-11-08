/*
	Exercise 8: Shallow vs. Deep Copying of Arrays
	Problem:

	Demonstrate the difference between shallow and deep copying of 
	arrays containing objects. 
	
	Given the array:
*/

const originalArray = [{ a: 1 }, { b: 2 }, { c: 3 }];

/*
	Create a shallow copy and a deep copy. 

	Modify a property in one of the objects in both copies and 
	show how it affects the original array.
*/

// Shallow copy
const shallowCopy = [...originalArray];

// Deep copy
const deepCopy = originalArray.map((obj) => ({ ...obj }));

// Modifying shallow copy
shallowCopy[0].a = 10;

// Modifying deep copy
deepCopy[1].b = 20;

// Original array after modifications
console.log(originalArray);
// Outputs: [{a: 10}, {b: 2}, {c: 3}]

// Shallow copy
console.log(shallowCopy);
// Outputs: [{a: 10}, {b: 2}, {c: 3}]

// Deep copy
console.log(deepCopy);
// Outputs: [{a: 1}, {b: 20}, {c: 3}]

/*
	Explanation:

	Shallow copying with spread operator copies the array but 
		not the nested objects (they are references).

	Modifying a nested object in the shallow copy affects the original array.

	Deep copying is done by mapping each object and creating a new 
		object with spread {...obj}.
		
	Modifications in the deep copy do not affect the original array.
*/
