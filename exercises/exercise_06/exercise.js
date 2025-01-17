// Given an array numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];, perform the 
// following operations:

// 1. Remove elements from index 2 to 4 (inclusive) using splice.
// 2. Create a new array containing elements from index 5 to the end using slice.
// 3. Insert the number 10 at index 3.

// Show the final state of the original array and the new array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.splice(1, 3);

// console.log(arr);

// let newArr = arr.slice(4)

// console.log(newArr)

arr.splice(3, 0, 10)

console.log(arr)