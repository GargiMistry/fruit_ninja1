var fruit1, fruit2, fruit3, fruit4,f1,f2,f3,f4,f1d,f2d,f3d,f4d;
var enemy,e1;
var knife,k,play=0, end=1, gameState=play;
var score=0;
var go,go1;
var gameoverS,swoosh,sky,sky1;

function preload(){
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  enemy=loadAnimation("alien1.png","alien2.png")
  knife=loadImage("sword.png");
  go1=loadImage("gameover.png");
  gameoverS=loadSound("gameover.mp3");
  swoosh=loadSound("knifeSwooshSound.mp3");
 sky=loadImage("sky.jpg");
  
}

function setup(){
  createCanvas(600,600);
  
 
 go = createSprite(300,300,10,10);
  go.addImage(go1);
go.scale=1.2;
  
sky1 = createSprite(300,300,10,10); sky1.addImage(sky);
sky1.scale=1.4;
sky1.x=300;
sky.y=300;
   k = createSprite(165,0,5,5);
  k.addAnimation("knife1",knife)
  
  f1g=new Group();
  f2g=new Group();
  f3g=new Group();
  f4g=new Group();
   f1gd=new Group();
  f2gd=new Group();
  f3gd=new Group();
  f4gd=new Group();
  e1g=new Group();
 
}



function draw(){
background("lightblue");
  
  k.scale=0.7;
     
 fill("crimson");
  stroke("white");
  textFont("Georgia");
  textSize(26);
  text("Score:"+score,500,25);
  
  
  
  if(gameState===play){
    
    
     k.y = World.mouseY   ;
   k.x = World.mouseX  ;
  
    go.visible=false;
  
  spawnFr1();
  spawnFr2();
  spawnFr3();
  spawnFr4();
     spawnFr1d();
  spawnFr2d();
  spawnFr3d();
  spawnFr4d();
  spawnE();
 
    
    if(score>4){
      f4gd.visible=true;
      f3gd.visible=true;
      f2gd.visible=true;
      f1gd.visible=true;
      f1g.velocityX=f1g.velocityX+0.4
      f2g.velocityX=f1g.velocityX+0.4
      f3g.velocityX=f1g.velocityX+0.4
      f4g.velocityX=f1g.velocityX+0.4
      e1g.velocityX=e1g.velocityX+0.5
    }
    
    if(f1g.isTouching(k)){
      f1g.destroyEach();
      score=score+1
      swoosh.play();
      
    }
    
    if(f2g.isTouching(k)){
      f2g.destroyEach();
      score=score+1;
      swoosh.play();
      
    }
    
    if(f3g.isTouching(k)){
      f3g.destroyEach();
      score=score+1;
      swoosh.play();
      
    }
    
    if(f4g.isTouching(k)){
      f4g.destroyEach();
      score=score+1;
      swoosh.play();
      
    }
    
  }
  
   if(f1gd.isTouching(k)){
      f1gd.destroyEach();
      score=score+1
      swoosh.play();
      
    }
    
    if(f2gd.isTouching(k)){
      f2gd.destroyEach();
      score=score+1;
      swoosh.play();
      
    }
    
    if(f3gd.isTouching(k)){
      f3gd.destroyEach();
      score=score+1;
      swoosh.play();
      
    }
    
    if(f4gd.isTouching(k)){
      f4gd.destroyEach();
      score=score+1;
      swoosh.play();
      
    }
    
  
  
  
  
  if(k.isTouching(e1g)){
    gameState=end
    gameoverS.play();
  }

  if(gameState===end){
    f1g.destroyEach();
     f2g.destroyEach();
     f3g.destroyEach();
     f4g.destroyEach();
     f1gd.destroyEach();
     f2gd.destroyEach();
     f3gd.destroyEach();
     f4gd.destroyEach();
     e1g.destroyEach();
    score.visible=true;
    k.x=100;
    k.y=500
    go.visible=true;
  
  }
  
  
  drawSprites();
}

function spawnFr1(){
  if(frameCount %200===0){
  f1=createSprite(600,random(100,300),10,10);
  f1.addImage(fruit1);
  f1.scale=0.3;
  f1.velocityX=-3.5;
  f1g.add(f1);
  f1.lifetime=170;
  }
}

function spawnFr2(){
  if(frameCount %400===0){
  f2=createSprite(550,random(300,500),10,10);
  f2.addImage(fruit2);
  f2.scale=0.3;
  f2.velocityX=-3.5;
  f2g.add(f2);
  f2.lifetime=170;
  }
}

function spawnFr3(){
  if(frameCount %340===0){
  f3=createSprite(600,random(50,200),10,10);
  f3.addImage(fruit3);
  f3.scale=0.2;
  f3.velocityX=-3.5;
  f3g.add(f3);
  f3.lifetime=170;
  }
}

function spawnFr4(){
  if(frameCount %500===0){
    
  f4=createSprite(600,random(200,350),10,10);
  f4.addImage(fruit4);
  f4.scale=0.2;
  f4.velocityX=-2.9;
  f4g.add(f4);
  f4.lifetime=170;
  }

}

function spawnFr1d(){
  if(frameCount %500===0){
  f1d=createSprite(0,random(200,400),10,10);
  f1d.addImage(fruit1);
  f1d.scale=0.3;
  f1d.velocityX=1.3*score;
  f1gd.add(f1d);
  f1d.lifetime=170;
    f1gd.visible=false
  }
}

function spawnFr2d(){
  if(frameCount %400===0){
  f2d=createSprite(0,random(400,600),10,10);
  f2d.addImage(fruit2);
  f2d.scale=0.3;
  f2d.velocityX=1.3*score;
  f2gd.add(f2d);
  f2.lifetime=170;
    f2gd.visible=false
  }
}

function spawnFr3d(){
  if(frameCount %440===0){
  f3d=createSprite(0,random(350,200),10,10);
  f3d.addImage(fruit3);
  f3d.scale=0.2;
  f3d.velocityX=1.3*score;
  f3gd.add(f3d);
  f3d.lifetime=170;
    f3gd.visible=false
  }
}

function spawnFr4d(){
  if(frameCount %400===0){
    
  f4d=createSprite(0,random(400,550),10,10);
  f4d.addImage(fruit4);
  f4d.scale=0.2;
  f4d.velocityX=0.9*score;
  f4gd.add(f4d);
  f4d.lifetime=170;
    f4gd.visible=false
  }

}

function spawnE(){
  if(frameCount %580===0){
 e1=createSprite(600,Math.round(random(200,400)),10,10)
  e1.addAnimation("alien",enemy);
  e1.velocityX=-(1.9+(score/10));
  e1g.add(e1);
    
}
}
