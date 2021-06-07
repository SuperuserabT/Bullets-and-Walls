var bullet, wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200, 200, thickness, height/2);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
  bullet.shapeColor = "white";
  wall.shapeColor(80,80,80);
}

function draw() {
  background(255,255,255);
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    if (bullet.isTouching(wall)){
      bullet.collide(wall);
    }
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0); 
    }

    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }

    if(deforemation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }

  if (hasCollided(bullet, wall))
  {
    bullet.velocityX=0
    var damage=0.5 * weight * speed* speed/(thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);

    }



    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }


  drawSprites();
}

function isTouching(objectA, objectB){
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2
    && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
      
    return true;
  }
  else {
    return false;
  } 
}

function bounceOff(objectA, objectB){
  if (objectA.x - objectB.x < objectB.width/2 + objectA.width/2
    && objectB.x - objectA.x < objectB.width/2 + objectA.width/2) {
      
      objectA.velocityX = objectA.velocityX*-1
      objectB.velocityX = objectB.velocityX*-1

      
  } 

  if (objectA.y - objectB.y < objectB.height/2 + objectA.height/2
      && objectB.y - objectA.y < objectB.height/2 + objectA.height/2){

      objectA.velocityY = objectA.velocityY*-1
      objectB.velocityY = objectB.velocityY*-1
  }
}


function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wllLeftEdge=lwall.x;
  if (bulletRIghtEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}