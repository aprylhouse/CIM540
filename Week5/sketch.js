//var i=0;
//function setup() {
//    createCanvas (1300,1300);
//    frameRate(60);
//}
//
//function draw() {
//    
//    
//    
//    
////    i = i + 1;
////    
////    if (i>width) { 
////    i=0;}
////    
//    while (i < width){i ++; 
//                      console.log(1);
//    fill(random(255), random(255), random(255));
//    ellipse(random(width), random(height) 10,10);}
////    
////    for( var i=0; i < width; i++){console.log(i);
////    
//    
//    for (var i=0; i < width; i++){
//        console.log(i);
//        fill(random(255), random(255), random(255));
//       rect(random(200), random(height), 10 ,10);
//    }
//    
//  
//}

var randomHello=[];

function setup(){
    
    createCanvas(500,500);
    frameRate(2);
    
    console.log(randomHello.length);
    console.log(typeof(randomHello));
    
    randomHello.push ("hello");
    console.log(randomHello);
    console.log(randomHello[0]);
    
    randomHello.push("bonjour");
    randomHello.push("hola");
    randomHello.push("aloha");
    randomHello.push("shalom");
    randomHello.push("sawubona");
    
    console.log(randomHello);
    console.log(randomHello[randomHello.length-1]);
    console.log(randomHello.length);
    
    for(var i=0; i < randomHello.length; i++){
        text(randomHello[i], random(width), random(height));
    }
}
function draw() {
    background("orange");
    fill("red");
    textSize(30);
    for(var i=0; i < randomHello.length; i++){
        text(randomHello[i], random(width), random(height));
    }
}