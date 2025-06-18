// const document = index.html
// const document = {
//   // key: "value"
//   html: {
//     head: {
//       meta: {

//       }
//     },
//     body: {
//       h1: {

//       }
//     }
//   }
// }

// let element = document.getElementById("demo")
// console.log(element)


// function clickMe() {
//     alert("You have clicked me")
//   }

// A. Accessing the DOM Elements

// 1. getElementById()

function clickMe() {
  alert("I have scrolled the page")
}

// document.getElementById("main").style.backgroundColor = "green"
document.addEventListener("keydown", clickMe)

// 2. getElementsByClassName()

// const elements = document.getElementsByClassName("text")
// console.log(elements)


// 3. getElementsByTagName()
// const elements = document.getElementsByTagName("p")
// console.log(elements)


// 4. querySelector()

// document.querySelector(".text").style.color = "red"
// console.log(element)

// 5. querySelectorAll()
// let element = document.querySelectorAll(".text")
// console.log(element)



// B. Changing the Content and Attributes

// 1. text and html content => textContext, innertext and innerHTML

// let para = document.querySelector(".text")
// // para.textContent = "I am your favourite Paragrah."
// let containerBox = document.querySelector("#main").textContent
// console.log(containerBox)

let link = document.querySelector("a")
link.setAttribute("href", "https://www.google.com/")
link.setAttribute("id", "anchorId")


// creation of Element

let newHeading2 = document.createElement("h2")
newHeading2.textContent = "I am a New Heading 2"
newHeading2.style.backgroundColor = "teal"
newHeading2.style.textDecoration = "underline"
newHeading2.classList.add("heading2")
// newHeading2.classList.remove("heading2")
document.body.appendChild(newHeading2)

// let myContainer = document.querySelector(".container")
// myContainer.remove()

