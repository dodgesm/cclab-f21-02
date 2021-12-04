let l;
let p;
let e;
let u;

function preload() {
  u = loadSound("assets/uli-p.mp3");
  l = loadSound("assets/ili-p.mp3");
  p = loadSound("assets/pahu-p.mp3");
  e = loadSound("assets/ipu-p.mp3");
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
