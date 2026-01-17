// importing people from people.js
const xyz = require('./people');
// run command: node module in terminal and you'll see people array logged

console.log(xyz) // returns empty object
// console.log(people); // throws an error

/* 
to acess people in this file, add : 
' module.exports = people;' in people.js
*/
console.log(xyz.people, xyz.ages);

/* 
Better way to import is to destructure
eg: const {people, ages} = require('./people');
console.log(people, ages);
*/