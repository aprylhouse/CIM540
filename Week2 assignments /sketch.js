
var headH=75;
var headW=75;
var headX=250;
var headY=100;

var bodyX=200;
var bodyY=137;
var bodyW=100;
var bodyH=200;



function setup() {
    createCanvas (500,500);
    background (153,255,255);
    
}

function draw() {
    fill (255,255,0);
    ellipse (35,35,30,30);
    fill (102,204,0);
    rect (0,300,500,500);
    fill(102,0,204);
    ellipse (headX, headY,headW,headH);
    fill (125);
    rect (bodyX,bodyY, bodyW,bodyH);
    fill (233,45,67);
    rect (220,167, 60,bodyH/4);
    
    //arms
    rect (135,160,65,30);
    rect (300,160,65,30);
    rect (365,190,30,65);
    rect (105,95,30,65);
    fill(102,0,204);
    ellipse (382,174,30,30);
    ellipse (120,176,30,30);
    
    
    //wheels
    ellipse (bodyX, bodyY+bodyH+17, 30,30);
    ellipse (bodyX+50, bodyY+bodyH+17, 30,30);
    ellipse (bodyX+100, bodyY+bodyH+17, 30,30); 
}