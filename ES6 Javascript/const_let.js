/*
Things to remember:

1. var: Using "var", a variable can be redefined as well as reassigned. Variable defined using "var" can be accessable out of the scope.

2. let: Using "let", a variable can be reassigned but can not be redefined. Variable defined using "let" can not be accessable out of the scope.

3. const: Using "const", a variable can neither be redefined nor be reassigned. Variable defined using "const" can not be accessable out of the scope.
*/


// Test below examples one at a time for better understanding

// Using "var", a variable can be redefined as well as reassigned
var fName = "soumili";
var fName = "kunal";  // redefined allowed
fName = "soumili";     // reassigned allowed
console.log('name', fName);


// // Using "let", a variable can be reassigned but can not be redefined
// let fName = "soumili";
// let fName = "kunal";  // redefined not allowed
// fName = "soumili";     // reassigned allowed
// console.log('name', fName);


// //?? Using "const", a variable can neither be redefined nor be reassigned
// const fName = "soumili";
// const fName = "kunal";  // redefined not allowed
// fName = "soumili";     // reassigned not allowed
// console.log('name', fName);


// Block scoping

// Variable defined using "var" can be accessable out of the scope
var fullname = 'Soumili Chakraborty';
if(fullname) {
    var firstname = fullname.split(' ')[0];
    console.log(firstname);
}
console.log(firstname); // allowed


// // Variable defined using "let" can not be accessable out of the scope
// var fullname = 'Soumili Chakraborty';
// let firstname;
// if(fullname) {
//     firstname = fullname.split(' ')[0];
//     console.log(firstname);
// }
// console.log(firstname); // not allowed


// //?? Variable defined using "const" can not be accessable out of the scope
// const fullname = 'Soumili Chakraborty';
// const firstname;
// if(fullname) {
//     firstname = fullname.split(' ')[0];
//     console.log(firstname);
// }
// console.log(firstname); // not allowed