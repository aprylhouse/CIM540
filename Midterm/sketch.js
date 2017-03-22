var colorArray= ["white", "orange", "yellow", "pink"];
var counter =0;

function setup () {
    createCanvas (1280,647);
    console.log(colorArray[counter]);
    console.log(colorArray.length);
    
} //close of setup

function draw () {
    background(colorArray[counter]);
    
} //close of draw

function mousePressed(){
    counter=counter+1;
    if(counter>colorArray.length-1){ 
    counter=0;
} //close of mousePressed
}