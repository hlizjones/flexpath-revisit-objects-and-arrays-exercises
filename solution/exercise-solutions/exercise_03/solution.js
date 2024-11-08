function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Array) {
    const arrCopy = [];
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item);
    });
    return arrCopy;
  }

  const objCopy = {};
  Object.keys(obj).forEach((key) => {
    objCopy[key] = deepClone(obj[key]);
  });
  return objCopy;
}

// Testing
const original = {
  name: "Alice",
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
  },
};

const clone = deepClone(original);

// Modifying clone
clone.name = "Bob";
clone.hobbies.push("chess");
clone.address.city = "Chessboard";

// Original remains unchanged
console.log(original);
// Outputs:
// {
//   name: 'Alice',
//   hobbies: ['reading', 'gaming'],
//   address: { city: 'Wonderland' }
// }

console.log(clone);
// Outputs:
// {
//   name: 'Bob',
//   hobbies: ['reading', 'gaming', 'chess'],
//   address: { city: 'Chessboard' }
// }

/*

  Explanation:

  The deepClone function checks if the value is an object or array.

  It recursively copies each property.

  This ensures that nested objects and arrays are also cloned, not 
  just the top-level object.

  Modifying the clone does not affect the original, demonstrating a deep copy.


*/
