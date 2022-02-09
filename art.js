art.js
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    camera = createCamera();
    window.alert("Welcome to The Cube Illusion. Explore by moving your mouse to introduce light, and clicking your mouse to change camera positioning or zoom from the center. Use ENTER and SHIFT to alternate between color schemes.")
    
   a = 8
   speed = 0.7 
   value = 0 
  }

  function draw() {
    background(a);
    // rotating objects
    noFill();
    stroke(value);
    strokeWeight(2);
    rotateX(frameCount * -0.005);
    rotateY(frameCount * -0.005);
    box(windowWidth/2);
    strokeWeight(1);
    sphere(windowWidth*1.5)
    strokeWeight(3);
    rotateX(frameCount * 0.003);
    rotateY(frameCount * 0.003);
    box(windowWidth/4.5);
    strokeWeight(2.6);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(windowWidth/7);
    
//  center cube and light interaction
    fill(0);
    strokeWeight(0);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 50);
  specularMaterial(250);
  translate(-25, 0, 0);
  shininess(3);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.005);
    box(windowWidth/24);

//camera
orbitControl();
  rotateY(0.5);

 // variables 
a = a + speed
value = value

if (a >= 200 || a < 0){
    speed = speed*-1
}

  }


  function keyPressed() {
if (keyCode === ENTER) {
value = 225; 
} else if (keyCode === SHIFT) {
  value = 0
}

  } 