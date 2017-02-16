var colorArray=["white","orange","black","pink","red","purple"];
var counter=0;
//var eColor= 0;
//var counter=0;
//var bgColor="white";

// homework counter should be minus when top and plus when bottom, y position is going to be counter 


function setup() {
    createCanvas(400,400);
    console.log(colorArray[counter]);
    console.loge(colorArray.length);
//    eColor= color(235,122,79);
}

function draw() {
    background(colorArray[counter]);
//    background(bgColor);
//    fill(eColor);
//    ellipse(width/2, height/2,200,200);
//    
//    if(mouseX>width/2){
//        eColor=
//        color(200,262,15);
//    }else{
//        eColor=
//            color(123,45,222);
//    }
//    
//    if(counter ==1){
//        bgColor="orange";
//    }else if(counter ==2){
//        bgColor="pink";
//    }else if(counter ==3){
//        bgColor="red";
//    }else{
//        bgColor="white";}
//    if(counter>3){
//        counter=0;
//    }
}

function mousePressed(){
    counter=counter+1;
//    if(counter>5){
//        counter=0;
// or can do//
    if(counter>colorArray.length-1){ 
    counter=0;
    }
//    counter = counter+1;
//    console.log(counter);

}