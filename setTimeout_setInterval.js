document.write("Hello");

// setInterval(function() {
//   alert("setinterval")   // it continues in set of time
// }, 3000)

let a = setTimeout(function () {
  alert("I am inside of settimeout"); // it will run after a set of time
}, 5000);
setTimeout(a, 1000); // another method

// let b = prompt("Do you want to run the settimout?")
// if ("n" == b) {
//   clearTimeout(a)   // to stop for future
// }
// console.log(a)
