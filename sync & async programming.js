// Syncronous programming : this action are initiate & finish one-by-one
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favorite color?");
console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronous programming : this actions we initiate now & finish later
console.log("Start");
setTimeout(function () {
  console.log("Hey I am good");
}, 3000);
console.log("End");
