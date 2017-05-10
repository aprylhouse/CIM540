var colorArray = ["magenta", "orange", "yellow", "cyan"];
var counter = 0;
var frameAmounts = 9;
var frameArray = [];
var currentFrame = 0;
var interval = 1000;
var pMillis = 0;
var framenumber = 2;

function preload() {
    for (var frames = 0; frames < frameAmounts; frames++) {
        var frameString = "assests2/welcome" + frames + ".png";
        frameArray[frames] = loadImage(frameString);
    }
} //close for preload 

function setup() {
    createCanvas(10000, 10000);
    fullscreen();
    frameRate(framenumber);
    console.log(colorArray[counter]);
    console.log(colorArray.length);

} //close of setup


function draw() {
    background(colorArray[counter]);
    counter = counter + 1;
    if (counter > colorArray.length - 1) {
        counter = 0;
    }
    console.log(millis());
    image(frameArray[currentFrame], 0, 0); // this must be above everything else in order to loop
    if (millis() - pMillis >= interval) {
        currentFrame++;
        pMillis = millis();
    }
    if (currentFrame == frameArray.length) {
        currentFrame = 0; //this allows it to loop 


    } //close of draw

    function mousePressed() {
        for (var frames = 0; frames < frameAmounts; frames++) {
            var frameString = "assests/thankyou" + frames + ".png";
            frameArray[frames] = loadImage(frameString);
        } //close to mousePressed 
    }
}