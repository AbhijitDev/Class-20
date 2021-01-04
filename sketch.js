var Car, Wall;
var Speed, Weight;
function setup() {
  createCanvas(800,400);
  Speed=random(90,140);
  Weight=random(600, 1200);
  Car1=createSprite(100, 300, 25, 25);
  Car2=createSprite(100, 200, 25,25);
  Car3=createSprite(100, 100, 25, 25);
  FixedRectangle=createSprite(750, 200 ,15 , 300);
  SeperatingLine1=createSprite(400, 50, 715, 5);
  SeperatingLine2=createSprite(400, 150, 715, 5);
  SeperatingLine3=createSprite(400, 250, 715, 5);
  SeperatingLine4=createSprite(400, 350, 715, 5);
  Car1.velocityX=Speed;
  Car2.velocityX=Speed;
  Car3.velocityX=Speed;
}

function draw() {
  background(255,255,255);  
  text("Test Track", 390, 25);
//  Car1.collide(FixedRectangle);
//  Car2.collide(FixedRectangle);
//  Car3.collide(FixedRectangle);
  if(FixedRectangle.x-Car1.x < (Car1.width+FixedRectangle.width)/2){
Car1.velocityX=0;
var deformation=0.5 * Weight *Speed* Speed/22500;
if(deformation>180){
Car1.shapeColor= "red";
}
if(deformation<180 && deformation>100){
Car1.shapeColor= "blue";
}
if(deformation<180){
  Car1.shapeColor= "green";
}
  }

  if(FixedRectangle.x-Car1.x < (Car1.width=FixedRectangle.width)/2){
    Car2.velocityX=0;
    var deformation=0.5 * Weight *Speed* Speed/22500;
    if(deformation>180){
    Car2.shapeColor= "red"
    }
    if(deformation<180 && deformation>100){
    Car2.shapeColor= "blue"
    }
    if(deformation<180){
      Car2.shapeColor= "green"
    }
      }

      if(FixedRectangle.x-Car3.x < (Car3.width=FixedRectangle.width)/2){
        Car3.velocityX=0;
        var deformation=0.5 * Weight *Speed* Speed/22500;
        if(deformation>180){
        Car3.shapeColor= "red";
        }
        if(deformation<180 && deformation>100){
        Car3.shapeColor= "blue";
        }
        if(deformation<180){
          Car3.shapeColor= "green";
        }
          }
  drawSprites();
}