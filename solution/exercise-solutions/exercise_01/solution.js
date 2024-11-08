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
