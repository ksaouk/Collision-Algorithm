var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityY = 4;

  movingRect = createSprite(400, 800, 80, 50);
  movingRect.shapeColor = "blue";
  movingRect.velocityY = -4;
}

function draw() {
  background(0,0,0);  
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  /*if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }*/

  bounceOff(movingRect, fixedRect);
  drawSprites();
}

