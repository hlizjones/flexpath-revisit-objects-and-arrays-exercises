const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2];
// combined is [1, 2, 3, 4, 5, 6]

// Cloning combined
const clone = [...combined];

// Modifying clone
clone.push(7);

// Original remains unchanged
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]
console.log(clone); // Outputs: [1, 2, 3, 4, 5, 6, 7]
