const path = require('path');

// Basename
// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base); // Without .base shows the object

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));