const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var brick;
var holder;



function preload() {
   
}
function setup() {
  createCanvas(500,600);

  engine = Engine.create();
  world = engine.world;

  holder = new Holder(250, 10, 100, 50);


  
}


function draw() 
{
  background('#87CEEB');
  

  Engine.update(engine);

  holder.speed = 0.05
  holder.display();
  
}

