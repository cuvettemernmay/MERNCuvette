// // Operators in JavaScript

// import { add } from "./addModule.js";

// // 1. Arithmetic Operators
// let a = 10;
// let b = 5;
// // console.log(a + b)
// // console.log(a - b)
// // console.log(a * b)
// // console.log(a / b)
// // console.log(a % b)
// // console.log(a ** b)
// // console.log(a++) // 11
// // console.log(++a) // 12
// // console.log(--a) // 11
// // console.log(a--) // 11

// console.log(add(10, 5))
// // 2. Assignment Operators

// let abc = 12; // Assign
// abc += 1; // Add and Assign abc = abc + 1
// abc -= 4; // Subtract and Assign abc = abc - 4
// abc *= 1; // Multiply and Assign abc = abc * 1
// abc /= 1; // Divide and Assign abc = abc / 1
// abc %= 1; // Divide and Assign abc = abc % 1


// // 3. Comparison Operators

// // console.log(5 == "5")
// // console.log(5 === "5")
// // console.log(5 != "5")
// // console.log(5 !== "5")
// // console.log(50 > 10)
// // console.log(5 < 10)
// // console.log(10 <= 10)
// // console.log(16 >= 10)

// // 3. Logical Operators

// // &&
// // ||
// // !

// console.log(5 > 3 && 2 < 1) // true && false => false
// console.log(5 > 3 || 2 < 1) // true || false => true
// console.log(!(4 < 2)) // opposite of the actual bool value

// console.log("asdfg" + " " + "dasasgh")

// console.log(typeof a)

// // Nullish Coalescing ??

// let name = "Yuvraj"
// // console.log(name)
// let finalName = name ?? "Anonymous"
// console.log(finalName)

// // "" , 0, false
// // "adsfagsf", 1, true

// let isIndian = true
// isIndian && console.log("hurray, I am indian") 
// console.log(isIndian ? "hi" : "bye")

// // Returns the right hand value only if the left value is null or undefined

// // Let and const keywords
// // Arrow Function () => {}
// // template Literals /String Interpolation/ Back ticks

// let firstName = "John"
// console.log(`safsdfsd  asfasfasddf ${firstName}`)


// // Default Paramters

// function hey( name = "raju", age = 23) {
//   return `Hello, my name is ${name} and my age is ${age}`
// }

// console.log(hey("Abhijit", 25))


// Bitwise Operators
// Smallest unit of data in computers - 0 or 1.
// Binary Number System (base 2) - 2^0, 2^1, 2^2.....

// 3 => 11

// 13 => 1101


let a = 5; // 0101
let b = 3; // 0011

// 1. Bitwise AND(&)
let result = a & b  // 0101 & 0011 => 1(true) & 1(true) = true (1) => 0001 => 1
console.log(result)

// 1. Bitwise OR(|)
let result2 = a | b // 0101 | 0011 => 1(true) & 1(true) = true (1) => 0111 => 7
console.log(result2) 


// 1. Bitwise XOR(^)
let result3 = a ^ b // 0101 | 0011 => 1(true) & 1(true) = true (1) => 0110 => 6
console.log(result3) 


