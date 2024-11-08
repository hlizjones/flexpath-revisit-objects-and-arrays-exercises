const animal = {
  speak: function () {
    return "Generic animal sound";
  },
};

const dog = Object.create(animal);
dog.speak = function () {
  return "Woof!";
};

// Testing
console.log(animal.speak()); // Outputs: Generic animal sound
console.log(dog.speak()); // Outputs: Woof!

// Inheritance
console.log(Object.getPrototypeOf(dog) === animal); // Outputs: true

/*

  Explanation:

  1.dog is created with animal as its prototype using Object.create.

  2. dog overrides the speak method.

  3. The prototype chain allows dog to inherit properties and 
     methods from animal unless overridden.
*/
