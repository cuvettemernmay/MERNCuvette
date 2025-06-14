// Create an object

let person = {
  name: "John",
  age: 20,
  city: "New York"
};

console.log(person);


// Accessing properties of an object
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person["name"]);


// Modify properties of an object
person.age = 21;
console.log(person.age);


// Add new properties to an object
person.gender = "Male";
console.log(person);

// Delete properties of an object
delete person.gender;
console.log(person);


// Check if a property exists in an object
// console.log(person.gender);

// Check if Property Exists
console.log("name" in person);


// Looping in Objects (for...in)
for (let key in person) {
  console.log(key + " " + person[key]);
}

// Object inside object
let person2 = {
  name: "Shubham",
  age: 28,
  city: "Greater Noida",
  address: {
    street: "123 Main St",
    city: "Greater Noida",
    state: "UP",
    zip: {
      pincode: "201301",
      country: "India"
    }
  },
  hobbies: ["reading", "coding", "traveling"]
}

console.log(person2.address.state);
console.log(person2.address.zip.pincode);
console.log(person2.hobbies[0]);

// Array of Objects
let students = [
  {
    name: "John",
    age: 20,
    city: "New York"
  },
  {
    name: "Jane",
    age: 21,
    city: "Los Angeles"
  },
  {
    name: "Jim",
    age: 22,
    city: "Chicago"
  }
]

console.log(students[1].name);

// Functions inside Object (Methods)
let car = {
  brand: "Ford",
  model: "Mustang",
  year: 2020,
  start: function() {
    console.log("Engine started");
  },
  stop: function() {
    console.log("Engine stopped");
  }
}

car.start()
car.stop()


// Array of Objects
let cars = [
  {
    brand: "Ford",
    model: "Mustang",
    year: 2020
  },
  {
    brand: "Toyota",
    model: "Corolla",
    year: 2021
  },
  {
    brand: "Chevrolet",
    model: "Camaro",
  }
]

cars.forEach(({ brand, model, year = 1996}) => {
  document.write(`${brand} ${model} ${year}`);
})

cars.forEach(car => {
  const year = car.year || 1996;
  document.write(`${car.brand} ${car.model} ${year}`);
})

// Add Method to an Object
let person3 = {
  name: "Abhijit",
  age: 25,
  city: "New York",
  greet: function() {
    console.log(`The name of the person is ${this.name} and the age is ${this.age}`);
  }
}

person3.greet();

// console.log(this); // window object


let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[10]);

const student = {
  name: "John",
  age: 20,
  city: "New York",
  name: "Abhijit",
}

// Object Destructuring
console.log(student.name);
console.log(student.age);
console.log(student.city);

// Object Destructuring
const { name, age, city } = student;
console.log(name, age, city);

// Object Destructuring with Aliases
const { name: firstName, age: studentAge, city: studentCity } = student;
// console.log(firstName, studentAge, studentCity);


const obj1 = { a: 1}
const obj2 = { b: 2}
const obj3 = { c: 3}

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

const fruitss = ["apple", "banana", "cherry"]
const newFruits = [...fruitss]
const mergedFruits = [...fruitss, ...newFruits]
console.log(newFruits);


// Conversion Object into JSON

let person4 = {
  name: "John",
  age: 20,
  city: "New York"
}


let jsonString = JSON.stringify(person4);
console.log(jsonString);

let parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);


let person1 = {
  name: "John",
  age: 20,
  city: "New York"
}

let car1 = {
  brand: "Ford",
  model: "Mustang",
  year: 2020
}


let newObject = {...person1, ...car1}
console.log(newObject);



