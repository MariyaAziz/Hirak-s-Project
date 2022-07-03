const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

 var engine,world;
 var ground1,ground2;
var bubbles=[];
var links=[];
var boards=[];

function preload(){
  coinImg=loadImage('coin.png');
  powerImg=loadImage('power.png');
  diamondImg=loadImage('diamond.png')
}

function setup() {
  createCanvas(1000,700);

  engine = Engine.create();
  world = engine.world;
  
  ground1=new Ground(width/2,height-10,width,20);
  ground2=new Ground(width/2,0,width,40);
  ground3=new Ground(width/2,height/2,width,40)
  


  gun=new Gun(width/2,height-100,200,50)

  for(var i=0;i<10;i++){
    num=Math.round(random(1,3))
    if(num==1){
      img=coinImg
    }
    else if(num==2){
      img=diamondImg
    }
    else{
      img=powerImg
    }
    //x=random(100,800);
    setTimeout(()=>{
      x=width;
      y=random(70,100);
      
      board=new Board(x,20,50,5)
      bubble=new Bubble(x,y,40,img)
      link=new Link(board.body,bubble.body)
      boards.push(board)
      bubbles.push(bubble)
      links.push(link)
    },1500)
      
    
    
    
  }
}


function draw() 
{
  background("red");
  Engine.update(engine);
  
  ground1.display();
  

  gun.display();

  for(var i=0;i<bubbles.length;i++){
    
    //Matter.Body.setVelocity(boards[i].body,{x:random(-2,2),y:0})
    
    boards[i].display();
    bubbles[i].display();
    links[i].display();
    Matter.Body.setStatic(boards[i].body,false)
    Matter.Body.setVelocity(boards[i].body,{x:-2,y:-2})

  }
  
  ground2.display();
  ground3.display();
}

