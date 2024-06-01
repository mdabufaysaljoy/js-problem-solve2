// todo: no. 1

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77

// todo: no. 2

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false

// todo: no. 3

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30

// todo: no. 4

function findSmallestNum(arr) {
  return Math.min(...arr);
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// todo: no. 5

function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return str.split('').filter((char) => vowels.includes(char)).length;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3

// todo: no. 6

function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"

// todo: no. 7

function isArrayEmpty(arr) {
  return arr.length === 0;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false

// todo: no. 8

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040


// todo: no. 9

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

// todo: no. 10

function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"

// todo: no. 11

function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5

// todo: no. 12

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// todo: no. 13

function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"

// todo: no. 14

function getFirstCharacter(str) {
  return str.charAt(0);
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"

// todo: no. 15

function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
