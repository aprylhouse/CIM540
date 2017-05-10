var questions = ["Shakira is 5'4 in height.",
  "Shakira was born in which country?",
  "How many languages can Shakira speak?",
  "At what age did Shakira record her first album?",
  "Who is Shakira's favorite actor?"
];

var choices = [
  ["False", "True"],
  ["Venzuela", "Colombia", "Mexico", "Brazil"],
  ["1", "2", "3", "4", "5"],
  ["13", "18", "22"],
  ["Mel Gibson", "Brad Pitt", "Hugh Grant"]
];

var answers = ["False", "Colombia", "5", "13", "Hugh Grant"];

var qCounter = 0;

var currentAnswer = 0;

var textArea = 100;

function setup() {
    createCanvas(1000, 600);

}

function draw() {
  background(255);
    textSize(30);
  fill("black");
    text("The Shakira Quiz", 500, 30);
    textSize(18);
  textAlign(CENTER);
  text(questions[qCounter], 0, 100, width, 100);

   for (var choice = 0; choice < choices[qCounter].length; choice++) {
      //console.log(choices[0][choice]);
      fill("black");
      textAlign(CENTER);
      text(choices[qCounter][choice], choice * textArea, height/2, textArea, textArea);
      text(choice+1, choice * textArea, height/2 + 20, textArea, textArea);


   }
}

function keyPressed() {
  console.log(keyCode);

  //49 == 1, 50 == 2, 51 == 3, 52 == 4
  if(keyCode == 49){
    currentAnswer = 0;
  }else if(keyCode == 50){
    currentAnswer = 1;
  }else if(keyCode == 51){
    currentAnswer = 2;
  }else if(keyCode == 52){
    currentAnswer = 3;
  }

  if(answers[qCounter] == choices[qCounter][currentAnswer]){
    console.log("Correct Answer");
  }else{
    console.log("Wrong answer");
  }

  qCounter++
  if (qCounter >= questions.length) {
    qCounter = 0;
  }
}

