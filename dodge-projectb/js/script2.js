let l;
let p;
let e;
let u;

function preload() {
  //u = loadSound("assets/pahu.mp3");
  u = loadSound("assets/uli-p.m4a");
  l = loadSound("assets/ili-p.m4a");
  p = loadSound("assets/pahu-p.m4a");
  //e = loadSound("assets/ipu-p.m4a"); // ***
  e = loadSound("assets/pahu-p.m4a");
}

function setup() {
  //
}

function draw() {
  //
}


function sayUli(){
  u.play();
  u.setVolume(1);
}

function sayIli(){
  l.play();
  l.setVolume(0.5);
}

function sayPahu(){
  p.play();
  p.setVolume(0.5);
}

function sayIpu(){
  e.play();
  e.setVolume(0.5);
}
