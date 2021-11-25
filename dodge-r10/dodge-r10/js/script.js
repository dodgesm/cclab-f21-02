// sliders from cclab-html-ui-01-slider by MOQN
// buttons from cclab-html-ui-buttons by MOQN
// flower code from CCLab-r03-flowers by dodgesm

let sliderR, sliderG, sliderB;
let circleR = 100;
let circleG = 100;
let circleB = 100;



function setup() {
  createCanvas(1000,450);
  background (0);
  sliderR = document.getElementById('slider-r')
  sliderG = document.getElementById("slider-g");
  sliderB = document.getElementById("slider-b");
  frameRate(70);
}

function draw() {
  // flower petals
  translate(width / 2, height / 2);
  rotate(radians(frameCount));
  push();
  translate(width / 8, height / 8);
  let r = sliderR.value;
  let g = sliderG.value;
  let b = sliderB.value;
  let s = radians(frameCount * 5);
  rotate(s);
  stroke("gold");
  fill(r,g,b);
  ellipse(40, 40, 30, 30);
  pop();
  // center of flower
  push();
  strokeWeight(0.2);
  stroke("gold");
  fill(circleR, circleG, circleB);
  rect(10, 10, 50, 50);
  pop();
}

function changeColor() {
  circleR = random(255);
  circleG = random(255);
  circleB = random(255);
}
