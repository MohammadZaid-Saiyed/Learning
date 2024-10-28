// Program to add first n natural numbers
let sum = 0;
let n = 10;
for (let i = 0; i < n; i++) {
  sum += i + 1;
}
console.log("Sum of first " + n + " natural numbers is " + sum);
// console.log(i) // it won't print the value of i because of block scope

let obj = {
  zaid: 90,
  shubh: 45,
  shivika: 56,
};

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

// For of loop
for (let b of "kaif") {
  console.log(b);
}
