let a = document.getElementsByClassName("container")[0];
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "Hello World!"; // when user click to a it will print Hello World!
};

// onmouseenter = when mouse enters in a container it will run
