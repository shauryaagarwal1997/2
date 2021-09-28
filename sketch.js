var bg1,bg1I;
var bg2,bg3;
var animation;
var man;
var coinImg,obstacleImg;
function preload(){
  bg1I=loadImage("bg1.jpg");
  animation=loadAnimation("1.png","2.png");
  coinImg=createImg("coin.gif");
  obstacleImg=loadImage("rock.jpg");
}
  function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1=createSprite(windowWidth/2, windowHeight/2, 50,50);
  bg1.addImage(bg1I);
  bg2=createSprite(bg1.x+windowWidth,windowHeight/2, 50,50);
  bg2.addImage(bg1I);
  bg1.velocityX=-5;
  bg2.velocityX=-5;

  man=createSprite(150,windowHeight/2+250,100,100);
  man.addAnimation("ani",animation);
}

function draw() {
  if(bg2.x===windowWidth/2){
    bg1.x=windowWidth/2;
    bg2.x=bg1.x+windowWidth;
    bg1.velocityX=-4;
    bg2.velocityX=-4;
  }

  drawSprites();

  coins();
  obstacles();

}
function coins(){
  var coinS,coinI;
  if(frameCount % 70 === 0){
  coinS=createSprite(width+30,random(height/2+100,height/2+300),100,100);
  coinS.velocityX=random(-13,-19);
  coinS.lifetime=width*2/coinS.velocityX;

  coinImg.position(coinS.x,coinS.y);
  }
}

function obstacles(){
  var obstacleS,obstacleI;
  if(frameCount % 90 === 0){
  obstacleS=createSprite(width+30,height/2+300,100,100);
  obstacleS.velocityX=random(-17,-21);
  obstacleS.lifetime=width*2/obstacleS.velocityX;

  obstacleS.addImage(obstacleImg);
  }
}