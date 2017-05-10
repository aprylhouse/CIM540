var counter = 0;
var ballDir = true;


function setup() {
    createCanvas(1200, 500);
    noStroke();
}

function draw() {
    background(255);
    counter = counter + 1;
    console.log(counter);
    
    if (counter >= 0 && counter <= 250) {
        fill("blue");
    rect(0,0,1200,250);
} 
    if (counter >= 250 && counter <=500) { 
        fill("red");
    rect(0,250,1200,250);}
    fill("purple");
    ellipse(600, counter, 25, 25);

    

    counter = counter - 1;

    //    ball goes one-way
    //     if(counter<width){
    //        counter=counter+2;
    //    }

    if (counter <= 0) {
        //limit1
        ballDir = true;
        console.log("top hit:" + counter);
    }

    if (counter >= height) {
        //limit2
        ballDir = false;
        console.log("bottom hit" + counter);
    }

    if (ballDir == true) {
        counter = counter + 1;
    }

    if (ballDir == false) {
        counter = counter - 1;
    }
    // consolidated in one command
    if (ballDir == true) {
        counter = counter + 1;
    } else {
        counter = counter - 1;
    }
    


   
}