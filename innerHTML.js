let x = document.getElementsByTagName("span")[0];
console.log(x); // selecting first element
let y = document.getElementsByTagName("span")[0];
console.dir(y); // it will show as Object & its Properties
console.log(document.body.firstChild.nodeName); // it will show the firstchild node's name
console.log(document.body.firstElementChild.nodeName);

first.innerHTML = "<i>hey I am italic</i>"; // it will give innerContent of an given Id
first.outerHTML = "<div>hey</div>"; // it will also give outerContent of an given Id
document.body.firstChild.data; // to get data use .data or .nodeValue
console.log(document.body.textContent); // to get all text Content of an Page
first.hidden = false; // to unhide Content
