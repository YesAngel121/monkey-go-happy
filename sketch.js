
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background(255);
  
  if(ground.x<0){
    ground.x =ground.width/2;
  }
  
  if(keyDown("space") && monkey.y>300){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
  
}

function spawnBananas() {
  
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200,280));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    banana.lifetime = 200;
    
   
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(400,330,40,10);
   
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -7;
    
    
    obstacle.lifetime = 200;
    
   
    
    obstacleGroup.add(obstacle);
  }
}




