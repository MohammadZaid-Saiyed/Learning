let marks = {
  zaid: 97,
  kaif: 80,
  faiz: 67,
};

// Problem 1
for (i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The Marks of " +
      Object.keys(marks)[i] +
      " Are " +
      marks[Object.keys(marks)[i]]
  );
}

// Problem 2
for (let key in marks) {
  console.log("The Marks of " + key + " Are " + marks[key]);
}

// Problem 3
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(mean(4, 5, 6, 7));
