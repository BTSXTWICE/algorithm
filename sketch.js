var fixedRect, movingRect;
var rect1,rect2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 500, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(200,100,50,50)
  rect2=createSprite(400,100,50,50)
  fixedRect.velocityY=-1
  movingRect.velocityY=1
}

function draw() {
  background(0,0,0);  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  isTouching(rect1,rect2)
  bounceOff(fixedRect,movingRect)
  drawSprites();
}

function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
      ob1.shapeColor = "red";
      ob2.shapeColor = "red";
}
else {
  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
}
}

function bounceOff(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2){
      ob1.velocityX=ob1.velocityX*(-1)
      ob2.velocityX=ob2.velocityX*(-1)
    }
if(ob1.y - ob2.y < ob2.height/2 + ob1.height/2
  && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
ob1.velocityY=ob1.velocityY*(-1)
ob2.velocityY=ob2.velocityY*(-1)
}}