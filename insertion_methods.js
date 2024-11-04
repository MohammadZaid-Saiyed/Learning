let a = document.getElementsByTagName("div")[0]; // selecting element

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';   // inserting text in it

let div = document.createElement("div"); // creating div & inserting text in it
div.innerHTML = "<h1>Hello World!</h1>";
// a.append(div);   // append the end of the node
// a.prepend(div); // insert at the beginning of the code
// a.before(div); // insert before the node
// a.after(div); // insert after the node
// a.replaceWith(div); // replaces node with the given node
