
var bowImage  , green_balloonImage , blue_balloonImage , 
    red_balloonImage  , pink_balloonImage ,  backgroundImage;

var score;

  function preload(){

       backgroundImage = loadImage("background0.png");
bowImage = loadImage("bow0.png");
arrowImage=loadImage("arrow0.png");
red_balloonImage = loadImage("red_balloon0.png");
green_balloonImage = loadImage("green_balloon0.png");
pink_balloonImage = loadImage("pink_balloon0.png");
blue_balloonImage = loadImage("blue_balloon0.png");


  
  
}

function setup() {
            createCanvas(600 , 600);

                 background = createSprite(0,0,600,1000);
                  background.addImage(backgroundImage);
                  background.scale = 2.5  ;


                      bow = createSprite( 480,220,20 ,50) ;
                            bow.addImage(bowImage)
                        bow.scale=1;

  redballoonset = new Group();
blueballoonset = new Group;
  greenballoonset = new Group;
pinkballoonset = new Group ; 
arrowset = new Group;        
  edges = createEdgeSprites();

  score=0;
  
}

function draw() {

   background.velocityX = -3 ;
  

    if (background.x < 0){
      background.x = background.width/2;
    }
  
        bow.y=mouseY
  
      
  
  bow.collide(edges);
 

  
  
  
  if (keyDown("space")) {
    var arror = createArrow();
    arrow.addImage(arrowImage);
     arrow.y = bow.y;
       createArrow();

  }
  if(arrowset.isTouching(redballoonset)){
    redballoonset.destroyEach();
    arrowset.destroyEach();
    score = score+1;
  
  }

      if(arrowset.isTouching(greenballoonset)){
    greenballoonset.destroyEach();
    arrowset.destroyEach();
    score = score+2;
  
  }
  
   if(arrowset.isTouching(blueballoonset)){
    blueballoonset.destroyEach();
    arrowset.destroyEach();
    score = score+4;
  
  }
   
    if(arrowset.isTouching(pinkballoonset)){
    pinkballoonset.destroyEach();
    arrowset.destroyEach();
    score = score+1;
  
  }
  var select_balloon = Math.round(random(1,4));
 // console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  
  
  
   drawSprites(); 
    text("Score: "+ score, 509,50);
//ddddddddscore=score+Math.round(getFrameRate()/60);
  
}
    
    
  
  function createArrow() {
  arrow= createSprite(485 , 225 , 5 , 5);
  arrow.velocityX = -6;
 arrow.scale = 0.3;
    arrowset.add(arrow);
  return arrow;
    
  }
  
  function redBalloon(){
     var redballoon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redballoon.addImage(red_balloonImage);
  redballoon.velocityX = 7;
  redballoon.lifetime = 50;
  redballoon.scale = 0.1;
    redballoonset.add(redballoon);
}

  
function blueBalloon() {
  var blueballoon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blueballoon.addImage(blue_balloonImage);
  blueballoon.velocityX = 7;
  blueballoon.lifetime = 50;
  blueballoon.scale = 0.1;
  blueballoonset.add(blueballoon);
}

    
function greenBalloon() {
  var greenballoon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenballoon.addImage(green_balloonImage);
  greenballoon.velocityX = 7;
  greenballoon.lifetime = 50;
  greenballoon.scale = 0.1;
  greenballoonset.add(greenballoon);
}


function pinkBalloon() {
  var pinkballoon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkballoon.addImage(pink_balloonImage);
  pinkballoon.velocityX = 7;
  pinkballoon.lifetime = 50;
  pinkballoon.scale = 1;
 pinkballoonset.add(pinkballoon);
}