const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //garbage1 = createSprite(275,height - 100,175,10)
//285
paper = new Bird(975,100)
floor = new Ground(width/2,height,12000,20)
 can1 = new Can(1000,height - 20,150,40)  
 can2 = new Can(930,height-60,40,100)
 can3 = new Can(1065,height-60,40,100)

    //log6 = new Log(230,180,80, PI/2);
    Slingshot = new SlingShot(paper.body,{x:975, y:100});
}

function draw(){
    background(220);
    Engine.update(engine);
    strokeWeight(1)  
 stroke("black")   
fill("black")
//text("while the garbage is swinging click the screen at the right time for it to fall in the can",width/2,50)
strokeWeight(4);
        paper.display();
        Slingshot.display();
        floor.display();
        can1.display();
        can2.display();
        can3.display();
//fill("white")
//        ellipse(paper.positionX,paper.positionX,15,15)
 // drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   // background("grey")
  // Slingshot.move();
}


function mouseReleased(){
    Slingshot.fly();
}