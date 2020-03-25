const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;











function setup() {
  var canvas = createCanvas(800,400);

  

  engine = Engine.create();
  world = engine.world;

  shooter = new Ball(200,210,20);
  

  slingshot = new SlingShot(shooter.body,{x:195 , y:210});

 

  ground = new Ground(400,390,1600,20);
  ground2 = new Ground(650,150,200,10);
 


 
 
   
  block1 = new Box(625,370,20,30);
  block2 = new Box(645,370,20,30);
  block3 = new Box(665,370,20,30);
  block4 = new Box(685,370,20,30);
  block5 = new Box(705,370,20,30);
  block6 = new Box(725,370,20,30);
  block7 = new Box(745,370,20,30);
 

  
  block8 = new Box(635,340,20,30);
  block9 = new Box(655,340,20,30);
  block10 = new Box(675,340,20,30);
  block11 = new Box(695,340,20,30);
  block12 = new Box(715,340,20,30);
  block13 = new Box(735,340,20,30);
  
  block14 = new Box(645,310,20,30);
  block15 = new Box(665,310,20,30);
  block16 = new Box(685,310,20,30);
  block17 = new Box(705,310,20,30);
  block18 = new Box(725,310,20,30);
  
  block19 = new Box(655,280,20,30);
  block20 = new Box(675,280,20,30);
  block21 = new Box(695,280,20,30);
  block22 = new Box(715,280,20,30);

  block23 = new Box(665,250,20,30);
  block24 = new Box(685,250,20,30);
  block25 = new Box(705,250,20,30);

  block26 = new Box(675,220,20,30);
  block27 = new Box(695,220,20,30);

  block28 = new Box(685,190,20,30);


  block29 = new Box(565,145,20,30);
  block30 = new Box(585,145,20,30);
  block31 = new Box(605,145,20,30);
  block32 = new Box(625,145,20,30);
  block33 = new Box(645,145,20,30);
  block34 = new Box(665,145,20,30);
  block35 = new Box(685,145,20,30);
  block36 = new Box(705,145,20,30);
  block37 = new Box(725,145,20,30);


  block45 = new Box(585,85,20,30);
  block46 = new Box(605,85,20,30);
  block47 = new Box(625,85,20,30);
  block48 = new Box(645,85,20,30);
  block49 = new Box(665,85,20,30);
  block50 = new Box(685,85,20,30);
  block51 = new Box(705,85,20,30);
  
  block52 = new Box(625,55,20,30);
  block53 = new Box(645,55,20,30);
  block54 = new Box(665,55,20,30);

  block55 = new Box(645,25,20,30);
  

}

function draw() {
  background(225); 
  
  Engine.update(engine);

  ground.display();
  ground2.display();
  
  shooter.display();

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
  block37.display();
  
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();
  block51.display();
  block52.display();
  block53.display();
  block54.display();
  block55.display();
  

  slingshot.display();

  text("Press SpaceBar for reinstalling the catulpult ",15,50);
  
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX , y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
      slingshot.attach(shooter.body);
  }
}