// Problem 1
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// Problem 2
// it will not return tbody bcz of autocorrection

// Problem 3
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

// Problem 4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});
// firstly convert object to array using array.from then put loop forEach on it & change bgcolor of it

// Problem 5
// (D) None of this
