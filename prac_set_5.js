// Chapter 5 Practice Set
// Practice Problem 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 83];
// let a = 42;
// arr.push(a);
// console.log(arr);

// Practice Problem 2
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]
// let b;
// do {
//   b = prompt("Enter a number")   // prompt will run in only browser
//   b = Number.parseInt(b)
//   arr1.push(b)
// } while (b != 0);
// console.log(arr1)

// Practice Problem 3
// let arr2 = [1, 2, 30, 4, 50, 6, 7, 83, 670];
// let n = arr2.filter((x) => {
//   return x % 10 == 0;
// });
// console.log(n);

// Practice Problem 4
// let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670];
// let n2 = arr3.map((x) => {
//   return x * x;
// });
// console.log(n2);

// Practice Problem 5
let arr4 = [1, 2, 3, 4, 5];
let n3 = arr4.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n3);
