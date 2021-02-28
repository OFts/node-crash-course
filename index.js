// https://www.youtube.com/watch?v=fBNz5xF-Kx4
console.log(__dirname, __filename);

// console.log("Hello from Node.js...");

const Person = require('./person'); // Esta sintaxis se llama common js
// const person = require('./person');
// console.log(person);

const person1 = new Person('Oscar', 24);
person1.greeting();