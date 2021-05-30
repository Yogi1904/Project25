const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

  bin = loadImage("dustbin.png");

}


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(350, 700, 1000, 20);

	bin1 = new Bin(565, 650, 20, 300);
	bin2 = new Bin(640, 690, 150, 20);
	bin3 = new Bin(725, 650, 20, 300);
	
	paper = new Paper(300, 500, 50, 50);
  paper.debug = true;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  ground.display();

  paper.display();
  
  imageMode(CENTER);
  image(bin, 645, 580, 200,200);
  
  bin1.display();
  bin2.display();
  bin3.display(); 

  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:1, y:-23})
  }

}



