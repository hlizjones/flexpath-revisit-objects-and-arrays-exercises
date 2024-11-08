// When ready, use the code below for testing
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
