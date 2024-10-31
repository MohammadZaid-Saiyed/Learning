alert("Enter the value of a!"); // used to invoke a mini window msg

let a = prompt("Enter a here", "578"); // used to take a user input as a String
a = Number.parseInt(a); // Using for converting String to number
alert("You entered a of type " + typeof a);

let write = confirm("Do you want to write it to the page"); // shows a msg for confirmation (ok/cancel) = (true/false)
if (write) {
  document.write(a); // to write in a page
} else {
  document.write("Please allow me to write");
}
