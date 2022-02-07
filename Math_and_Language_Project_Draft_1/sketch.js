// Setting variables for the spiral
var angle = 5.0;
var offset = 300;
var scalar = 5;
var speed = 0.08;

//Creates the canvas and sets a background color
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 200, 255);
  
}

//This function contains all the different parts that create the spirals 
function draw() {
  
  //This code creates the spiral animation out of words and only works when your mouse is pressed
  if(mouseIsPressed) {
  var x = offset + cos(angle) * scalar * 3.5;
  var y = offset + sin(angle) * scalar * 3.5;
  let words = ['air', 'water', 'fire', 'earth'];
  let word = random(words);
  let r = random(255, 0, 0);
  let g = random(0, 255, 0);
  let b = random(0, 0, 255);
  text(word, x, y);
  fill(r, g, b);
  angle += speed;
  scalar += speed;
  }
  else {
  
  }
}