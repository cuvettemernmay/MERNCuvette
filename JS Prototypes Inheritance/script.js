// What is Prototypes?
// Every Javascript object have a hidden property called [[Prototype]].


// 1. Basic Prototype Chain

// const person = {
//   greet: function(){
//     console.log("Hello, world!");
//   }
// }

// const student = {
//   study: function(){
//     console.log("I am studying!");
//   }
// }

// student.prototype = person


// student.greet()


// 2. Constructor Functions and the Prototype

// Constructor Function
function User(name) {
  this.name = name;
}

// Prototype add a method to the constructor function
User.prototype.greet = function(){
  console.log(`Hello, world BY ${this.name}`);
}

const user1 = new User("John");
const user2 = new User("Jane");
console.log(user1);
console.log(user2);

user1.greet();
user2.greet();




// 3. Prototype Inheritance

function Animal(name){
  this.name = name;
}

Animal.prototype.eat = function(){
  console.log(`${this.name} is eating!`);
}

function Dog(name){
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

const labrador = new Dog("Buddy");
console.log(labrador);
labrador.eat();


