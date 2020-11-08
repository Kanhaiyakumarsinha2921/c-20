var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="red";
  fixedRect=createSprite(300, 200, 50, 50);
  fixedRect.shapeColor="orange"
}

function draw() {
  background(255,255,255); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2  &&
  movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2  ){
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"

}
else
{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="orange"
}
  drawSprites();
}