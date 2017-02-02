var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60;
var bacgroundColor= (0,0,0);

var eye1X=100;
var eye1Y=100;

var eye2offset=300;

var randNum =0;

var mapX=0;

function setup() {
    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background(125);
    noStroke();
    randNum=random(256); //0-255
    console.log(randNum);
    console.log("width: " + width + " " + "height: "+ height);
}

function draw() {
    randNum=random(256);
    background(bacgroundColor);
    noStroke ();
    
    mapX= map(mouseX,0,width,-10,10);
    // x , y , width, height
    //eye1
    fill (255,255,255);
    ellipse(eye1X, eye1Y,100,100);
    fill (0,103,200);
    ellipse(eye1X+mapX, eye1X, 50,50);
    
    //eye2
    fill (255,255,255);
    ellipse(eye1X+eye2offset, eye1Y, 100,100);
    fill (0,103,200);
    ellipse(eye1X+eye2offset+mapX, eye1X, 50,50);

    //nose
    fill (255,130,0);
    //triangle (x1,y1,x2,y2,x3,y3);
    triangle (250,200,280,230,220,230);
    
    //mouth
//    fill(255,255,255);
//    rect(mouthX, mouthY, mouthW, mouthH);
//    stroke (0,0,0);
//    strokeWeight (1);
//    line(mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
//    noStroke ();
    
    //arc
    //arc(x,y,width,height,start,stop,mode);
    fill(255,150,150);
    arc(250,260,300,100,0,PI);
  fill (0,0,0);
    arc(250,260,300,50,0,PI);
    fill(255,150,150);
    arc(250,260,300,49,0,PI);
    fill (255,0,0);
    arc(250,285,50,80,0,PI);
    
    ellipse (mouseX,mouseY,10,10);
}

//interactions 

function mousePressed(){
   bacgroundColor= 'pink';
    
}
