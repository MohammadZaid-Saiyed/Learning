let x = function (event) {
  console.log(event.target); // it will print where event comes from
  console.log(event.type, event.clientX, event.clientY); // event type, clientX & clientY for coordinets
  // alert("Hello World1!")
};

btn.addEventListener("click", x);

let y = function (event) {
  console.log(event);
  alert("Hello World2!");
};

btn.addEventListener("click", y);

// let a = prompt("What is your favorite number?");

// if (a == "2") {
//   btn.removeEventListener('click', x)
// }
