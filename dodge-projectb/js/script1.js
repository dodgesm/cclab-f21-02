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
// let h;

function preload() {
  img = loadImage("assets/poster.PNG");
  ili = loadSound("assets/ili.mp3");
  pahu = loadSound("assets/pahu.mp3");
  ipu = loadSound("assets/ipu.mp3");
  uli = loadSound("assets/uli.mp3");
}

function setup() {
  createCanvas(900, 720);

  // 'ili 'ili
  stone = new Rock (346, 662, 30);
  // pahu
  amplitude = new p5.Amplitude();
  //ipu
  g = new Gourd();
  //uli
  m = new Shaker();
  //dancer
  d = new Dancer();
  // h = new Hips();
}

function draw() {
  background(img);

  //dancer
  // d.update();
  d.display();
  // h.display();
  // h.update();

  if (ili.isPlaying()){
    stone.update();
  }
    stone.display();

  drawPahu();

  if(ipu.isPlaying()){
    g.update();
  }
    g.display();

  if(uli.isPlaying()){
    m.update();
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
  let level = amplitude.getLevel();
  let dia = map(level, 0.0, 1.0, 0, 500);

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
  line(589,684,596,600)
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
    ellipse(744,645,60,90);
    ellipse(744,591,65,40);
    // ellipse(523,459,60,90);
    // ellipse(523,405,65,40);
    fill("black");
    ellipse(744, 588,30,20);
    // ellipse(523,399, 30,20);
    fill(72,202,0);
    ellipse(744,610,45,10);
    // ellipse(523,421, 45, 10);
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
    fill(178,100,54);
    ellipse(148,662,60,60);
    fill(229,205,177);
    rect(140,596,15,40);
    fill("red");
    ellipse(148,581,70,50);
    fill("yellow");
    ellipse(148,578,50,30);
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
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
  }
  move(){
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  sway() {
    if (this.x < 410 || this.x > 553) {
      this.xSpd *= -1;
    }
    if (this.y < 422 || this.y > 406) {
      this.ySpd *= -1;
    }
  }
  update(){
    this.move();
    this.sway();
  }
  display(){
    push();
    this.drawWahine();
    this.drawKane();
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
    ellipse(495, 319, this.dai2, this.dai3);
    ellipse(410,319, this.dai2, this.dai3);
    pop();
    //top
    fill(this.r2, this.g2, this.b2);
    rect(427, 310, 80, 70);
    //legs
    fill(this.r,this.g,this.b);
    ellipse(455, 427, this.dai2, this.dai3);
    ellipse(480,427, this.dai2, this.dai3);
    //head
    fill(this.r,this.g,this.b);
    ellipse(466, 288, this.dai, this.dai);
    fill(72,202,0);
    ellipse(466,267, 70,20);
    pop();
  }
  drawKane(){
    push();
    //arms
    push();
    fill(this.r,this.g,this.b);
    ellipseMode(CORNER);
    fill(this.r,this.g,this.b);
    ellipse(160,319, this.dai2, this.dai3);
    ellipse(90,319, this.dai2, this.dai3);
    pop();
    //top
    fill(this.r3, this.g3, this.b3);
    rect(100, 310, 80, 70);
    // head
    fill(this.r,this.g,this.b);
    ellipse(138, 288, this.dai, this.dai);
    //legs
    ellipse(121, 427, this.dai2, this.dai3);
    ellipse(156,427, this.dai2, this.dai3);
    pop();
  }
  drawHips(){
    push();
    noStroke();
    fill(this.r2, this.g2, this.b2);
    quad(432,379,500,379,523,431,412,431);
    fill(this.color);
    quad(114,379,166,379,190,431,94,431);
    pop();
  }
}

// class Hips{
//   constructor(x,y){
//     this.x=x;
//     this.y=y;
//     this.xSpd = random(-3, 3);
//     this.ySpd = random(-3, 3);
//     //red
//     this.r2 = 250;
//     this.g2 = 45;
//     this.b2 = 51;
//     //green
//     this.color = "green";
//   }
//   move(){
//     this.x += this.xSpd;
//     this.y += this.ySpd;
//   }
//   sway() {
//     if (this.x < 410 || this.x > 553) {
//       this.xSpd *= -1;
//     }
//     if (this.y < 422 || this.y > 406) {
//       this.ySpd *= -1;
//     }
//   }
//   update(){
//     this.move();
//     this.sway();
//   }
//   display(){
//     push();
//     noStroke();
//     fill(this.r2, this.g2, this.b2);
//     quad(432,379,500,379,523,431,412,431);
//     fill(this.color);
//     quad(114,379,166,379,190,431,94,431);
//     pop();
//   }
// }

function addInstruct(){
 alert("click the buttons at the bottom to play and pause instruments");
}
