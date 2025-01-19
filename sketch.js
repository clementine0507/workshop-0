function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0, 120, 120, 10);
  
  noStroke();
  circle(mouseX, mouseY, 300);
  
  if(mouseX > width /2) {
    fill(0, 120, 120, 10);
  } else {
    fill(225);
  }
  
  circle(500, 500, 200);
}