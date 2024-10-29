let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];
let num3 = [11, 12, 13, 14, 15];

console.log(num1.length);
//delete num1[0];
console.log(num1.length); // even after deleting the element array.length will be same bcz it will consider as empty space

let newArray = num1.concat(num2, num3);
console.log(newArray);

// Sort method
let compare = (a, b) => {
  return a - b; // for sorting in decending order ( b-a )
};
let num4 = [225, 12, 35, 44, 21, 552];
num4.sort(compare);
console.log(num4);
num4.reverse(); // it reverse the entire array
console.log(num4);

// Splice and Slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025); // 2 = index , 4 = to delete the elemnts , & after = to add between
console.log(num);
console.log(deletedValues);

let newNum = num.slice(3, 5); // 5th index will not count
console.log(newNum);
