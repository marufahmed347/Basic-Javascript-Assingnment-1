// Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

/*

function reverseString(str) {
    return ...;
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"

*/

// Answer

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // output "olleh"
console.log(reverseString("world")); // output "dlrow"
