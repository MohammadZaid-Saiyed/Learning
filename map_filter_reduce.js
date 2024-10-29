// Array map method
let arr = [23, 34, 45];
let a = arr.map((value) => {
  console.log(value);
  return value + 1;
});
console.log(a); // returns a new array

// Array filter method
let arr2 = [12, 32, 6, 4, 17];
let b = arr2.filter((a) => {
  return a < 15;
});
console.log(b); // returns a new modified array

// Array reduce method
let arr3 = [3, 7, 6, 1];
let c = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(c); // returns a value
