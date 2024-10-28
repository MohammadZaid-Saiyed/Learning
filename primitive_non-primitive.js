/*      primitive datatypes   ( NN SS BB U ) = short technique
 1. Number
 2. String 
 3. Boolean 
 4. BigInt 
 5. Symbol
 6. Null
 7. Undefined
 
       Non- primitive datatypes   
1. Objects 
*/

let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Zaid";
let f = Symbol("I am a nice symbol");
let g;
console.log(a, b, c, d, e, f, g);
console.log(typeof c);

const item = {
  Zaid: true,
  Shubh: false,
  Lovish: 67,
  Rohan: undefined,
};
console.log(item["Zaid"]);
