var trex_running, trex, ground, invisible_ground, cloud_image, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, cloudgroup, obstaclegroup;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
ground_image= loadImage("ground2.png")
cloud_image= loadImage("cloud.png")
obstacle1 = loadImage("obstacle1.png")
obstacle2 = loadImage("obstacle2.png")
obstacle3 = loadImage("obstacle3.png")
obstacle4 = loadImage("obstacle4.png")
obstacle5 = loadImage("obstacle5.png")
obstacle6 = loadImage("obstacle6.png")
  
}
function setup() {
  createCanvas(800, 400);
  trex = createSprite(50,360,10,10)
  trex.addAnimation("trex1",trex_running)
  trex.scale = 0.5
  ground = createSprite(400,380,800,10)
  ground.addImage("ground1",ground_image)
  invisible_ground = createSprite(400,390,800,10)
  invisible_ground.visible = false
  cloudgroup= new Group()
  obstaclegroup= new Group()
}
 
function draw() {
  background(180)
  trex.collide(invisible_ground)
  if(keyDown("space")&& trex.y>=361.5){
  trex.velocityY = -9
  }
  console.log(trex.y)
  trex.velocityY = trex.velocityY+0.5
  ground.velocityX=-3
  if(frameCount%70===0){
  spawnclouds()      
  }
  if(frameCount%60===0){
  spawnobstacles()
  }
  if(ground.x<0){
  ground.x= ground.width/2
  }
  drawSprites();
}
function spawnclouds(){
  var cloud = createSprite(800,random(250,300))
  cloud.addImage("cloud",cloud_image)
  cloud.scale = 0.5
  cloud.velocityX=-3
  cloud.depth = trex.depth
  trex.depth = trex.depth+1
  cloud.lifetime = 810/3
  cloudgroup.add(cloud)
}
function spawnobstacles(){
  var obstacle = createSprite(800,360)
  obstacle.scale = 0.5
  var rand = Math.round(random(1,6))
  switch(rand){
  case 1: obstacle.addImage(obstacle1)
  break
  case 2: obstacle.addImage(obstacle2)
  break
  case 3: obstacle.addImage(obstacle3)
  break
  case 4: obstacle.addImage(obstacle4)
  break
  case 5: obstacle.addImage(obstacle5)
  break
  case 6: obstacle.addImage(obstacle6)
  break
  }
  obstacle.velocityX=-3
  obstacle.lifetime = 810/3
  obstaclegroup.add(obstacle)
} 
  