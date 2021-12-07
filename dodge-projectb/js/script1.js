//background
let img;
//'ili 'ili (stone)
let ili;
let stone;
let l;
//pahu (drum)
let pahu;
let p;
// let b;
//ipu (gourd)
let ipu;
let g;
let e;
//uli uli
let uli;
let m;
let u;
//Dancers
let d;
let s;
let h;
let o;

function preload() {
  img = loadImage("assets/poster.PNG");
  ili = loadSound("assets/ili.mp3");
  pahu = loadSound("assets/pahu.mp3");
  ipu = loadSound("assets/ipu.mp3");
  uli = loadSound("assets/uli.mp3");
  f = loadImage("assets/face.png");
  h = loadImage("assets/mhair.png");
  o = loadImage("assets/fhair.png");
}

function setup() {
  createCanvas(900, 720);

  // 'ili 'ili
  stone = new Rock (346, 662, 30);
  // pahu
  amplitude = new p5.Amplitude();
  //ipu
  g = new Gourd(744,591);
  //uli
  m = new Shaker(148,662);
  //dancer
  d = new Dancer(620,515);
  // h = new Hips();
}

function draw() {
  background(img);

  //dancer
  d.display();
  // kane
  image(f, 210,485);
  image(h, 203, 467);
  // wahine
  image(f,635, 485);
  image(o,617,460);
  f.resize(50,30);
  h.resize(65,30);
  o.resize(80,80);

  if (ili.isPlaying()){
    stone.update();
    d.update();
  }
    stone.display();

  drawPahu();
  if(pahu.isPlaying()){
      d.update();
  }

  if(ipu.isPlaying()){
    g.update();
    d.update();
  }
    g.display();

  if(uli.isPlaying()){
    m.update();
    d.update();
  }
  m.display();
}

// ili ili
function playIli(){
  if (!ili.isPlaying()){
    ili.play();
    ili.setVolume(0.5);
  } else{
    ili.pause();
  }
}

class Rock{
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.speed = 1;
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  update(){
    this.move();
  }
  display() {
    push();
    noStroke();
    fill("black");
    ellipse(this.x, this.y, this.rad * 3, this.rad * 2);
    pop();
  }
}

// pahu
function playPahu(){
  if (!pahu.isPlaying()){
    pahu.play();
    pahu.setVolume(0.5);
  } else{
    pahu.pause();
  }
}

function drawPahu(){
  push();

  let dia = 1;
  if (pahu.isPlaying()) {
    let level = amplitude.getLevel();
    dia = map(level, 0.0, 1.0, 0, 500);
  }

  noStroke();
  //base of drum
  fill(149,83,50);
  rect(506,591,95,95,20);
  //top of drum
  fill(252,238,201);
  ellipse(554,586, 90,40);
  ellipse(554,586, dia, 45);
  //ropes
  stroke("black");
  strokeWeight(3);
  line(512,600,523,685);
  line(523,685,538,608);
  line(538,608,558,685);
  line(558,685,570,608);
  line(570,608,589,684);
  line(589,684,596,600);
  pop();
}

//ipu
function playIpu(){
  if (!ipu.isPlaying()){
    ipu.play();
    ipu.setVolume(0.5);
  } else{
    ipu.pause();
  }
}

class Gourd{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.angle = 0;
  }
  update() {
    this.swing();
  }
  swing() {
    this.angle = sin(frameCount / 10) * 0.02;
  }
  display(){
    push();
    noStroke();
    fill(165,85,31);
    rotate(this.angle);
    // bottom and top
    ellipse(this.x,this.y + 54,60,90);
    ellipse(this.x,this.y,65,40);
    // hole
    fill("black");
    ellipse(this.x, this.y - 3,30,20);
    // leaf edge
    fill(72,202,0);
    ellipse(this.x,this.y + 19,45,10);
    pop();
  }
}

//uli
function playUli(){
  if (!uli.isPlaying()){
    uli.play();
    uli.setVolume(0.5);
  } else{
    uli.pause();
  }
}

class Shaker{
  constructor(x,y){
    this.x = x; // let's make this clickable!
    this.y = y;
    this.rad = 100;
    this.angle = 0;
  }
  update() {
    this.swing();
  }
  swing() {
    this.angle = sin(frameCount / 5) * 0.05;
  }
  display(){
    push();
    //translate(); // ***
    rotate(this.angle);
    noStroke();
    // gourd
    fill(178,100,54);
    ellipse(this.x,this.y,60,60);
    // handel
    fill(229,205,177);
    rect(this.x - 8,this.y - 60,15,40);
    // top
    fill("red");
    ellipse(this.x,this.y - 81,70,50);
    fill("yellow");
    ellipse(this.x,this.y - 84,50,30);
    pop();
  };
}

//for finding points
function mousePressed(){
  console.log(mouseX, mouseY);
}


class Dancer{
  constructor(x,y){
    this.x = x;
    this.y = y;
    //head
    this.dai = 60;
    //legs
    this.dai2 = 30;
    this.dai3 = 70;
    //body color
    this.r = 254;
    this.g = 150;
    this.b = 88;
    //leaves
    this.r1 = 115;
    this.g1 = 229;
    this.b1 = 21;
    //dress
    this.r2 = 250;
    this.g2 = 45;
    this.b2 = 51;
    //bottoms
    this.color = "green";
    //kane top
    this.r3=108;
    this.g3=80;
    this.b3=153;
    //movements
    this.rad = 100;
    this.angle = 0;
  }
  swing() {
    this.angle = sin(frameCount / 5) * 0.01;
  }
  update(){
    this.swing();
  }
  display(){
    push();
    this.drawWahine();
    this.drawKane();
    rotate(this.angle);
    this.drawHips();
    pop();
  }
  drawWahine(){
    push();
    noStroke();
    //arms
    push();
    ellipseMode(CORNER);
    fill(this.r,this.g,this.b);
    ellipse(this.x + 70, this.y + 10, this.dai2, this.dai3);
    ellipse(this.x - 19, this.y +10, this.dai2, this.dai3);
    pop();
    //top
    fill(this.r2, this.g2, this.b2);
    rect(this.x, this.y,80,70);
    //legs
    fill(this.r,this.g,this.b);
    ellipse(this.x + 28, this.y + 117, this.dai2, this.dai3);
    ellipse(this.x + 53,this.y + 117,this.dai2,this.dai3);
    //head
    fill(this.r,this.g,this.b);
    ellipse(this.x + 39, this.y - 22, this.dai,this.dai);
    pop();
  }
  drawKane(){
    push();
    //arms
    push();
    noStroke();
    fill(this.r,this.g,this.b);
    ellipseMode(CORNER);
    fill(this.r,this.g,this.b);
    ellipse(this.x - 355, this.y + 7, this.dai2, this.dai3);
    ellipse(this.x - 445, this.y + 7, this.dai2, this.dai3);
    pop();
    //top
    noStroke();
    fill(this.r3, this.g3, this.b3);
    rect(this.x - 425,this.y - 4,80,70);
    // legs
    fill(this.r,this.g,this.b);
    ellipse(this.x - 370,this.y + 137,this.dai2,this.dai3);
    ellipse(this.x - 400,this.y + 137, this.dai2, this.dai3);
    //head
    ellipse(this.x - 385,this.y - 22, this.dai,this.dai);
    fill(72,202,0);
    ellipse(this.x - 385, this.y - 45, 70,20);
    pop();
  }
  drawHips(){
    push();
    noStroke();
    fill(this.r2, this.g2, this.b2);
    quad(this.x + 95, this.y + 136, this.x - 10, this.y + 136, this.x + 15, this.y + 60, this.x + 65 , this.y + 60);
    fill(this.color);
    quad(this.x - 450,this.y + 136, this.x - 320,this.y + 136, this.x - 350,this.y + 60, this.x - 420,this.y + 60);
    pop();
  }
}


function addInstruct(){
 alert("click the buttons at the bottom to play and pause instruments");
}
