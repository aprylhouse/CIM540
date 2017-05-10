var originX;
var originY;
var points = [];
var canImg;
var canPos;
var frameAmount = 4;
var frameArray = [];
var currentFrame = 0;
var interval = 1000;
var pMillis = 0;
var song;
var birds;
var flyingbirds;
var bg;
var x;
var y;
var sun;
var flower;
var flower2;
var flower3;
var analyzer;

function preload() {
	song = loadSound('assets/happyjingle.mp3');
	canImg = loadImage('assets/final_watercan.png');
	flyingbirds = loadImage('assets/flyingbirds.png');
	bg = loadImage('assets/skygrass.jpg');
	sun = loadImage('assets/sun.png');
	flower = loadImage('assets/flower.png');
	flower2 = loadImage('assets/flower2.png');
	flower3 = loadImage('assets/flower3.png');
	for (var frames = 0; frames < frameAmount; frames++) {
		var frameString = "assets/couple" + frames + ".png";
		frameArray[frames] = loadImage(frameString);
	}
}

function setup() {
	createCanvas(1275, 700);
	noCursor();
	song.loop();
	//initBirds();
	x = width / 2;
	y = height / 2;
	analyzer = new p5.Amplitude();
	analyzer.setInput(song);
	originX = width / 2;
	originY = height / 3;
	canPos = new CanPosition();
}


function draw() {
	background('#33ccff');
	textSize(16);
	textAlign(LEFT, TOP);
	fill(255,255,255);
	text("sprinkle the water across the screen to make flowers appear!", 800,50);	
	fill('green');
	rect(0, 500, width, 250);
	var rms = analyzer.getLevel();
	image(sun, 50, 50,10+rms*500, 10+rms*500);
  

	    image(frameArray[currentFrame], 0, 0);
	    if (millis() - pMillis >= interval) {
	        currentFrame++;
	        pMillis = millis();
	    }
	    if (currentFrame == frameArray.length) {
	        currentFrame = 0;
	    }

	image(flyingbirds, x, y);
	x = x - 1;
	y = 100;

	// Reset 
	if (x < -200) {
		x = width;
	}

	fill('#37b1ff');
	noStroke();
	if (points.length < 80) points.push(new Water());
	for (var i = 0; i < points.length; i++) {
		points[i].update();
	}
	canPos.update();

	if (mouseX < 300) {
		image(flower, 0, 0);
	}
	if ( mouseX > 300 && mouseX < 900) {
		image (flower2,0,0);
	}
	if (mouseX > 900 ){
		image (flower3,0,0);
	}
} // close to draw 


var CanPosition = function () {
	var self = this;
	var tilt, tiltOffsetX;
	self.speed = .1;
	self.offsetX = 0;
	self.offsetY = 0;
	self.update = function () {
		if (mouseX && mouseY) {
			originX += (mouseX - originX) * self.speed;
			originY += (mouseY - originY) * self.speed;
		}
		tilt = tiltOffsetX = 0;
		if (mouseX - 10 > originX) {
			tilt = -2;
			tiltOffsetX = 4;
		} else if (mouseX + 10 < originX) {
			tilt = 2;
			tiltOffsetX = -4;
		}
		if (tilt) shearX(radians(tilt));
		image(canImg, (originX + self.offsetX) + tiltOffsetX, originY + self.offsetY);
	}
}

var Water = function () {
	var self = this;
	self.reset = function () {
		self.originX = self.x = originX;
		self.originY = self.y = originY + 145;
		self.size = 20;
		self.speed = Math.random() + 1;
		self.acceleration = 2;
		self.counter = 0;
	}
	self.update = function () {
		if (self.y <= self.originY + 300 && self.size > 0) {
			self.y += self.speed * self.acceleration;
			self.acceleration += .02;
			self.size -= .4;
		} else {
			self.reset();
		}
		ellipse(self.x, self.y, self.size);
	}
	self.reset();
}

function mousePressed() {
	if (song.isPlaying()) { // .isPlaying() returns a boolean
		song.pause(); // .play() will resume from .pause() position
		background(255, 0, 0);
	} else {
		song.play();
		background(0, 255, 0);
	}
}