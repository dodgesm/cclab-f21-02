let x = 0;
let red = 0;

function change(){
// let x = "0";
red += 10;
let b = document.getElementById("box");
// console.log(b);
b.innerHTML = "Wow"
// b.style.width = "200px";
// b.style.height = "50px";
b.style.left = x + "px";
b.style.backgroundColor = "rgb("+ red +",255,0)";
}

function addDiv(){
  let elt = document.createElement("div");
  elt.style.backgroundColor = "cyan";
  elt.style.width = "50px";
  elt.style.height = "40px";
  let body = document.body;
  body.appendChild(elt);

  let box = document.getElementById('box');
  box.appendChild(elt);
}
