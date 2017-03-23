var frameAmounts = 9;
var frameArray = [];
var currentFrame = 0;
var interval = 1000;
var pMillis = 0;

function preload() {
  for (var frames = 0; frames < frameAmounts; frames++) {
    var frameString = "assests/welcome" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);

    
  }
}//close for preload 

function setup() {
    createCanvas(10000,10000);
    frameRate (30);
} // close for setup

function draw() {
    console.log(millis());
    image(frameArray[currentFrame], 0, 0); // this must be above everything else in order to loop
    if (millis()-pMillis >= interval){currentFrame++; pMillis=millis();}
  if (currentFrame == frameArray.length) {
    currentFrame = 0; //this allows it to loop 
}
    
} // close for draw 

function mousePressed() {
    for (var frames = 0; frames < frameAmounts; frames++) {
    var frameString = "assests/thankyou" + frames + ".jpg";
    frameArray[frames] = loadImage(frameString);
    }
}

