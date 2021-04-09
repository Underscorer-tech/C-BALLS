
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var d1,dimg;
var ba,wall1,wall2,wall3,ground,ball1,r1,b1;
function preload()
{
	dimg = loadImage("dustbin.jfif");
}

function setup() {
	createCanvas(800, 700,);
	engine = Engine.create();
	world = engine.world;
 ground=new walls(400,650,800,15);
 wall1 = new walls(527,610,10,95);
 wall2 = new walls(615,610,10,95);
ball1=new ball(185,635,27);
d1= createSprite(570,570,30,30);
d1.addImage(dimg,"da")
b1 = new walls(185,435,20,20);
r1 = new rope(b1.body,{x:mouseX,y:mouseY})

Engine.run(engine);
  
}


 function draw() {
 console.log(mouseX+" "+mouseY) ;

ball1

b1.body.position.y=mouseY;
b1.body.position.x=mouseX;

//ball1.body.position.y=b1.body.position.y

//ball1.body.position.x=b1.body.position.x
//background("black") 
rectMode(CENTER);
  Engine.update(engine);
  background("white");
  wall1.display();
  wall2.display();
  drawSprites();
 
  b1.display();
  ground.display();
 ball1.display();
 //r1.display();
 //console.log(ball1.body.position)


 }

 function keyPressed(){

if (keyCode === UP_ARROW){

  Body.applyForce(ball1.body,ball1.body.position,{x:55,y:-105});


}



}


