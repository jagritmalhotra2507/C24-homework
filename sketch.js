const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(300,100,70)
    iron = new Iron(300,100,70,70);
    stone = new Stone(150,100,70,70);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
    iron.display();
    stone.display();

    
 
}
