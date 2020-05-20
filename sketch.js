
  var car,wall,car2;
  var speed,weight;
  var deform;

function setup() {
  createCanvas(1600,800);
  //createSprite(400, 200, 50, 50);
  speed = random(55,90);
  speed2= random(55,100);
  weight= random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  car2=createSprite(50,400,50,50);
  car2.velocityX= speed2;
  wall=createSprite(1500,400,60,700)
  wall.shapeColor = "grey";
}

function draw() {
  background("black");  
  detection();
  deformation();
  drawSprites();
}

function detection(){
  if(car.x-wall.x<car.width/2+wall.width/2
    && wall.x - car.x<car.width/2+wall.width/2 ){
    car.velocityX = 0;
  }
  if(car2.x-wall.x<car2.width/2+wall.width/2
    && wall.x - car2.x<car2.width/2+wall.width/2 )
    
    car2.velocityX =0;
}

function deformation(){
  deform= 0.5 * weight *speed*speed/22500;
  if (deform<100){
    car.shapeColor="green";
    text("grade: A", 800,200);
  }
  else if(deform>100 && deform<180){
    car.shapeColor="yellow";
    text("grade:B",800,200);
  }
  else{
    car.shapeColor= "red";
    text("grade:C",800,200);
  }
  deform2= 0.5 * weight *speed2*speed2/22500;
  if (deform2<100){
    car2.shapeColor="green";
    text("grade: A", 800,400);
  }
  else if(deform2>100 && deform2<180){
    car2.shapeColor="yellow";
    text("grade:B",800,400);
  }
  else{
    car2.shapeColor= "red";
    text("grade:C",800,400);
  }
}
  
      
