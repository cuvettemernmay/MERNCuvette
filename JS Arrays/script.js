// Arrays are ordered list of data

let fruits = ["apple", "banana", "orange"];

// console.log(fruits);

// Array elements can be of different types

let mixedArray = ["apple", 1, true, null, undefined, { name: "John" }, [1, 2, 3]];

// console.log(mixedArray);



// 1. Declaration of an array
let myArray1 = []; 
let myArray2 = new Array(1, 2, 3, 4, 5);
let myArray3 = Array.from("abc");
// console.log(myArray1);
// console.log(myArray2);
// console.log(myArray3);


// Accessing and modifying elements of an array

// let vegetables = ["carrot", "potato", "onion", "tomato", "cucumber"];
// console.log(vegetables[2]);
// vegetables[2] = "lady finger";
// console.log(vegetables);

// console.log(vegetables.length);


// Methods of an array

// 1. push()
// vegetables.push("beans");
// console.log(vegetables);

// 2. pop()
// vegetables.pop();
// console.log(vegetables);

// 3. shift()
  // vegetables.shift();
  // console.log(vegetables);

// 4. unshift()
// vegetables.unshift("beans");
// console.log(vegetables); 

// 5. splice() means adding or removing elements from an array
// vegetables.splice(2, 1, "beans");  // replace 0 items at index 2
// console.log(vegetables);

// 6. slice() means slicing an array
// let newVegetables = vegetables.slice(1, 5);
// console.log(newVegetables);


// Loop through Arrays - for loop
let vegetables = ["carrot", "potato", "onion", "tomato", "cucumber"];
for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

// forEach
// Higher order function
// It takes a function as an argument and executes it for each element of the array
vegetables.forEach(function(vegetable, index) {
  console.log(index + " " + vegetable);
});


// map
// It returns a new array by applying the function to each element of the original array
let newVegetables = vegetables.map(function(vegetable) {
  return vegetable + " " + "recipe";
});
console.log(newVegetables);

console.log(vegetables.indexOf("potato"));
console.log(vegetables.includes("pumpkin"));


let healthyVegetables = ["broccoli", "spinach"];
let newVegetablesHealthy = vegetables.concat(healthyVegetables);
console.log(newVegetablesHealthy);


// let firstName = "Shubham"
// let lastName = "Shrivastava"

// let fullName = firstName + " " + lastName

// console.log(fullName);


// Reverse Array
let reversedVegetables = vegetables.reverse();
console.log(reversedVegetables);

// Sort Array
let sortedVegetables = vegetables.sort();
console.log(sortedVegetables);


// join
// It returns a string by joining all the elements of the array with a separator
let vegetablesString = vegetables.join(" ");
console.log(vegetablesString);


// filter
// It returns a new array by filtering the elements of the original array
let filteredVegetables = vegetables.filter(function(vegetable) {
  return vegetable.length > 6;
});
console.log(filteredVegetables);

// Declaration
// Assignment/Defining
// Function Invocation/Calling
// Higher Order Function
// Callback Function

function add(a, b) {
  return a + b; // 3
}

console.log(3);

























// Adding elements to an array
















