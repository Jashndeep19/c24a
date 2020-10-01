var rect1,rect2,rect3
var ground
var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball (56, 46, 55, 55);

	rect1=createSprite(750,550,200,20)
	rect1 = Bodies.rectangle(750, 550, 200, 20 , {isStatic:true} );
	rect1.shapeColor=color(255,0,0)
	rect2=createSprite(650,510,20,100)
	rect2 = Bodies.rectangle(650,510,20,100,{isStatic:true} );
	rect2.shapeColor=color(255,0,0)
	rect3=createSprite(850,510,20,100)
	rect3 = Bodies.rectangle(850,510,20,100,{isStatic:true} )
    rect3.shapeColor=color(255,0,0)
    groundSprite=createSprite(width/2, height-135, width,10);
	groundSprite.shapeColor=color(55)

	World.add(world, rect1);
	console.log(rect1);
    World.add(world, rect2);
	console.log(rect2);
	World.add(world, rect3);
	console.log(rect3);  
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 console.log(ground);   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  
  drawSprites();
 
}



function keypressed(){
	if(keycode === UP_ARROW){
     matter.body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}