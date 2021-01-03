const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

       //Create a ground
    ground = new Ground(800,650,600,15);

      //Create the blocks for the pyramid formation 
        //bottom  row blocks
    block1 = new Box(550,607,50,75);
    block2 = new Box(600,607,50,75);
    block3 = new Box(650,607,50,75);
    block4 = new Box(700,607,50,75);
    block5 = new Box(750,607,50,75);
    block6 = new Box(800,607,50,75);
    block7 = new Box(850,607,50,75);
    block8 = new Box(900,607,50,75);
    block9 = new Box(950,607,50,75);
    block10 = new Box(1000,607,60,75);
    block11 = new Box(1050,607,50,75);
        //second row blocks 
    block12 = new Box(600,533,50,75);
    block13 = new Box(650,533,50,75);
    block14 = new Box(700,533,50,75);
    block15 = new Box(750,533,50,75);
    block16 = new Box(800,533,50,75);
    block17 = new Box(850,533,50,75);
    block18 = new Box(900,533,50,75);
    block19 = new Box(950,533,50,75);
    block20 = new Box(1000,533,50,75);
        //third row blocks
    block21 = new Box(650,459,50,75);
    block22 = new Box(700,459,50,75);
    block23 = new Box(750,459,50,75);
    block24 = new Box(800,459,50,75);
    block25 = new Box(850,459,50,75);
    block26 = new Box(900,459,50,75);
    block27 = new Box(950,459,50,75);
        //fourth row blocks
    block28 = new Box(700,384,50,75);
    block29 = new Box(750,384,50,75);
    block30 = new Box(800,384,50,75);
    block31 = new Box(850,384,50,75);
    block32 = new Box(900,384,50,75);
        //fifth row blocks
    block33 = new Box(750,309,50,75);
    block34 = new Box(800,309,50,75);
    block35 = new Box(850,309,50,75);
        //top row blocks
    block36 = new Box(800,234,50,75);


    //Polydon added to the Body 
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new slingshot(this.polygon,{x : 100, y : 200});
   
}

function draw() {
  background(0);


  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  drawSprites();
}