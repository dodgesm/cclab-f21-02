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

function preload() {
  img = loadImage("assets/poster.PNG");
  ili = loadSound("assets/ili.mp3");
  pahu = loadSound("assets/pahu.mp3");
  ipu = loadSound("assets/ipu.mp3");
  uli = loadSound("assets/uli.mp3");
  // pronounciation (what the p stands for)
  // u = loadSound("assets/uli-p.mp3");
  // l = loadSound("assets/ili-p.mp3");
  // p = loadSound("assets/pahu-p.mp3");
  // e = loadSound("assets/ipu-p.mp3");
}

function setup() {
  createCanvas(640, 520);
  // 'ili 'ili
  stone = new Rock (230, 450, 30);
  // pahu
  amplitude = new p5.Amplitude();
  //ipu
  g = new Gourd ();
  //uli
  m = new Shaker ();
}

function draw() {
  background(img);
  // need movement to disappear
  if (ili.currentTime()>0){
    stone.display();
    stone.update();
  } else{
  if(ili.currentTime()<2){
    stone.display();
  }
  }

  drawPahu();

  if(ipu.currentTime()>0){
    g.display();
    g.update();
  } else{
    if(ipu.currentTime()<2){
      g.display();
    }
    }

    if(uli.currentTime()>0){
      m.display();
      m.update();
    } else{
      if(uli.currentTime()<2){
        m.display();
      }
      }
}

// ili ili
function playIli(){
  if (!ili.isPlaying()){
    ili.play();
    ili.setVolume(0.5);
    button.html("pause 'ili'ili");
  } else{
    ili.pause();
    button.html("play 'ili'ili");
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
    ellipse(this.x, this.y, this.rad * 3, this.rad * 2); // ellipse takes a diameter!

    pop();
  }
}


// pahu
function playPahu(){
  if (!pahu.isPlaying()){
    pahu.play();
    pahu.setVolume(0.5);
    button.html("pause pahu");
  } else{
    pahu.pause();
    button.html("play pahu");
  }
}

function drawPahu(){
  push();
let level = amplitude.getLevel();
let dia = map(level, 0.0, 1.0, 0, 500);

noStroke();
//base of drum
fill(149,83,50);
rect(340, 420, 95, 95, 20);
//top of drum
fill(252,238,201);
ellipse(388, 415, dia, 40);
ellipse(388, 415, 90,40);
//ropes
stroke("black");
strokeWeight(3);
line(346,504,363,432);
line(389,511,363,432);
line(407,432,389,511);
line(426,505, 407,432);
pop();
}


//ipu
function playIpu(){
  if (!ipu.isPlaying()){
    ipu.play();
    ipu.setVolume(0.5);
    button.html("pause ipu");
  } else{
    ipu.pause();
    button.html("play ipu");
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
    ellipse(523,459,60,90);
    ellipse(523,405,65,40);
    fill("black");
    ellipse(523,399, 30,20);
    fill(72,202,0);
    ellipse(523,421, 45, 10);
    pop();
  }
}

//uli
function playUli(){
  if (!uli.isPlaying()){
    uli.play();
    uli.setVolume(0.5);
    button.html("pause uli uli");
  } else{
    uli.pause();
    button.html("play uli uli");
  }
}

class Shaker{
constructor(x,y){
  this.y = y;
  this.x = x;
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
  rotate(this.angle);
  noStroke();
  fill(178,100,54);
  ellipse(63,481,60,60);
  fill(229,205,177);
  rect(55, 415, 15, 40);
  fill("red");
  ellipse(61,400,70,50);
  fill("yellow");
  ellipse(61,397, 50,30)
  pop();
};
}

// function sayUli(){
//   u.play();
//   u.setVolume(0.5);
// }

//for finding points
function mousePressed(){
  console.log(mouseX, mouseY);
}
