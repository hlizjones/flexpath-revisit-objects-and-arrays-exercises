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

const shallowCopy = originalArray
const deepCopy = originalArray.map((el) => ({...el}))

console.log(`Shallow:`, shallowCopy)
console.log(`Deep:`, deepCopy)

originalArray[0] = {d : 4}

console.log(`Original:`, originalArray)
console.log(`Shallow:`, shallowCopy)
console.log(`Deep:`, deepCopy)