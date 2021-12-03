var bg, bgImg
var bottomGround
var topGround
var boy, boyImg
var BoySideImg

function preload(){
bgImg = loadImage("assets/cyber city.png")

boyImg = loadAnimation("assets/boy.png", "assets/boyfire.png") 
boySideImg = loadAnimation ("assets/boyBlueSide.png", "assets/boyRedSide.png", "assets/boyOrangeSide.png",)
}

function setup(){

//background image
createCanvas(1000,600);
bg = createSprite(165,485,500,500);
bg.addImage(bgImg);
bg.scale = 1.2
bg.velocityX = -3;
bg.x = bg.width/4 ;

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating boy    
boy = createSprite(100,200,20,50);
boy.addAnimation("boy", boyImg);
boy.addAnimation("boySide", boySideImg )
boy.scale = 0.4;  


}

function draw() {
  
  background("black");
        
          //making the hot air boy jump
          if(keyDown("space")) {
            boy.velocityY = -6 ;
          }

          if(boy.y < 220){
            boy.changeAnimation("boySide", boySideImg); 
          }

          //adding gravity
          boy.velocityY = boy.velocityY + 2;


          if(bg.x <= 0){
          bg.x = bg.width/2 ;
          } 
   
        drawSprites();
        
}
