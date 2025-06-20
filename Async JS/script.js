// Synchronous JavaScript
// console.log("Start")
// console.log("End")


// Asynchronous JavaScript
// console.log("First")
// setTimeout(() => {
//   console.log("Second")
// }, 3000)
// console.log("Last")

// Callbacks

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data Recieved")
//   }, 5000)
// }

// fetchData((data) => {
//   console.log(data)
// })

// Promises

// ? A Promise is a JavaScript Object that represents the eventual result of an asynchronous operation.

// Promises gives you - 03 States
// 1. Pending - Initial State.
// 2. Fulfilled - Operation completed successfully.
// 3. Rejection - Operation Failed

// {
//   pending: true,
//   fulfilled: true,
//   rejected: true
// }


// const myPromise = new Promise((resolve, reject) => {
//   let success = false;
//   setTimeout(() => {
//     if(success) {
//       resolve("Promise fulfilled!")
//     } else {
//       reject("Promise rejected!")
//     }
//   }, 4000)
// })

// console.log(myPromise)

// myPromise.then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// })


// const getData = () => {
//   return new Promise((resolve, reject) => {
//     let success = true;
//   setTimeout(() => {
//     if(success) {
//       resolve("Promise fulfilled!")
//     } else {
//       reject("Promise rejected!")
//     }
//   }, 4000)
//   })
// }

// const asycFunc = async () => {
//   try {
//     const data = await getData() // wait until your promise is being resolved or rejected
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// asycFunc()


const userList = document.getElementById("userList")
console.log(userList)

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log(users)

    users.forEach((user) => {
      const li = document.createElement("li")
      li.textContent = `${user.name} ${user.email}`
      userList.appendChild(li)
    })
  } catch (error) {
    console.log("Error fetching users:", error)
  }
}

loadUsers()

