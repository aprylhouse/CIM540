var counter = 0;
var ballDir = true;

function setup() {
    createCanvas(1000, 100)
}

function draw() {
    background(255);
    counter = counter + 1;
    console.log(counter);
    //fill("red");
    ellipse(counter, height / 2, 25, 25);

    counter = counter - 1;

    //    ball goes one-way
    //     if(counter<width){
    //        counter=counter+2;
    //    }

    if (counter <= 0) {
        //limit1
        ballDir = true;
        console.log("left hit:" + counter);
    }

    if (counter >= width) {
        //limit2
        ballDir = false;
        console.log("right hit" + counter);
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
    // change color

    if (counter >= 0 && counter <= 200) {
        fill("blue");
    } else if (counter >= 200 && counter <= 400) {
        fill("green");
    } else if (counter >= 400 && counter <= width) {
        fill("red");
    } else {
        fill("yellow");
    }

}