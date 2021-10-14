const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(200,300,50,50);
    box2 = new box(240,100,50,100);
    box3 = new box(100,150,50,50);
    box4 = new box(300,200,100,50)
    ground1 = new ground(200,height,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground1.display();
}