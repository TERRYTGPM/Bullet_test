
var wall, bullet;

var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  bullet = createSprite(100, 200, 50, 10);
  bullet.shapeColor = "blue";

  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);

  wall.shapeColor = "green";

  speed = random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = 15;

}

function draw() {
  background(0, 0, 0); 
  
  bullet.collide(wall);

if(hasCollided(bullet, wall)){

 var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage > 10 ){

    wall.shapeColor = rgb(255, 0, 0);

  }

}



  drawSprites();
 

}
function hasCollided(lbullet, lwall){

  bulletRightedge=lbullet.x+lbullet.width;

  wallLeft=lwall.x;

  if(bulletRightedge>=wallLeft){

    return true;

  } else{

    return false;

  }
}
