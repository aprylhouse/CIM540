var originX, originY;
var points = [];
var canImg, canPos;

function preload(){
  canImg = loadImage('assets/final_watercan.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  originX = width/2;
  originY = height/3;
  canPos = new CanPosition();
}

function draw(){
  background(color('#37b1ff'));
  textAlign(CENTER);
  text('Water the flowers :D', (width/2)-150, 40, 300);
  noStroke();
  if(points.length < 80) points.push(new Water());
  for(var i=0;i<points.length;i++){
    points[i].update();
  }
  canPos.update();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var CanPosition = function(){
  var self = this;
  var tilt, tiltOffsetX;
  self.speed = .1;
  self.offsetX = -36;
  self.offsetY = -60;
  self.update = function(){
  var originX, originY;
var points = [];
var canImg, jetPos;

function preload(){
  canImg = loadImage('assets/final_watercan.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  originX = width/2;
  originY = height/3;
  canPos = new CanPosition();
}

function draw(){
  background(color('#37b1ff'));
  textAlign(CENTER);
  text('Water the flowers :D', (width/2)-150, 40, 300);
  noStroke();
  if(points.length < 80) points.push(new Water());
  for(var i=0;i<points.length;i++){
    points[i].update();
  }
  canPos.update();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var CanPosition = function(){
  var self = this;
  var tilt, tiltOffsetX;
  self.speed = .1;
  self.offsetX = -36;
  self.offsetY = -60;
  self.update = function(){
    if(mouseX && mouseY){
      originX += (mouseX - originX)*self.speed;
      originY += (mouseY - originY)*self.speed;
    }
    tilt = tiltOffsetX = 0;
    if(mouseX-10 > originX){
      tilt = -2;
      tiltOffsetX = 4;
    } else if(mouseX+10 < originX){
      tilt = 2;
      tiltOffsetX = -4;
    }
    if(tilt) shearX(radians(tilt));
    image(canImg, (originX + self.offsetX)+tiltOffsetX, originY + self.offsetY);
  }
}

var Water = function(){
  var self = this;
  self.reset = function(){
    self.originX = self.x = originX;
    self.originY = self.y = originY + 40;
    self.size = 20;
    self.speed = (Math.random()*6)+1;
    self.acceleration = 2;
    self.counter = 0;
  }
  self.update = function(){
    if(self.y <= self.originY+300 && self.size > 0){
      self.y += self.speed*self.acceleration;
      self.acceleration += .02;
      self.size -= .4;
    } else {
      self.reset();
    }
    ellipse(self.x, self.y, self.size);
  }
  self.reset();
}  if(mouseX && mouseY){
      originX += (mouseX - originX)*self.speed;
      originY += (mouseY - originY)*self.speed;
    }
    tilt = tiltOffsetX = 0;
    if(mouseX-10 > originX){
      tilt = -2;
      tiltOffsetX = 4;
    } else if(mouseX+10 < originX){
      tilt = 2;
      tiltOffsetX = -4;
    }
    if(tilt) shearX(radians(tilt));
    image(canImg, (originX + self.offsetX)+tiltOffsetX, originY + self.offsetY);
  }
}

var Water = function(){
  var self = this;
  self.reset = function(){
    self.originX = self.x = originX;
    self.originY = self.y = originY + 40;
    self.size = 20;
    self.speed = (Math.random()*6)+1;
    self.acceleration = 2;
    self.counter = 0;
  }
  self.update = function(){
    if(self.y <= self.originY+300 && self.size > 0){
      self.y += self.speed*self.acceleration;
      self.acceleration += .02;
      self.size -= .4;
    } else {
      self.reset();
    }
    ellipse(self.x, self.y, self.size);
  }
  self.reset();
}