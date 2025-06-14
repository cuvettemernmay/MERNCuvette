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
  // var variable1 = 30;
  // console.log(variable1);
}

example()
// console.log(variable1);



// Difference between var, let and const
// these reserved keywords are used to declare variables

// 1. Scope - Global, Function, Block

function testScope() {
  if (true) {
    var a1 = 10;
    let b2 = 20;
    const c3 = 30;
  }
  // console.log(b2);
  // console.log(c3);
}
// console.log(a1);

// testScope();


// 1. Redeclaration

// var x = 10;
// var x = 20;

// let y = 10;
// let y = 20;

// const z = 10;
// const z = 20;

// 3. Reassignment

var xyz = 10;
xyz = 20;
// console.log(xyz);

let abc = 10;
abc = 20;
// console.log(abc);

const pqr = 10;
// console.log(pqr);

// 4. Hoisting = > betweeen declaration and initialization - Temporal Dead Zone

// console.log(x);
const x = 10;

// 5. const with objects and arrays (mutation allowed)

const person = {
  name: "John",
  age: 20,
};

// person = {};

console.log(person);
person.name = "Jane";
person.age = "342"
person.profession = "Developer";
console.log(person);


// Control Statements
// 1. if
// 2. else if
// 3. else

// let age = 18;

// if (age >= 18) {
//   console.log("You are an adult");
// }

let isRaining = true;

if (isRaining) {
  console.log("It is raining");
} else {
  console.log("It is not raining");
}

let score = 80;
let isIndian = true;
if (score >= 90 && isIndian) {
  console.log("You are a topper");
} else if (score >= 80) {
  console.log("You are a good student");
} else {
  console.log("You are a average student");
}



























