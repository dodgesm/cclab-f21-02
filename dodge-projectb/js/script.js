// connected to index.html
let t = 0; // time variable
let wave;

function preload (){
  wave = loadSound("assets/wave.mp3")
}

function setup() {
  translate(width/2, height/2);
  createCanvas(windowWidth, windowHeight);
  wave.loop();
  noStroke();
  fill(13,154,137,255);
}

// function mouseMoved() {
// wave.play();
// }



function draw() {
  // from Wavemaker by Aatish Bhatia (https://p5js.org/examples/interaction-wavemaker.html)
  background(15, 15); // translucent background (creates trails)

  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
