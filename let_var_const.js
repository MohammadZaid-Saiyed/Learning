let d = "Zaid";
d = 4;
console.log(d);

const author = "Zaid";
//author = 5 // Throws an error because constant cannot be changed
let c = null;
let e = undefined; // if you're asssigning undefined it will also consider undefined
{
  var a = 33;
  let b = "this";
  console.log(b);
}
console.log(a);
//console.log(b); // throws an error because of let's block scope
