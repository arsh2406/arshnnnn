var bg,bgimg
var balloon,balloonimg
var topGround
var bottomGround

function preload(){
    bgimg=loadImage("assets/bg.png")
    balloonimg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
    
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    bg=createSprite(160,480)
    bg.addImage(bgimg)
    bg.scale=1.9
    bottomGround=createSprite(10,height-100,width+400,20)
    topGround=createSprite(10,100,width+400,20)
    bottomGround.visible=false
    topGround.visible=false
    balloon=createSprite(80,height-200)
    balloon.addAnimation("balloon",balloonimg)
    balloon.scale=0.5
}
function draw(){
    background("black")
    if(touches.length>0 || keyDown("space")){
 balloon.velocityY=-7
 touches=[]
    }
    balloon.velocityY+=2
    drawSprites()
}