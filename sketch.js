
  var bullet,wall;
  //var bullet2;
  var speed,weight;
  var deform;
  var thickness,damage;
  thickness = random(22,83);
function setup() {
  createCanvas(1600,800);
  //createSprite(400, 200, 50, 50);
  speed = random(223,321);
  //speed2= random(55,100);
  weight= random(30,52);
  bullet=createSprite(50,200,50,20);
  bullet.shapeColor="white";
  bullet.velocityX = speed;
  // bullet2=createSprite(50,400,50,20);
  // bullet2.shapeColor="white";
  // bullet2.velocityX= speed2;
  wall=createSprite(1500,400,thickness,400);
  wall.shapeColor = "grey";
}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage = (0.5*weight*speed)/thickness^3
    if(damage>10){
      wall.shapeColor= "green";
    }
    else if(damage<10){
      wall.shapeColor = "red";
    }
  }
  //detection();
  //deformation();
  
  drawSprites();
}




function hasCollided(bullet,wall){
  var bulletRightEdge = bullet.x +bullet.width;
  var wallLeftEdge = wall.x
  if(bulletRightEdge>= wallLeftEdge){
    return true
  }
  return false;
}

// function detection(){
//   if(bullet.x-wall.x<bullet.width/2+wall.width/2
//     && wall.x - bullet.x<bullet.width/2+wall.width/2 ){
//     bullet.velocityX = 0;
  //}
//   if(bullet2.x-wall.x<bullet2.width/2+wall.width/2
//     && wall.x - bullet2.x<bullet2.width/2+wall.width/2 )
    
//     bullet2.velocityX =0;
// }

// function deformation(){
//   deform= 0.5 * weight *speed*speed/22500;
//   if (deform<100){
//     bullet.shapeColor="green";
//     text("grade: A", 800,200);
//   }
//   else if(deform>100 && deform<180){
//     bullet.shapeColor="yellow";
//     text("grade:B",800,200);
//   }
//   else{
//     bullet.shapeColor= "red";
//     text("grade:C",800,200);
//   }
//   deform2= 0.5 * weight *speed2*speed2/22500;
  // if (deform2<100){
  //   bullet2.shapeColor="green";
  //   text("grade: A", 800,400);
  // }
  // else if(deform2>100 && deform2<180){
  //   bullet2.shapeColor="yellow";
  //   text("grade:B",800,400);
  // }
  // else{
  //   bullet2.shapeColor= "red";
  //   text("grade:C",800,400);
  // }
//}
  
      
