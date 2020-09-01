var moving, fixed

function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  fixed = createSprite(600, 200, 50, 50);

}

function draw() {
  background("gray");  

moving.x = mouseX;
moving.y = mouseY;

fixed.shapeColor = "green";
moving.shapeColor = "blue";

if (moving.x - fixed.x<moving.width/2+fixed.width/2 && fixed.x - moving.x<moving.width/2+fixed.width/2
  && moving.y - fixed.y < moving.height/2+fixed.height/2 && fixed.y - moving.y<moving.height/2+fixed.height/2) {
moving.shapeColor = "red";
fixed.shapeColor = "red";
}



  drawSprites();
}