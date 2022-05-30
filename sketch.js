const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var louca, doideira, crazy, loucura;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  louca = new Contencao(10,200,20,400);
  doideira = new Contencao(390,200,20,400);
  crazy = new Contencao(200,10,400,20);
  loucura = new Contencao(200,390,400,20);
}

function draw() 
{
  background("white");
  Engine.update(engine);

  louca.desenhar();
  doideira.desenhar();
  crazy.desenhar();
  loucura.desenhar();
}

