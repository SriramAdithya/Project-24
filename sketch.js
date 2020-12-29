const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let paperBall;
let dustbin1,dustbin2,dustbin3;
let ground;

function setup() {
	createCanvas(1400, 400);
	
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paperBall = new Paper(300,200,15);

	dustbin1 = new Dustbin(1145,335,15,100)
	dustbin2 = new Dustbin(1245,380,190,10)
	dustbin3 = new Dustbin(1345,340,15,100)

	ground = new Ground(700,390,1400,10)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display()

  dustbin1.display()
  dustbin2.display()
  dustbin3.display()

  ground.display()
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		if(paperBall.x < 1200){
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1.5,y:-1.8})
		}
	}
}