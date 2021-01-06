var F1,M1;


function setup() {
  createCanvas(800,400);
  M1=createSprite(400, 200, 80, 30);
  M1.shapeColor="blue";
  F1=createSprite(200,200,80,50);
  F1.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  M1.y=mouseY;
  M1.x=mouseX;
  
  if(M1.x-F1.x<M1.width/2+F1.width/2 && F1.x-M1.x<F1.width/2+M1.width/2 && F1.y-M1.y<M1.height/2+M1.height/2 && M1.y-F1.y<M1.height/2+F1.height/2){
    M1.shapeColor="red";
    F1.shapeColor="red";
  }else{
    M1.shapeColor="blue";
    F1.shapeColor="blue";
  }

  drawSprites();
}