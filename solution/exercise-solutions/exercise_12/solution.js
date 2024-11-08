/*
	Explanation:

	Stack: 
		Used for static memory allocation and 
		execution context (primitive values and function calls).

	Heap: 
		Used for dynamic memory allocation (objects, arrays, functions).

*/

// Memory leak example
function createLeak() {
  const largeArray = new Array(1000000).fill("*");
  return function () {
    console.log(largeArray.length);
  };
}

const leakyFunction = createLeak();

// leakyFunction holds a reference to largeArray through closure
// Even if we don't use leakyFunction, largeArray remains in memory

// To prevent the leak, set leakyFunction to null when done
leakyFunction = null;

/*
	Explanation Continued:

	- The `createLeak` function creates a large array and 
			returns a function that references it.

	- The returned function forms a closure over 'largeArray', 
			preventing it from being garbage collected.

	-If `leakyFunction` is not needed, setting it to null allows 
		'largeArray' to be garbage collected.
		
	-Properly managing references is crucial to avoid memory leaks.

*/
