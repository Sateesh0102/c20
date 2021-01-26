function setup() {
  createCanvas(1200,800);
 fixrect=createSprite(400, 200, 80, 30);
 fixrect.shapeColor="orange"

 movingrect=createSprite(300,500,80,30)
 movingrect.shapeColor="orange"

 movingrect.debug=true
 fixrect.debug=true

}

function draw() {
  background("yellow"); 
  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY

  if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2
    && fixrect.x-movingrect.x>fixrect.width/2+movingrect.width/2
    && movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2
    && fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2)
    {

    movingrect.shapeColor="green"
    fixrect.shapeColor="green"
  }
  else{
    movingrect.shapeColor="orange"
    fixrect.shapeColor="orange"
  }
  drawSprites();
}