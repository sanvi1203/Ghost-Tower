var tower,towerImg;
var door,doorImg;
var climber,climberImg;
var doorGroup,climberGroup;
var ghost,ghostimg;
var spookySound;

var PLAY = 1;
var END = 0;
var gamestate = 1;

function preload () {
  
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage ("climber.png");
  ghostimg = loadImage("ghost-standing.png")
  spookySound = loadSound("spooky.wav")
}

function setup () {
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.velocityY = 2;
  tower.addImage(towerImg);
  
  ghost = createSprite(300,300,20,20);
  ghost.scale = 0.4;
  ghost.addImage(ghostimg);
  
  doorGroup = new Group ();
  climberGroup = new Group();
  

  
 
  
}

function draw () {
  background("white");
  
 // spookySound.play;
 // spookySound.loop();
  
  
  if (tower.y > 400) {
    tower.y = 300
  }
  doors(); 
  
  
  
  if (keyDown("LEFT_ARROW")) {
    ghost.x = ghost.x -5;
  }
  
    if (keyDown("RIGHT_ARROW")) {
    ghost.x = ghost.x +5;
  }
  
  
  
  if (keyDown("space")) {
    ghost.velocityY = -5;
  }
  ghost.velocityY = ghost.velocityY + 0.8;
  
 // if (ghost.isTouching(door) || ghost.isTouching(climber)) {
  //  tower.velocityY = 0;
   // ghost.velocityY = 0;
  //}
  
  
  drawSprites();
  
}

function doors () {
  
  if (frameCount%150 === 0) {
  door = createSprite(200,-50);
  door.addImage(doorImg);
  door.x = Math.round(random(100,400))
  door.velocityY = 2;
  door.lifetime = 250;
  ghost.depth = door.depth;
  ghost.depth = ghost.depth +1 ;
    
  climber = createSprite(200,10);
  climber.addImage(climberImg);
  climber.velocityY = 2;
  climber.x = door.x;
     climber.lifetime = 250;
  
  doorGroup.add(door);
  
  climberGroup.add(climber);
  }
}
