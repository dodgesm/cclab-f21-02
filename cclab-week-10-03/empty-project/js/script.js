console.log("Loaded!");
// can just copy and paste code from p5.js

let sliderR, sliderG, sliderB;



function setup (){
  createCanvas (400, 500);
  sliderR = document.getElementById('slider-r');
  sliderG = document.getElementById('slider-g');
  sliderB = document.getElementById('slider-b');
}

function draw ()  {
  background (r,b,g);
  let r =sliderR.value;
  let g =sliderB.value;
  let b = sliderG.value;

}

// p5js.org go to download go to single files then use p5.js (better method than p5min.s bc has white space to read and better error message)
// CDN (content delivery network), copy url and use for script for link before type (faster but the other control the version of p5)




// for (let i = 0; i <10; i++) {
// elt = document.createElement("div");
// // createElement abov () is what element you create
// // attach element to something like body through appendChild
// // javascript is camalCase
// elt.style.backgroundColor = "yellow";
// elt.style.width = "100px"
// elt.style.height = "80px"
// elt.style.margin = "10px"
//
// document.body.appendChild(elt);
// }


// create Element
// let elt = document.createElement("button");
// // properties want to add
// elt.style.backgroundColor = "yellow";
// elt.style.width = "100px"
// elt.style.height = "80px"
// elt.style.margin = "10px"
// // interactive part (just movement like remove on, function that will be triggered)
// // for function if you make blue is just calling instead just put the name without the parens
// // elt.addEventListener("click", change);
// // another way is to put function directly without a name so funciton (){} an anyonomous function or call back
// elt.addEventListener("click", function(){
//   // if you want multiple lines then break this way
//   // let r = random(); can do this way
// // add floor to math for rounding down
//   let r = Math.floor(Math.random () * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//     // document.body.style.backgroundColor = "pink";
//     document.body.style.backgroundColor = "rgb(" + r+ "," +g+"," +b+")";
// })
// // attach to something
// document.body.appendChild(elt);

// function change (){
//   document.body.style.backgroundColor = "pink";
// }

// go through empty project to see results of code
