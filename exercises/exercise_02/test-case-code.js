const animal = {
    speak() {
        return "Generic animal sound"
    }
}

const dog = Object.create(animal);

dog.speak = () => {
    return "Woof"
}



// When ready, use the code below for testing
console.log(animal.speak()); // Outputs: Generic animal sound
console.log(dog.speak()); // Outputs: Woof!

// Inheritance
console.log(Object.getPrototypeOf(dog) === animal); // Outputs: true
