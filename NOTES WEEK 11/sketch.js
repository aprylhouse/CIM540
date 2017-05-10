//// EXAMPLE I
//var bubbleX = 0;
//var bubbleY = 200;
//var bubbleSize = 100;
//
//function setup() {
//    createCanvas(1000, 400);
//}
//
//function draw() {
//    background(255);
//    display();
//    move();
//    var checking = checkPos();
//
//    if (checking == true) {
//        bubbleX = 0;
//    }
//    if (mouseIsPressed) {
//        moveFaster(10);
//    }
//}
//
//function display() {
//    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
//}
//
//function move() {
//    bubbleX++;
//}
//
//function moveFaster(howFast){
//    bubbleX = bubbleX + howFast;
//}
//function checkPos() {
//    if (bubbleX > width) {
//        return true;
//    } else {
//        return false;
//    }
//} //close for checkPos
//// END OF EXAMPLE I

//EXAMPLE II
var bubbleX = 0;
var bubbleY = 200;
var bubbleSize = 100;
var bubble0;

function setup() {
    createCanvas(1000, 400);
    bubble0 = new bubble(100, 100, 100);
}

function draw() {
    background(255);
    bubble0.display();
    bubble0.move();
}

function display() {
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
}

function move() {
    bubbleX++;
}

function moveFaster(howFast) {
    bubbleX = bubbleX + howFast;
}

function checkPos() {
    if (bubbleX > width) {
        return true;
    } else {
        return false;
    }
} //close for checkPos

function bubble(tempX, tempY, tempDiameter) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;

    this.Display = function () {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.move = function () {
        this.x++;
    }
} //close of functionbubble
//END OF EXAMPLE II