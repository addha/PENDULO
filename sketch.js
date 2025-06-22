const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var ground;
var ball;
var rope;

function setup(){
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 600, 1200, 20);
}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

}

