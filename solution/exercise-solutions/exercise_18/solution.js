Array.prototype.myMap = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // Check if the element exists to handle sparse arrays
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

// Testing
const numbers = [1, 2, 3];
const doubled = numbers.myMap(function (number) {
  return number * 2;
});

console.log(doubled); // Outputs: [2, 4, 6]
