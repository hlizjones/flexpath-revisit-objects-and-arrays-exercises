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
