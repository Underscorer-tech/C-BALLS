
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3,ground,ball1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700,);
	engine = Engine.create();
	world = engine.world;
 ground=new walls(400,650,800,15);
 wall1 = new walls(527,610,10,95);
 wall2 = new walls(615,610,10,95);
ball1=new ball(185,335);

	Engine.run(engine);
  
}


function draw() {
console.log(mouseX+" "+mouseY)  
  background("white");
   rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ground.display();
  wall1.display();
 wall2.display();
 ball1.display();
 drawSprites();
 
}



