// When ready, use the code below for testing
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
