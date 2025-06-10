// JavaScript Datatypes

// Primitive Datatypes:
// 1. Number (1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
// 2. String (' or " or `)
// 3. Boolean (true or false)
// 4. Null (null)
// 5. Undefined (undefined)
// 6. Symbol (symbol)
// 7. BigInt (bigint)

// Non-Primitive Datatypes:
// 1. Object {name: 'John', age: 20}
// 2. Array [1, 2, 3, 4, 5, "John", true, [1, 2, 3, 4, 5]]
// 3. Function (ordered list of statements to perform a task)


// Variables - name given to a memory location to store a data
// 1. var
// 2. let
// 3. const

// var is a keyword.

// Heap Memory - used for non-primitive datatypes
// Stack Memory - used for primitive datatypes

var name = "John";
// let age = 20;
const isMarried = false;

// console.log(name, age, isMarried);

// 1. var, let and const are keywords.

let firstName = "John";
// let age = 20;
let isPassed = true;

const myDetail = {
  name: "Raman",
  age: 20,
  isPassed: true,
};


const hobbies = ["Cricket", "Football", "Reading"];

// Operators
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Unary Operators
// 6. Ternary Operators

// Arithmetic Operators
// +, -, *, /, %, ++, --

// Assignment Operators
// =, +=, -=, *=, /=, %=


let a = 10;
let b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// Comparison Operators
// ==, !=, ===, !==, >, <, >=, <=

let c = 10;
let d = "10";
// console.log(typeof c);
// console.log(typeof d);

// console.log(c == d); // 10 == "10" -> true - equal value
// console.log(c === d); // 10 === "10" -> false - equal value and equal type
// console.log(c != d); // 10 != "10" -> false - not equal value
// console.log(c !== d); // 10 !== "10" -> true - not equal value and not equal type

// Logical Operators
// &&, ||, !

let e = true;
let f = false;

// console.log(e && f); // true && false -> false
// console.log(e || f); // true || false -> true
// console.log(!e); // !true -> false
// console.log(!f); // !false -> true


// Ternary Operators
// condition ? true : false

let g = 10;
let h = 20;

// console.log(g > h ? "g is greater than h" : "h is greater than g");


// if (g > h) {
//   console.log("g is greater than h");
// } else {
//   console.log("h is greater than g");
// }


// Functions

function add(a, b) {
  return a + b;
}

// console.log(add(10, 20));


// console.log(myName);
var myName = "John";

// Execution Context
// 1. Global Execution Context
// 2. Function Execution Context

// Scope //
// 1. Global Scope
// 2. Local Scope


// var aa = 10;
// var bb = 20;
// var sum = aa + bb;
// console.log(sum);


var variable1 = 10;
var variable2 = 20;

function example() {
  console.log(variable1);
  var variable1 = 30;
}

example;
console.log(example);

















