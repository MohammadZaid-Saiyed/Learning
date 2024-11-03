let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1); // Not recommanded To use
console.log(id1.matches(".class")); // it gives false bcz class name,s class doesn't exists
console.log(id1.matches(".box")); // true
console.log(sp1.closest("#sp1")); // it finds the closest element
console.log(id1.contains(sp1)); // it will give true bcz id1 containg sp1
console.log(sp1.contains(sp1)); // true
console.log(sp1.contains(id1)); // flase bcz sp1 is not containg id1
