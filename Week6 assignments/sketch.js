var puppy0;
var puppy1;
var puppy2;
var puppy3;
var puppy4;

var puppyArray = [];

var puppyIndex = 0;

function setup() {
    createCanvas(640, 480);


    puppy0 = loadImage("MidtermProject/Slide1.jpg");
puppy1 = loadImage("Midtermproject/Slide2.jpg");
puppy2 = loadImage("Midtermproject/Slide3.jpg");
   puppy3 = loadImage("Midtermproject/Slide4.jpg");
   puppy4 = loadImage("Midtermproject/Slide5.jpg");


}

function draw() {
    //image(puppy0, 0,0);
    image(puppyArray, 0, 0);
    

    //console.log(puppyChooser());

}

function mousePressed(){
    puppyIndex = puppyChooser(0,5);
}


 
