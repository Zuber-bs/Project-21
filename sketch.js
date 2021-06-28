const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

// Bodies
var ball;
var ground;
var bin;

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	// Bodies
	ball = new Ball(50, 0, 20);
	ground = new Ground(400, 340, 800, 20);
	bin = new Bin();

	Matter.Runner.run(engine);

}


function draw() {
	background(0);
	drawSprites();
	ball.show();
	ground.show();
	bin.show();

	if(keyDown("up")) {
		Body.applyForce(ball.body, {x:0, y:0}, {x: 1.1, y: 0})
	}
}