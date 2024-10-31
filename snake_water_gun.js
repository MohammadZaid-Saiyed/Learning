let words = ["snake", "water", "gun"];

let random = words[Math.floor(Math.random() * words.length)];
let input;
let points = 0;
let chances = 0;
while (true) {
  input = prompt("enter a word");
  if (input == random) {
    console.log("draw");
    chances++;
  } else if (input == "snake" && random == "water") {
    console.log("you win");
    points++;
    chances++;
  } else if (input == "water" && random == "snake") {
    console.log("oops there is a snake try agan");
    chances++;
  } else if (input == "water" && random == "gun") {
    console.log("you win");
    points++;
    chances++;
  } else if (input == "snake" && random == "gun") {
    console.log("oops lose! there is gun  try again");
    chances++;
  } else if (input == "gun" && random == "water") {
    console.log("oops lose! there is water try again");
    chances++;
  } else if (input == "gun" && random == "snake") {
    console.log("you win");
    points++;
    chances++;
  } else {
    console.log("wrong input");
    chances++;
  }

  if (chances == 5) {
    break;
  }
}
alert("your points are " + points);
alert("chances used in game " + chances);
