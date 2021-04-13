const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ball,platform,obsBrick1,obsBrick2,
                  obsBrick3,obsBrick4,
                  obsBrick5,obsBrick6,
                  obsBrick7,obsBrick8,
                  obsBrick9,obsBrick10,
                  obsBrick11,obsBrick12;
function preload(){
   
}

function setup(){
   var canvas =  createCanvas(400,400);
   engine = Engine.create();
    world = engine.world;

    obsBrick1 = new ObsBricks(10,10);
    obsBrick2 = new ObsBricks(10,40);
    obsBrick3 = new ObsBricks(10,80);
    obsBrick4 = new ObsBricks(30,10);
    obsBrick5 = new ObsBricks(30,40);
    obsBrick6 = new ObsBricks(30,80);
    obsBrick7 = new ObsBricks(50,10);
    obsBrick8 = new ObsBricks(50,40);
    obsBrick9 = new ObsBricks(50,80);
    obsBrick10 = new ObsBricks(70,10);
    obsBrick11 = new ObsBricks(70,40);
    obsBrick12 = new ObsBricks(70,80);


}

function draw(){
    background(0);

   
    
    obsBrick1.display();
    obsBrick2.display();
    obsBrick3.display();
    obsBrick4.display();
    obsBrick5.display();
    obsBrick6.display();
    obsBrick7.display();
    obsBrick8.display();
    obsBrick9.display();
    obsBrick10.display();
    obsBrick11.display();
    obsBrick12.display();
    
   
    drawSprites();
}