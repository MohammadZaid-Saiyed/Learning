let num = [1, 3, 5, 7, 9];
let b = num.toString(); // b is now String
console.log(b, typeof b);
let c = num.join(" And "); // And will be added between array elements
console.log(c, typeof c);
let d = num.pop(); // pop returns the popped element
console.log(d);
let e = num.push(35); // push returns the new array
console.log(e);
let f = num.shift(); // removes the elements from start of the array
console.log(f);
console.log(num, num.length);
let g = num.unshift(45); // adding the element from the start of the array & also returns the length of an array
console.log(num);
console.log(g);
