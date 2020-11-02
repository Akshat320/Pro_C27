
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 //var bobObject1 = new Bob()
	 roof = new Roof(400,200,330,20);
	 bob1 = new Bob(400,450,4);
	 bob2 = new Bob(450,450,4);
	 bob3 = new Bob(500,450,4);
	 bob4 = new Bob(350,450,4);
	 bob5 = new Bob(300,450,4);

	rope1 = new RopeClass(bob1.body, roof.body, bob1.Diameter*2,0);
	rope2 = new RopeClass(bob2.body, roof.body, bob2.Diameter*2,0);
	rope3 = new RopeClass(bob3.body, roof.body, bob3.Diameter*2,0);
	rope4 = new RopeClass(bob4.body, roof.body, bob4.Diameter*2,0);
	rope5 = new RopeClass(bob5.body, roof.body, bob5.Diameter*2,0);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightGreen");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



