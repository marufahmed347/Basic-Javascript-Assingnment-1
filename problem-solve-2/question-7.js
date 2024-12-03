// Write a function to check if an array is empty. The function should take a single argument, which is the array.

/*

function isArrayEmpty(arr) {
    return ...;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false

*/

// Answer

function isArrayEmpty(arr) {
    return arr.length === 0;
}

console.log(isArrayEmpty([])); // output true
console.log(isArrayEmpty([1, 2, 3])); // output false
