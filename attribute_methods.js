let first = document.getElementById("first");
let a = first.getAttribute("class"); // getting class attribute
console.log(a);
console.log(first.hasAttribute("class")); // checking the class attrinute
first.setAttribute("hidden", "true"); // using this you can set attribute using id
first.setAttribute("class", "true sachin");
first.removeAttribute("class"); // removing attribute
console.log(first.attributes); // to get all attributes
console.log(first.dataset); // creating your own Object using it
console.log(first.dataset.game); // our atribute's properties
console.log(first.dataset.player);
