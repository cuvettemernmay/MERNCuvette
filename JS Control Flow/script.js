// Control Flow

// 1. Conditional Statements

// if(condition) {
//   // code to be executed if the condition is true
// } else if(condition) {
//   // code to be executed if the condition is true
// } else if(condition) {
//   // code to be executed if the condition is true
// } else {
//   // code to be executed if the condition is false
// }

// let score = 92;
// let isIndian = true;
// if(score >= 90) {
//   if (isIndian) {
//     console.log("Grade A but Indian");
//   } else {
//     console.log("Grade A but not Indian");
//   }
// } else if(score >= 80) {
//   console.log("Grade B");
// } else if(score >= 70) {
//     console.log("Grade C");
// } else {
//   console.log("Grade F");
// }

// Switch

// let score = 72;

// switch(true) {
//   case score >= 90:
//     console.log("Grade A");
//     break;
//   case score >= 80:
//     console.log("Grade B");
//     break;
//   case score >= 70:
//     console.log("Grade C");
//     break;
//   default:
//     console.log("Grade F");
// }


// let day = "Monday";

// switch(day) {
//   case "Monday":
//     console.log("Monday");
//     break;
//   case "Tuesday":
//     console.log("Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Wednesday");
//     break;
//   case "Thursday":
//     console.log("Thursday");
//     break;
//   case "Friday":
//     console.log("Friday");
//     alert("Today is Holiday");
//     break;
//   case "Saturday":
//     console.log("Saturday");
//     break;
//   case "Sunday":
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// Ternary Operator

// let age = 18;
// let result = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(result);


// if(age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a minor");
// }


// Nested Ternary Operator

// let marks = 75;
// let result = marks >= 90 ? "Grade A" : marks >= 80 ? "Grade B" : marks >= 70 ? "Grade C" : "Grade F";
// console.log(result);

// if(marks >= 90) {
//   console.log("Grade A");
// } else if(marks >= 80) {
//   console.log("Grade B");
// } else if(marks >= 70) {
//   console.log("Grade C");
// } else {
//   console.log("Grade F");
// }

// Loops

// for Loop
// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }


// while Loop
// let i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }


// do while Loop
// let j = 11;
// do {
//   console.log(j);
//   j++;
// } while(j < 10);


// for(let i = 1; i <=5; i++) {
//   if(i === 3) continue;
//   console.log(i);
// }


// Error Handling

// let a = 10;
// try {
//   console.log(a);
// } catch(shubham) {
//   console.log(shubham);
// } finally {
//   console.log("Finally block");
// }


// Array Destructuring

// const numbers = [1, 2, 3, 4, 5];
// let [x, b, ...vivek] = numbers; // accumulation
// console.log(x, b, vivek);
// const [p, q, r, s, t, u = 10] = numbers;
// console.log(p, q, r, s, t, u);


// console.log(numbers[4]);

// const [p, q, r, s, t, u = 10] = numbers;
// console.log(p, q, r, s, t, u);

// Object Destructuring

// const person = {
//   name: "John",
//   age: 20,
//   city: "New York",
//   gender: "Female"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// let {name, age, city} = person;
// console.log(name, age, city);

// let {name: n, age: a, city: c} = person; // alias
// console.log(n, a, c);

// const { gender = "Male" } = person;
// console.log(gender);

// Spread operator in Arrays

// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [6, 7, 8, 9, 10];
// const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //spread
// console.log(newNumbers);

// Spread operator in Objects

// const person1 = {
//   name: "John",
//   age: 20,
//   city: "New York"
// };

// const person2 = {
//   firstName: "Jane",
//   birthYear: 2000,
//   place: "Los Angeles"
// };

// const newPerson = {...person2, ...person1};
// console.log(newPerson);

// Rest operator in Arrays

// const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [a, b, ...rest] = numbers3;
// console.log(a, b, rest);

// function sum(...args) {
//   console.log(args);
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// NAN - Not a Number
//  String - "sdafadsfads#!$1`11534"


// const result2 = "4" / 1;
// console.log(result2);

// const result2 = "1234567890";
// console.log(typeof result);

// console.log("21312" - "afsergsdg");

// console.log(isNaN(result2));

// console.log(typeof NaN) // number
// console.log(isNaN("asdsaf"));


// const result3 = "abc" / 2
// console.log(result3);

// this.name = "Raman"
// console.log(this)

const person = {
  name: "Vellore",
  age: 28,
  currentObject(){
    this.currentObject = this;
  },
  city: "New York",
  greet: function(){
    console.log(this);
  },
}

// person.greet("Gopika");
person.currentObject()
console.log(person.currentObject);
// console.log(person.currentObject);

// this keyword is used to refer to the current object (Scope based)


console.log(Number("34")) // 34




