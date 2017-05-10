//var num= 100; 
//var num2= 50;
//var message= "hello";
//var anothermessage= "goodbye";
//var BooleanVar= true;
//var BooleanVar2= false;
//
//function setup() { 
//console.log(num);
//console.log("num+num2=" + (num+num2));
//console.log(num*num2);
//console.log(num/num2);
//console.log(message);
//console.log(message+anothermessage);
//console.log(message+ " "+ anothermessage);
//console.log(BooleanVar);
//console.log(BooleanVar2);
//
//var message2= "this will only work in the setup"
//console.log(message2);
//    
//// This is not going to work
//console.log(message*anothermessage);
//
///*
//If you want to
//write more stuff...
//use a multiple line comment. 
//*/ 
//}
//
//function draw() {
//console.log(num);
//  
//}

var recX=50;
var recY=70;
var recW=150;
var recH=150;

function setup() {
    createCanvas(500,500);
    background(255,255,0);
    //background(125) = grayscale 
    console.log("width:"+width+ " "+ "height"+height);
    
}

function draw() {
    //x, y, wdith, height
    ellipse(width/2,height/2,50,50);
    // width/2, height/2 = centered object 
}

