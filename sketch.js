const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2,box3,box4;

var pig1,pig2;

var log1,lod2,log3,log4;
var bird1;

var backgroundImg; 
function preload()
{
    backgroundImg=loadImage("Images/bg.png")
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     box1 = new Box(700,320,70,70);
     box2= new Box(920,320,70,70);
     box3 = new Box(700,240,70,70);
     box4= new Box(920,240,70,70);
     box5= new Box(810,180,70,70);

     ground=new Ground(600,380,1200,40);
     pig1 =new  Pig (810,320);
     pig2 =new Pig(810,240)
     log1= new Log (810,280,290,PI/2);
     log2= new Log (810,200,290,PI/2);
     log3= new Log(760,120,150,PI/7);
     log4= new Log(870,120,150,-PI/7);

     bird1=new Bird(200,200);
     
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    bird1.display();
    
    
    pig1.display();
    log1.display();
    log3.display();
    log4.display();
    log2.display();
    pig2.display();
}