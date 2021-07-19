var garden,rabbit,apple,leaf,orangeLeaf
var gardenImg,rabbitImg;
var leaf1Img,leaf2Img,orangeLeafImg,appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  leaf1Img = loadImage("leaf.png");
  leaf2Img = loadImage("leaf.png");
  orangeLeafImg= loadImage("orangeLeaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;
score = createSprite(10,400,10,10);

createApples();
createLeaves1();
createLeaves2();
createOrangeLeaves();

}


function createApples(){
  apple= createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY=4;
  apple.lifetime=60;
  apple.scale= 0.08;
}
function createLeaves1(){
  leaf1= createSprite(random(50,350),40,10,10);
  leaf1.addImage(leaf1Img);
  leaf1.velocityY=4;
  leaf1.lifetime=80;
  leaf1.scale=0.08;
}
function createLeaves2(){
  leaf2= createSprite(random(50,350),40,10,10);
  leaf2.addImage(leaf2Img);
  leaf2.velocityY=4;
  leaf2.lifetime=80;
  leaf2.scale=0.08;
}
function createOrangeLeaves(){
  orangeLeaf= createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.velocityY=4;
  orangeLeaf.lifetime=80;
  orangeLeaf.scale=0.08;

}


function draw() {
  background(0);
// repeating apple and leaves fall  ('''IMPORTANT''')
  var leaf1 = Math.round(random(1,2));
  if (frameCount % 80 == 0){
    if (leaf1==1){
      createApples();
    }
    else {
      createLeaves1();
      createLeaves2();
      createOrangeLeaves();
    }
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x= World.mouseX;
  drawSprites();
}