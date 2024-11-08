/*
	Solution:

	Explanation:

	Map: Holds strong references to keys and values; 
		keys can be any value, including objects. 
		Prevents garbage collection if references exist.
	
		WeakMap: Holds weak references to keys; 
			keys must be objects. 
			Allows garbage collection if there are no other references to the key object.
*/

const element = document.getElementById("myElement");
const data = new WeakMap();

data.set(element, { clickCount: 0 });

element.addEventListener("click", () => {
  const info = data.get(element);
  info.clickCount += 1;
  console.log(`Element clicked ${info.clickCount} times`);
});

// If element is removed from DOM and there are no other references,
// it can be garbage collected, and the entry in WeakMap is removed automatically.

/*
	Explanation Continued:

	Using WeakMap prevents memory leaks because it 
		doesn't prevent garbage collection of element.

	When element is no longer needed and removed, 
		the associated data is also garbage collected.

	With a regular Map, the reference in the map would 
		prevent element from being garbage collected.
*/
