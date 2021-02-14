var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairyVoice.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
 
  

  
  starBody.x= starBody.position.x;
 starBody.y= starBody.position.y;
  drawSprites();

}

function keypressed(){
	if (keyCode === LEFT_ARROW) {
  fairy.x=fairy.x-20;
 translation={x:-20,y:0}
  Matter.Body.translate(starBody, translation) }
   else 
    if (keyCode === RIGHT_ARROW) {
	 fairy.x=fairy.x+20;
	 translation={x:20,y:0}
	 Matter.Body.translate(starBody, translation) }
}