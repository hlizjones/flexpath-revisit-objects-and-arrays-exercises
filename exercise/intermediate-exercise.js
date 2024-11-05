// Exercise 1: Create an object using Object.create with a custom prototype
const animal = { type: 'Mammal' };
const dog = Object.create(animal);
dog.name = 'Buddy';
console.log(dog.type); // Inherited property

// Exercise 2: Use Object.defineProperty to add a property that cannot be modified or deleted
const user = {};
Object.defineProperty(user, 'username', {
    value: 'john_doe',
    writable: false,
    configurable: false
});
console.log(user.username); // john_doe
user.username = 'jane_doe'; // No effect
delete user.username; // No effect

// Exercise 3: Implement a method on an object using `this` to access its properties
const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.getFullName());

// Exercise 4: Create a shallow copy of an object using Object.assign
const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);
shallowCopy.b.c = 42;
console.log(original.b.c); // 42

// Exercise 5: Create a deep copy function for an object using recursion
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    const copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}
const deepCopiedObject = deepCopy(original);
deepCopiedObject.b.c = 100;
console.log(original.b.c); // 42

// Exercise 6: Demonstrate the use of Object.freeze
const frozenObj = Object.freeze({ key: 'value' });
frozenObj.key = 'newValue'; // No effect
console.log(frozenObj.key); // value

// Exercise 7: Use Object.seal on an object and try adding a new property
const sealedObj = Object.seal({ name: 'Alice' });
sealedObj.name = 'Bob'; // Can modify
sealedObj.age = 30; // Cannot add new property
console.log(sealedObj);

// Exercise 8: Enumerate the properties of an object using for...in and Object.keys
const book = { title: '1984', author: 'George Orwell' };
for (let key in book) {
    console.log(key, book[key]);
}
console.log(Object.keys(book));

// Exercise 9: Use Object.getOwnPropertyNames to list all properties
const allProps = Object.getOwnPropertyNames(book);
console.log(allProps);

// Exercise 10: Create an array using Array.from from a string
const chars = Array.from('JavaScript');
console.log(chars);

// Exercise 11: Check if a variable is an array using Array.isArray
const numbers = [1, 2, 3];
console.log(Array.isArray(numbers)); // true

// Exercise 12: Use splice to remove an element from the middle of an array
const fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'grape'); // Replaces 'banana' with 'grape'
console.log(fruits);

// Exercise 13: Use slice to create a new array
const slicedFruits = fruits.slice(0, 2);
console.log(slicedFruits);

// Exercise 14: Combine two arrays using concat and spread operator
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
const combinedSpread = [...arr1, ...arr2];
console.log(combined, combinedSpread);

// Exercise 15: Use map to transform an array
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// Exercise 16: Filter an array to include only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Exercise 17: Use reduce to calculate the sum
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Exercise 18: Implement a queue using an array
const queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift()); // 1
console.log(queue);

// Exercise 19: Implement a stack using an array
const stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack);

// Exercise 20: Use find to locate an object in an array
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
const user = users.find(user => user.id === 2);
console.log(user);

// Exercise 21: Use some and every to check conditions
console.log(numbers.some(num => num > 2)); // true
console.log(numbers.every(num => num > 0)); // true

// Exercise 22: Use join to convert an array into a string
console.log(fruits.join(', '));

// Exercise 23: Use split to convert a string into an array
const sentence = 'hello,world';
const words = sentence.split(',');
console.log(words);

// Exercise 24: Clone an array using the spread operator
const clonedArray = [...numbers];
clonedArray[0] = 99;
console.log(numbers, clonedArray);

// Exercise 25: Use Array.from to convert a NodeList to an array
const nodeList = document.querySelectorAll('div');
const nodeArray = Array.from(nodeList);
nodeArray.forEach(node => console.log(node));

// Exercise 26: Merge two objects handling nested objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2, nested: { ...obj1.nested, ...obj2.nested } };
}
const merged = mergeObjects({ a: 1, nested: { x: 1 } }, { b: 2, nested: { y: 2 } });
console.log(merged);

// Exercise 27: Add properties to an object dynamically
const dynamicObj = {};
dynamicObj['newProp'] = 'value';
console.log(dynamicObj);

// Exercise 28: Use the in operator to check for a property
console.log('newProp' in dynamicObj); // true

// Exercise 29: Use Object.entries to loop through key-value pairs
Object.entries(book).forEach(([key, value]) => {
    console.log(key, value);
});

// Exercise 30: Check if two arrays are deeply equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, index) => val === arr2[index]);
}
console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
