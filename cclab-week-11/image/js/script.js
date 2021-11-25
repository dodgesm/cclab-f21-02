let img;
let lightImg;

function preload(){
    img = loadImage("asset/Colorful.jpg");
    lightImg = loadImage("asset/sprite.png")
}

function setup() {
  createCanvas(400, 500);
  background(220);
}

function draw() {
  //background(220);
  push();
  blendMode(ADD);
  tint(180, 100, 10, 50);
  imageMode(CENTER);
  image(lightImg, mouseX, mouseY, 50,50);
  pop();
//tint(0, 255, 255); //cannot use fill bc image already has color, just one number controls the brightness and with another number is the opacity
//image(img, 0, 0, 300, 100);
//filters are expensive so wouldn't really use
//filter(INVERT);
//filter(GRAY);
//filter(BLUR,0);

  // push();
  // translate(mouseX, mouseY);
  // imageMode(CENTER);
  // image(img, 0, 0, 300, 100); //(img, x, y, w, h);
  // pop();
}
