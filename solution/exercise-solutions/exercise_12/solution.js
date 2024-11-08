const counter = {
  _count: 0,
};

Object.defineProperty(counter, "count", {
  get() {
    return this._count;
  },
  set(value) {
    if (value >= this._count) {
      this._count = value;
    } else {
      throw new Error("Cannot decrease count");
    }
  },
});

// Testing
counter.count = 5;
console.log(counter.count); // Outputs: 5

counter.count = 10;
console.log(counter.count); // Outputs: 10

try {
  counter.count = 8; // Throws an error
} catch (e) {
  console.error(e.message); // Outputs: Cannot decrease count
}

/*

  Explanation:

  Object.defineProperty is used to define a getter and setter for count.
  The setter enforces that count cannot decrease.
  Attempting to set count to a lower value throws an error.
  The actual value is stored in a private property _count.

*/
