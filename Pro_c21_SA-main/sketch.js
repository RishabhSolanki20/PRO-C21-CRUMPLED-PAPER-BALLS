const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var left;
var right;
var top_wall;
var ball;
var btn1;
var btn2;
var dustbin, dustbinImg;
var net1;
var net2;




function setup() {
	createCanvas(800, 650);

  dustbin = createImg('dustbin.png');
  dustbin.position(600,505);
  dustbin.size(100,100);


	engine = Engine.create();
	world = engine.world;

  var ball_options = {
    restutution: 0.95
  }

  
  btn1 = createImg('right.png');
  btn1.position(600,70);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);

  
  btn2 = createImg('up.png');
  btn2.position(222,70);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  

	ground =new Ground(398,620,800,20);
	right =new Ground(790,260,20,700);
	left =new Ground(10,305,20,607);
	top_wall =new Ground(400,10,800,20); 

  net1 =new Ground(720,538,12,140);
  net2 =new Ground(570,538,12,140);

  ball = Bodies.circle(200,200,20,ball_options)
  World.add(world,ball)

	//Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS)
  textSize(30);
}


function draw() {
  //rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 20)

  ground.show();
  left.show();
  right.show();
  top_wall.show();
  net1.show();
  net2.show();


  push();
  noStroke();
  fill(255, 255, 0)
  


  Engine.update(engine);
  
 
}



function hForce() {
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:0})
  
}

function vForce() {
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.05})
  
}
