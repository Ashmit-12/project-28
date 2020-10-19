
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var tree;
var band;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground=new Ground(600,610,1200,20);
	
    tree= new Tree(1000,380,500,500);
    stone=new Stone(225,550,70);

	mango1=new Mango(1000,300,40);
	mango2=new Mango(900,350,40);
	mango3=new Mango(1150,290,30);
	mango4=new Mango(1050,200,30);
	mango5=new Mango(900,270,40);

	band=new Slingshot(stone.body,{x:225,y:400})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(70,174,234);
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  band.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);

 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
 
function mouseReleased(){
   band.fly();
}
function keyPressed(){
    if(keyCode===32){
        band.attach(stone.body);
        
    }
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=lmango.radius+lstone.radius)
	{console.log("high");
Matter.Body.setStatic(lmango.body,false);
	}

}