var slide0;
var slide1;
var slide2;
var slide3;
var slide4;

var slideArray = [];

var slideIndex = slideChooser;


function setup() {
    createCanvas(1000,1000);

 slideArray.push(loadImage("MidtermProject/slide1.jpg"));
     slideArray.push(loadImage("MidtermProject/slide2.jpg"));
     slideArray.push(loadImage("MidtermProject/slide3.jpg"));
     slideArray.push(loadImage("MidtermProject/slide4.jpg"));
     slideArray.push(loadImage("MidtermProject/slide5.jpg"));
    


}

function draw() {

}

function mousePressed(){
    slideIndex = slideChooser();
}
