const person = {
  firstName: "John",
  lastName: "Doe",
};

Object.defineProperty(person, "getFullName", {
  value: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  writable: false,
  configurable: false,
  enumerable: false,
});

// Testing
console.log(person.getFullName()); // Outputs: John Doe

// Verifying property attributes
person.getFullName = function () {
  return "Modified";
}; // Does not change
delete person.getFullName; // Cannot delete
console.log(person.getFullName()); // Still outputs: John Doe

// Enumerating properties
for (let key in person) {
  console.log(key); // Outputs: firstName, lastName (getFullName is non-enumerable)
}

/*

  Solution Explanation:

  1. Object.defineProperty is used to add getFullName to person.
  2. The property is set to non-writable, non-configurable, and non-enumerable.
  3. Attempts to modify or delete getFullName will fail silently (or throw in strict mode).
  4. Non-enumerable properties do not show up in for...in loops.

*/
