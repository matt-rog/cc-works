const PIPES_PER_RING = 40;
const PIPE_SIZE = 12;
const PLUS_PER_RING = 40;

let topText = "THERE'S A SMALL POSSIBILITY\nTHEY'RE GOING TO";
let midText = "DESTROY THE ENTIRE WORLD";
let botText = "AND YET THEY PUSH THE BUTTON";

function preload() {
  roboto_mono = loadFont("assets/RobotoMono-Regular.ttf");
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  fill("#ffffff");
  textAlign(CENTER, CENTER);
  textFont(roboto_mono);
  textSize(getFontSize());
}

function draw() {
  clear();
  background("#020202");
  ambientLight(255);
  noLights();
  let maxRing = displayWidth / 3 > 220 ? 220 : (displayWidth * 0.66) / 2;

  //   push();

  //   drawRoundText(maxRing + 70, topText, 255, 0, -190, 0);
  //   drawRoundText(maxRing + 70, botText, 255, 0, 190, 0);
  //   pop();
  text(topText, 0, -210);
  text(midText, 0, 0);
  text(botText, 0, 210);

  push();
  translate(0, 0, 0);
  drawPlusRing(displayHeight * 0.6, 0, 0, 0, 50, 1);
  drawPlusRing(displayHeight * 0.5, 0, 0, 0, 50, -1);
  drawPlusRing(displayHeight * 0.4, 0, 0, 0, 50, -1);

  rotateZ(90);
  drawPipeRing(height / 2, 0, 0, 0, 50);
  rotateZ(90);
  drawPipeRing(height / 2, 0, 0, 0, 50);

  pop();

  drawPipeRing(maxRing + 50, 0, -190, 0, 150);

  drawPipeRing(maxRing - 170, 0, -155, 0, 170);
  drawPipeRing(maxRing - 145, 0, -140, 0, 250);
  drawPipeRing(maxRing - 105, 0, -110, 0, 250);
  drawPipeRing(maxRing - 80, 0, -80, 0, 250);
  drawPipeRing(maxRing - 60, 0, -50, 0, 250);
  drawPipeRing(maxRing, 0, -35, 0, 150);
  // MIDTEXT
  drawPipeRing(maxRing, 0, 35, 0, 150);
  drawPipeRing(maxRing - 60, 0, 50, 0, 250);
  drawPipeRing(maxRing - 80, 0, 80, 0, 250);
  drawPipeRing(maxRing - 105, 0, 110, 0, 250);
  drawPipeRing(maxRing - 145, 0, 140, 0, 250);
  drawPipeRing(maxRing - 130, 0, 155, 0, 250);

  drawPipeRing(maxRing - 50, 0, 170, 0, 100);

  drawPipeRing(maxRing + 50, 0, 190, 0, 150);
}

function drawPipeRing(radius, x, y, z, alpha) {
  let time = millis();
  rotateY(time / 15000);
  push();
  translate(x, y, z);
  pop();

  for (let i = 0; i < PIPES_PER_RING; i++) {
    let angle = (TWO_PI / PIPES_PER_RING) * i;
    let x = cos(angle) * radius;
    let z = radius * sin(angle);
    push(); // Save the current transformation
    textSize(getSymbolSize());
    textAlign(CENTER, CENTER);
    fill(alpha);
    translate(x, y, z);
    text("|", 0, 0);
    pop(); // Restore the previous transformation
  }
}

function drawPlusRing(radius, x, y, z, alpha, spin) {
  let time = millis();
  push();
  translate(x, y, z);
  pop();
  rotateY(spin * (time / 10000));

  for (let i = 0; i < PLUS_PER_RING; i++) {
    let angle = (TWO_PI / PLUS_PER_RING) * i;
    let x = cos(angle) * radius;
    let y = radius * sin(angle);
    push(); // Save the current transformation
    translate(x, y, z);
    textSize(getSymbolSize());
    textAlign(CENTER, CENTER);
    fill(alpha);
    text("+", 0, 0);
    pop(); // Restore the previous transformation
  }
}

function drawRoundText(radius, string, alpha, x, y, z) {
  string = string.split("").reverse().join("");
  push();
  translate(x, y, z);
  pop();
  let len = string.length;
  let mid = len / 2;
  for (let i = 0; i < len; i++) {
    let angle = (PI / len) * i;
    let x = cos(angle) * radius;
    let z = radius * sin(angle);
    push(); // Save the current transformation
    translate(x, y, z);
    textSize(getFontSize() - 7);
    textAlign(CENTER, CENTER);
    fill(alpha);
    text(string.charAt(i), 0, 0);
    pop(); // Restore the previous transformation
  }
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight, false);
}

// Util
function getFontSize() {
  let s = 25;
  let p = displayWidth / 35;
  return p > s ? s : p;
}

function getSymbolSize() {
  let s = 15;
  let p = displayWidth / 70;
  return p > s ? s : p;
}
