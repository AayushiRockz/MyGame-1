const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var player1,player2,witch;
var backgroundImg,floatingGroundImg;
var branchGroup;
var Rope;
var Score = 0;




 function preload(){
  backgroundImg = loadImage("dream2.png");
  floatingGroundImg = loadImage("myPlot.png");
  
}

function setup() {
  

 var canvas= createCanvas(displayWidth,displayHeight-140);
 engine = Engine.create();
 world = engine.world;  

 console.log("Hi!! Enjoy my game");

  player1 = new player(width/2,height-150,40,40);
  player2 = new player(width/2,height-200,40,40);

  // make witch
  witch = createSprite(200,200,20,20);
  witch.shapeColor = "white";

 


  branchGroup = createGroup();

    Rope = new rope(player1.body,player2.body);
  
}

function draw() {
  background(backgroundImg);  

  fill("black");
  textSize(25);
  text("Keep 'r' pressed to drag the red box with mouse",100,100);

  textSize(50);
  text("score:"+Score,1400,100);

  fill("red");
   player1.display();

   fill("blue");
  player2.display();

 Rope.display();

  randomBranches();

  drawSprites();
  
}

function mouseDragged (){
  if(keyDown("r")){
    Matter.Body.setPosition(player1.body,{x:mouseX, y:mouseY});

  }else{
    Matter.Body.setPosition(player2.body,{x:mouseX, y:mouseY});

  }

  
}
function mouseReleased(){
  Rope.fly();
}



function randomBranches(){
  if(frameCount % 100=== 0 ){
    translate(0,0);
   var branch = createSprite(20,300,200,20);
   branch.addImage("ground_in_air ",floatingGroundImg);
   branch.scale = 0.455;

   branch.velocityY = 10;


    branch.x = Math.round(random(70,1500));
    branch.y = Math.round(random(100,300));
    branch.lifetime = 55;
    branchGroup.add(branch);

    console.log(branch.y)
  
  }


}

function getScore(){
  
}

