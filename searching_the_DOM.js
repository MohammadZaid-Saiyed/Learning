let ctitle = document.getElementById("firstcardtitle"); // Getting Element using id
ctitle.style.color = "blue";

let ctitles = document.querySelectorAll(".card-title"); // Selecting all query from Card-title Class
ctitles[0].style.color = "blue";
ctitles[1].style.color = "red"; // changing the color of 2nd Element to red
ctitles[2].style.color = "green";
console.log(ctitles);

document.querySelector(".this").style.color = "black"; // Query In One line
document.querySelector(".this").style.background = "red";

console.log(document.getElementsByTagName("a")); // Getting element Using Tag name
console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByName("search")); // Getting element Using Name
