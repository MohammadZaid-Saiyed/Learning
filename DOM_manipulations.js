console.log(document.body.firstChild); // it gives the first child of body
console.log(document.body.lastChild); // it gives the last child of body
// but it's all are Nodes & on Nodes you Operate
let arr = Array.from(document.body.childNodes); // to Operate convert Node to Array
console.log(arr);

a = document.body.firstChild; // Use this for Not repeating Same Thing
console.log(a.parentNode); //  it means First child's Parent means Body. The parentNode method will always return the parent
console.log(a.parentElement); // parentElement will return null if the parent happens to be something other than an element.
console.log(a.firstChild.nextSibling); // it gives a's first child's next sibling

let b = document.body;
console.log("First child of b is: ", b.firstChild); // it gives first stuff after the body
console.log("First Element child of b is: ", b.firstElementChild); // it gives first tag after the body

let t = document.body.firstElementChild.firstElementChild;
console.log(t); // it executes the upper statement
console.log(t.rows); // it gives the rows of t
console.log(t.caption); // it gives caption of t
console.log(t.tHead.firstElementChild); // it gives head's first child
console.log(t.tFoot); // it gives footer content of the table
console.log(t.tBodies); // it contains the body, or primary content of an HTML table
console.log(t.rows[1].rowIndex); // it represents the position of a row within the table
