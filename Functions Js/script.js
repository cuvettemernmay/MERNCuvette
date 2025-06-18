// Functions

// Functions are reusable blocks of code that can be called with a name.
// They can have parameters and return values.

// 1. Function Declaration/Regular Function
// function greet(name, age = 20) {
//   console.log("Hello, " + name + "!");
//   console.log("You are " + age + " years old!");
//   return 12
// }

// const result = greet("John", 88);
// console.log(result);

// Function Expression// Anonymous Function
// const sayHi = function(name, age) {
//   console.log("Hello, " + name + "!");
//   console.log("You are " + age + " years old!");
//   return 12
// }

// const result2 = sayHi("John", 20);
// console.log(result2);


// Arrow Function
// let add = (a, b) => {
//   console.log(a + b);
//   return a + b
// }
// console.log(add(3, 4));

// const result3 = add(1, 2);
// console.log(result3);

// let x = "10" + 10;
// let y = "10" == 10;
// console.log(y);


// Spread Operator
// Rest Operator


// Closures
// function outer() {
//   function inner() {
//     console.log("Inner function!");
//     return "sdvasdere";
//   }
//   return inner;
// }

// const inner = outer()
// console.log(inner())


// Async Javascript

// 1. Callbacks
// 2. Promises
// 3. Async/Await


// Callbacks

function greet(callback){
  console.log(callback);
  console.log("Hello, world!");
  callback();
}

greet(function(){
  console.log("Hey, I am a callback function!");
});








