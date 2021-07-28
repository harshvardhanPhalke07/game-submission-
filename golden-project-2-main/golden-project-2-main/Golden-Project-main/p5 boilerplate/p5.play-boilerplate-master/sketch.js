var good,earth, man,man2,enemy, enemyArray=[], score=0
var gameState=0
;
function preload(){
  bg= loadImage("img2.jpeg");
  man=loadImage("old-man-cartoon-icon-.png");
  earth=loadImage("earth image.jpg")

}
function setup() {
  createCanvas(displayWidth,displayHeight);
   man2=createSprite(400, 200, 50, 50);
   man2.addImage(man)
  man2.debug=true
  man2.setCollider("rectangle",0,0,60,150)
  
}
  


function draw() {
  background(bg); 
   
  drawSprites();
  Enemy()
   textSize(30)
   fill("white")
   stroke("white")
  text("The Score is = "+score,displayWidth/2,displayHeight/10)
  
 
man2.x=mouseX
man2.y=mouseY
for(var wut=0;wut<enemyArray.length;wut++){
if(man2.isTouching(enemyArray[wut])){
 enemyArray[wut].destroy()
 score++
}
if (gameState===1){
  text("Yay!! you saved the world !!!!", 25,34)
stroke("white")
  image(earth,0,0,displayWidth,displayHeight)

}

}
if (score== 20){
  gameState = 1
}

}
function Enemy(){
  if (frameCount%60==0){
  enemy=createSprite(displayWidth,random(0,displayHeight),30,30)
  enemyArray.push(enemy)
enemy.shapeColor="#FDF3B5"
var rand = Math.round(random(1,2))
if (rand==1){
  enemy.x=0
enemy.velocityX=5
} else if(rand==2){

    enemy.x=displayWidth
  enemy.velocityX=-5
}


  }
}
