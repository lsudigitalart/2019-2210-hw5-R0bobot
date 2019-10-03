// Sol Lewitt prompts
// 1) White lines to points on the grids. Fourth wall: twenty-four lines from the center, 
//    twelve lines from the midpoint of each of the sides, twelve lines from each corner.
// 2) The wall is divided vertically into fifteen parts. All one-, two-, three, using color ink washes.

var t = 0;
var tt = 0;

function setup(){
  createCanvas(1000, 700);
  angleMode(DEGREES);
  background(100);

  var r1 = random(100, 500);

  rectMode(CENTER);
  fill(44, 76, 114);
  rect(170, 350, 334, 700);

  fill(159, 53, 78);
  rect(830, 350, 334, 700);

  fill(81, 45, 117);
  rect(500, 350, 334, 700);

  //Top Left
  push();
  rectMode(CENTER);
  rotate(145);
  noStroke();
  fill(39, 119, 85);
  rect(0, 0, 850, 565);
  pop();

  //Top Right
  push();
  rectMode(CENTER);
  rotate(35);
  translate(700, -570);
  noStroke();
  fill(42, 81, 112);
  rect(0, 0, 850, 565);
  pop();

  //Bottom Left
  push();
  rectMode(CENTER);
  rotate(35);
  translate(400, 570);
  noStroke();
  fill(173, 124, 57);
  rect(0, 0, 850, 565);
  pop();

  //Bottom Right
  push();
  rectMode(CENTER);
  rotate(145);
  translate(-400, -1140);
  noStroke();
  fill(173, 90, 57);
  rect(0, 0, 850, 565);
  pop();

  // AHHHHHHHHHHHHHHHHHHHH
  // AAAAAAAAAAAAAAAAAAAAAHHH

  //Center
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(0);
    strokeWeight(7);
    translate(500, 350);
    rotate(random(360));
    line(0, 0, 0, random(100, 300));
    pop();
  }
  //Top
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(0);
    strokeWeight(7);
    translate(500, 0);
    rotate(random(360));
    line(0, 0, 0, random(100, 200));
    pop();
  }
  //Bottom
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(0);
    strokeWeight(7);
    translate(500, 700);
    rotate(random(360));
    line(0, 0, 0, random(100, 200));
    pop();
  }
  //Left
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(0);
    strokeWeight(7);
    translate(0, 350);
    rotate(random(360));
    line(0, 0, 0, random(100, 200));
    pop();
  }
  //Right
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(0);
    strokeWeight(7);
    translate(1000, 350);
    rotate(random(360));
    line(0, 0, 0, random(100, 200));
    pop();
  }

  //Center
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(255);
    strokeWeight(4);
    translate(500, 350);
    rotate(random(360));
    line(0, 0, 0, random(100, 500));
    pop();
  }
  //Top
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(255);
    strokeWeight(4);
    translate(500, 0);
    rotate(random(360));
    line(0, 0, 0, random(100, 400));
    pop();
  }
  //Bottom
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(255);
    strokeWeight(4);
    translate(500, 700);
    rotate(random(360));
    line(0, 0, 0, random(100, 400));
    pop();
  }
  //Left
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(255);
    strokeWeight(4);
    translate(0, 350);
    rotate(random(360));
    line(0, 0, 0, random(100, 400));
    pop();
  }
  //Right
  for(var c = 25; c > 0; c = c - 1){
    push();
    stroke(255);
    strokeWeight(4);
    translate(1000, 350);
    rotate(random(360));
    line(0, 0, 0, random(100, 400));
    pop();
  }
}

function draw(){
  noStroke();
  fill(255);

  //Center
  ellipse(500, 350, 5, 5);
  //Top
  ellipse(500, 0, 5, 5);
  //Bottom
  ellipse(500, 700, 5, 5);
  //Left
  ellipse(0, 350, 5, 5);
  //Right
  ellipse(1000, 350, 5, 5);

  stroke(0);
  strokeWeight(6);
  line(0, 0, 1000, 0);
  line(1000, 0, 1000, 700);
  line(1000, 700, 0, 700);
  line(0,0, 0, 700);

}
