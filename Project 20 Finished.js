var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1250, 200, 60, height/2);

  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    if (car.isTouching(wall)){
      car.collide(wall);
    }
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0); 
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deforemation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }


  drawSprites();
}

function isTouching(objectA, objectB){
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2) {
      
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