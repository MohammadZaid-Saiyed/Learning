// Problem No 1
let age = 15;
age = Number.parseInt(age);
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20");
} else {
  console.log("Your age doesnt lies between 10 and 20");
}

// Problem No 2
let age1 = 13;
switch (age1) {
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  default:
    console.log("Your age is not special");
}

// Problem No 3

let num = 6;
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3");
} else {
  console.log("Your number is not divisible by 2 and 3");
}

// Problem No 4
let num1 = 13;
if (num1 % 2 == 0 || num1 % 3 == 0) {
  console.log("Your number is divisible by 2 or 3");
} else {
  console.log("Your number is not divisible by 2 or 3");
}

// Problem No 5
let age2 = 19;
let a = age2 > 18 ? "You can drive" : "You cannot drive";
console.log(a);
