//based off https://editor.p5js.org/MOQN/sketches/c2oTHwVqd
let chars = [" ","人","拜","/", "|"];

let img;
let cam;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
  img = createImage(width, height);
  sliderR = document.getElementById('slider-r');
  sliderG = document.getElementById("slider-g");
  sliderB = document.getElementById("slider-b");
  sliderG = document.getElementById("slider-g");
}

function draw() {
  background(0);

  cam.loadPixels();
  img.loadPixels();
  // let g = sliderG.value;
  let gridSize = 10;

  noStroke();
  for (let y = 0; y < img.height; y += gridSize) {
    for (let x = 0; x < img.width; x += gridSize) {
      let index = (x + y * img.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      let avg = (r + g + b) / 3;

      let cIndex = floor(
        constrain(map(avg, 0, 255, 0, chars.length), 0, chars.length - 2)
      );
      let a = sliderR.value;
      let c = sliderG.value;
      let d = sliderB.value;
      fill(a,c,d);
      text(chars[cIndex], x, y);
    }
  }
}
