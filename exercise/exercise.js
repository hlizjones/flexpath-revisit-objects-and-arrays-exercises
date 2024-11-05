import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // To run the code you write for each exercise, change the text below to match the name
  // of the exercise.
  // For Example:
  // If I want to run exercise_05 below, I would change the text from "exercise_01" to
  // "exercise_05", save this file, and then when I run this file with `node exercise.js`
  // the code for exercise_05 will run
  exercise_01();
}

export function exercise_01() {
  /* 
   
    Exercise 1
    
    Description: Create an object named person with properties name (string), 
    age (number), and city (string). Assign appropriate values to these properties.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };

  // Enter your code in the empty lines ABOVE
}

export function exercise_02() {
  const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };
  /* 
   
    Exercise 2
    
    Description: Given the person object from the previous exercise, add a new property email with a value of your choice. 
    Then, update the city property to a different city, and delete the age property.
  
  */
  // CODE IN THE OPEN LINES BELOW
  // Adding a new property
  person.email = "john.doe@example.com";

  // Updating an existing property
  person.city = "Los Angeles";

  // Deleting a property
  delete person.age;

  // Enter your code in the empty lines ABOVE
}

export function exercise_03() {
  /* 
   
    Exercise 3
    
    Description: Create an object named car using the new keyword and the Object constructor. 
    Add properties make, model, and year with appropriate values.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const car = new Object();
  car.make = "Toyota";
  car.model = "Camry";
  car.year = 2021;

  // Enter your code in the empty lines ABOVE
}

export function exercise_04() {
  /* 
   
    Exercise 4
    
    Description: Create a primitive variable let a = 10; and another variable let b = a;. 
    Change the value of b to 20. What are the values of a and b?

    Then, create an object let obj1 = { value: 10 }; and another object let obj2 = obj1;. Change obj2.value to 20. 
    What are the values of obj1.value and obj2.value? Explain the difference.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let a = 10;
  let b = a;
  b = 20;
  // a = 10, b = 20

  let obj1 = { value: 10 };
  let obj2 = obj1;
  obj2.value = 20;
  // obj1.value = 20, obj2.value = 20
  // Enter your code in the empty lines ABOVE
  /*
    Explanation: Primitive types are copied by value, so changing b does not affect a. 
    Objects are reference types, so obj1 and obj2 reference the same object; 
    changing obj2.value affects obj1.value.
  */
}

export function exercise_05() {
  /* 
   
    Exercise 5
    
    Description: Create an object animal with a method speak() that logs "The animal makes a sound". 
    Then, create another object dog that inherits from animal using Object.create. 
    Add a bark() method to dog that logs "The dog barks". Demonstrate calling both speak() and bark() from dog.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const animal = {
    speak() {
      console.log("The animal makes a sound");
    },
  };

  const dog = Object.create(animal);
  dog.bark = function () {
    console.log("The dog barks");
  };

  dog.speak(); // The animal makes a sound
  dog.bark(); // The dog barks

  // Enter your code in the empty lines ABOVE
}

export function exercise_06() {
  /* 
   
    Exercise 6
    
    Description: Explain how JavaScript uses the prototype chain when accessing properties and methods. 
    Illustrate this with an example where an object accesses a method from its prototype.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function Person(name) {
    this.name = name;
  }

  Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };

  const alice = new Person("Alice");
  alice.greet(); // Hello, my name is Alice

  // Enter your code in the empty lines ABOVE

  /*
    ANSWER

    In JavaScript, when you try to access a property or method on an object, 
    the engine first looks for it on the object itself. 
    If it doesn't find it, it looks up the prototype chain until it finds the 
    property or reaches the end of the chain.
  */
}

export function exercise_07() {
  /* 
   
    Exercise 7
    
    Description: 
    Create an array named fruits containing the strings "apple", "banana", and "orange" 
    using array literal notation.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const fruits = ["apple", "banana", "orange"];

  // Enter your code in the empty lines ABOVE
}

export function exercise_08() {
  /* 
   
    Exercise 8
    
    Description: Starting with the fruits array from the previous exercise:

      Add "grape" to the end of the array.
      Remove the first element of the array.
      Add "kiwi" to the beginning of the array.
      Remove the last element of the array.

      Provide the final state of the array.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const fruits = ["apple", "banana", "orange"];
  fruits.push("grape"); // ['apple', 'banana', 'orange', 'grape']
  fruits.shift(); // ['banana', 'orange', 'grape']
  fruits.unshift("kiwi"); // ['kiwi', 'banana', 'orange', 'grape']
  fruits.pop(); // ['kiwi', 'banana', 'orange']

  // Final array: ['kiwi', 'banana', 'orange']

  // Enter your code in the empty lines ABOVE
}

export function exercise_09() {
  /* 
   
    Exercise 9
    
    Description:

    Using the array numbers = [1, 2, 3, 4, 5, 6];, 
    remove the elements at index 2 and 3 using splice, and insert 7, 8 at index 2.
    Then, use slice to create a new array newNumbers containing the 
    first three elements of the modified numbers array.
      
  */
  // CODE IN THE OPEN LINES BELOW
  const numbers = [1, 2, 3, 4, 5, 6];
  numbers.splice(2, 2, 7, 8); // numbers is now [1, 2, 7, 8, 5, 6]

  const newNumbers = numbers.slice(0, 3); // newNumbers is [1, 2, 7]

  // Enter your code in the empty lines ABOVE
}

export function exercise_10() {
  /* 
   
    Exercise 10
    
    Given two arrays: arr1 = [1, 2, 3]; and arr2 = [4, 5, 6];, 
    combine them into a single array combined using both concat and the spread operator.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined_1 = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]

  //Using the spread operator
  const combined_2 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

  // Enter your code in the empty lines ABOVE
}

export function exercise_11() {
  /* 
   
    Exercise 11
    
    Given an array original = [1, 2, [3, 4]];, create a shallow copy named shallowCopy and a deep copy named deepCopy. 
    Modify original[2][0] to 99. Show the contents of shallowCopy and deepCopy after the change.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const original = [1, 2, [3, 4]];

  // Shallow copy
  const shallowCopy = [...original];

  // Deep copy
  const deepCopy = JSON.parse(JSON.stringify(original));

  // Modify original
  original[2][0] = 99;

  console.log(shallowCopy); // [1, 2, [99, 4]]
  console.log(deepCopy); // [1, 2, [3, 4]]

  /*
    Explanation: The shallow copy references the same nested array, 
    so changes affect it. The deep copy doesn't share references, so it remains unchanged.
  */
  // Enter your code in the empty lines ABOVE
}

export function exercise_12() {
  /* 
   
    Exercise 12
    
    Given an array numbers = [1, 2, 3, 4, 5];, use forEach to log each number multiplied by 2.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const numbers = [1, 2, 3, 4, 5, 6];
  numbers.forEach(function (number) {
    console.log(number * 2);
  });

  // Enter your code in the empty lines ABOVE
}

export function exercise_13() {
  /* 
   
    Exercise 13
    
    Use map on the numbers array to create a new array squares containing the squares of each number.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const numbers = [1, 2, 3, 4, 5, 6];
  const squares = numbers.map(function (number) {
    return number * number;
  });

  // squares: [1, 4, 9, 16, 25]

  // Enter your code in the empty lines ABOVE
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
    Use filter on the numbers array to create a new array evens containing only the even numbers.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const numbers = [1, 2, 3, 4, 5, 6];
  const evens = numbers.filter(function (number) {
    return number % 2 === 0;
  });

  // evens: [2, 4]

  // Enter your code in the empty lines ABOVE
}

export function exercise_15() {
  /* 
   
    Exercise 15

    Use reduce on the numbers array to calculate the sum of all numbers.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  const numbers = [1, 2, 3, 4, 5, 6];
  const sum = numbers.reduce(function (total, number) {
    return total + number;
  }, 0);

  // sum: 15

  // Enter your code in the empty lines ABOVE
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Explain the advantages of using methods like forEach, map, filter, and reduce over traditional for loops. 
    Provide examples where these methods are more efficient or readable.
  
  */
  // CODE IN THE OPEN LINES BELOW
  // using map
  const numbers = [1, 2, 3, 4, 5, 6];
  const doubled_with_map = numbers.map((number) => number * 2);

  // versus a for loop
  const doubled_with_for_loop = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  // Enter your code in the empty lines ABOVE

  /*
    Answer

    Iteration methods are more concise and expressive, 
    reducing boilerplate code. They improve readability by clearly conveying intent.

  */
}

export function exercise_17() {
  /* 
   
    Exercise 17
    
    Create a constructor function Vehicle with property make. 
    Add a method start() to Vehicle.prototype that logs "Vehicle started". 
    Then, create a constructor function Car that inherits from Vehicle. 
    Add a method drive() to Car.prototype 
    that logs "Car is driving". 
    Demonstrate creating an instance of Car and calling both start() and drive().
  
  */
  // CODE IN THE OPEN LINES BELOW
  function Vehicle(make) {
    this.make = make;
  }

  Vehicle.prototype.start = function () {
    console.log("Vehicle started");
  };

  function Car(make, model) {
    Vehicle.call(this, make);
    this.model = model;
  }

  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;

  Car.prototype.drive = function () {
    console.log("Car is driving");
  };

  const myCar = new Car("Toyota", "Corolla");
  myCar.start(); // Vehicle started
  myCar.drive(); // Car is driving

  // Enter your code in the empty lines ABOVE
}

export function exercise_18() {
  /* 
   
    Exercise 18
    
    Explain the difference between classical inheritance in OOP languages (like Java) 
    and JavaScript’s prototype-based inheritance. 
    Use examples to illustrate your point.
  
  */
  // CODE IN THE OPEN LINES BELOW
  /* 
  Java example

  class Vehicle {
    public void start() {
      System.out.println("Vehicle started");
    }
  }
  
  class Car extends Vehicle {
    public void drive() {
      System.out.println("Car is driving");
    }
  }
  */

  //JS example

  function Vehicle() {}
  Vehicle.prototype.start = function () {
    console.log("Vehicle started");
  };

  function Car() {}
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.drive = function () {
    console.log("Car is driving");
  };

  // Enter your code in the empty lines ABOVE
  /*
    Answer

    Classical OOP languages use classes as blueprints for objects, and inheritance 
    is achieved through class hierarchies. 
    JavaScript uses prototypes, where objects inherit directly from other objects.

    JavaScript's prototype-based inheritance is more flexible 
    but can be less intuitive for those used to classical OOP.
  */
}

export function exercise_19() {
  /* 
   
    Exercise 19
    Create an object user with a property name. Use Object.defineProperty to 
    make name non-writable and non-enumerable. 
    Demonstrate that name cannot be changed and does not show up in a for...in loop.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  const user = {};

  Object.defineProperty(user, "name", {
    value: "Alice",
    writable: false,
    enumerable: false,
  });

  user.name = "Bob"; // Attempt to change
  console.log(user.name); // 'Alice'

  for (let key in user) {
    console.log(key); // No output, 'name' is non-enumerable
  }

  // Enter your code in the empty lines ABOVE
}

export function exercise_20() {
  /* 
   
    Exercise 20
    
    Explain what property descriptors are in JavaScript. 
    Use Object.getOwnPropertyDescriptor to display the property descriptor of user.name 
    from the previous exercise.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const descriptor = Object.getOwnPropertyDescriptor(user, "name");
  console.log(descriptor);

  // Output:
  // {
  //   value: 'Alice',
  //   writable: false,
  //   enumerable: false,
  //   configurable: false
  // }

  // Enter your code in the empty lines ABOVE

  /*
    Property descriptors provide detailed information 
    about a property's configuration: value, writability, enumerability, and configurability.
  */
}

export function exercise_21() {
  /* 
   
    Exercise 21
    
    Briefly explain how JavaScript manages memory using the stack and the heap. 
    Provide examples of variables that are stored in the stack vs. the heap.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let a = 10; // Stored in stack
  let b = a;

  let obj = { name: "Alice" }; // Reference stored in stack, object in heap

  // Enter your code in the empty lines ABOVE

  /*
  The stack stores primitive values and function calls, 
  which are of fixed size. The heap stores objects, which can vary in size.
  Primitives are copied by value; objects are accessed by reference due to their location in the heap.


  */
}

export function exercise_22() {
  /* 
   
    Exercise 22
    
    Create an object config with properties apiKey and apiSecret. 
    Use Object.freeze to prevent any modifications to the object. 
    Attempt to change apiKey and add a new property url. Show that the object remains unchanged.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const config = {
    apiKey: "12345",
    apiSecret: "abcde",
  };

  Object.freeze(config);

  config.apiKey = "67890"; // Does not change
  config.url = "http://example.com"; // Not added

  console.log(config.apiKey); // '12345'
  console.log(config.url); // undefined

  // Enter your code in the empty lines ABOVE
}

export function exercise_23() {
  /* 
   
    Exercise 23
    
    Create an object settings with properties theme and layout. 
    Use Object.seal to prevent adding or removing properties but allow modifying existing properties. 
    Change the value of theme, attempt to add a new property version, 
    and delete layout. Show which operations succeed and which fail.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const settings = {
    theme: "dark",
    layout: "grid",
  };

  Object.seal(settings);

  settings.theme = "light"; // Succeeds
  settings.version = "1.0"; // Fails to add
  delete settings.layout; // Fails to delete

  console.log(settings);
  // { theme: 'light', layout: 'grid' }

  // Enter your code in the empty lines ABOVE
}

export function exercise_24() {
  /* 
   
    Exercise 24
    
    Create an object employee with properties id and salary. Make salary non-enumerable. 
    Use a for...in loop to list the properties of employee. 
    Show that salary does not appear in the loop but can still be accessed directly.
  
  */
  // CODE IN THE OPEN LINES BELOW
  const employee = {};

  Object.defineProperty(employee, "id", {
    value: 1,
    enumerable: true,
  });

  Object.defineProperty(employee, "salary", {
    value: 50000,
    enumerable: false,
  });

  for (let key in employee) {
    console.log(key); // Outputs: id
  }

  console.log(employee.salary); // 50000

  // Enter your code in the empty lines ABOVE
}

export function exercise_25() {
  /* 
   
    Exercise 25
    
    Discuss methods to protect object properties in JavaScript, such as making them private using closures 
    or symbols, and controlling access using getters and setters. 
    Provide an example where an object's property is protected from external modification.
  
  */
  // CODE IN THE OPEN LINES BELOW
  function createSecretHolder(secret) {
    let _secret = secret;

    return {
      getSecret: function () {
        return _secret;
      },
      setSecret: function (newSecret) {
        _secret = newSecret;
      },
    };
  }

  const holder = createSecretHolder("mySecret");
  console.log(holder.getSecret()); // 'mySecret'
  holder.setSecret("newSecret");
  console.log(holder.getSecret()); // 'newSecret'
  // _secret is inaccessible from outside

  // Enter your code in the empty lines ABOVE
  /*
    To protect properties, you can use closures to keep variables private, 
    use symbols for unique keys, or define getters and setters to control access.

    In this example, _secret is protected within the closure and cannot 
    be modified directly from outside the object.
  */
}
