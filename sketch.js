function setup() {
  createCanvas(1600,400);
  var damage;
  //createSprite(400, 200, 50, 50);
  
  wall1 =new wall(60,1000);
  
  //wall1.velocityX=8;
  bullet1= new bullet(200,200,30,40);
  //bullet1.velocityX=10
}
function hasCollided(wall1,bullet1){
  if(bullet1.x===wall1.x)
  {
    Damage=(0.5*bullet1.weight*bullet1.speed*bullet1.speed)/(wall1.thickness*wall1.thickness*wall1.thickness);
    if(damage>10){
      wall1.fill("red");
    }
    else
    {
      wall1.fill("green");
    }
  }
}
function draw() {
  background(0); 
  wall1.display(); 
  bullet1.display();
  
  

  drawSprites();
}