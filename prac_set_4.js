// Problem 1
let str = "Zaid'";
console.log(str.length);

// Problem 2
const sentence = "My name is mohmmadZaid";
const word = "name";
console.log(sentence.includes(word));

// Problem 3
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// Problem 4
let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);

// Problem 5
let friend = "Deepika";
friend[3] = "R";
console.log(friend); // friend will not changed, because string is immutable
console.log(friend.replace("p", "R")); // changing string's copy using string methods
