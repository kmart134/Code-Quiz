//Declare variables.
var quizContainer = document.querySelector("quiz-container");
// start quiz and timer
var start = addEventListener
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";




      

      var timerEl = document.querySelector(".timerEl")
var secondsLeft = 10;


function setTime() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left!";

    if(secondsLeft === 0) {
     clearInterval(timerInterval)
}}, 1000);

//load question, choices

//check users answer

//retrieve scores Final score

//display final score in highscores.html


var currentQuestion = 0;
var score = 0;
var c = 60;
var totquestions = questions.length;
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("next");
var subBtn = document.getElementById("submit")
var resultContainer = document.getElementById("result")
var correctAudio = new Audio("Sounds/correctAnswer.mp3");
var startBtn = document.getElementById("start");
var subBtn = document.getElementById("submit");
var result = document.getElementById("result");


//Load question and choices for user to select.
@@ -27,24 +27,23 @@ function loadQuestion (questionIndex){
};
//Go through all questions, take user option and check if that is the correct answer. If answer is correct add to score, if user is wrong go to next question. If there are not more questions stop clock and display score.
function loadNextQuestion(){
    //User clicks and checks answer
    var userChoice = document.querySelector('input[type=radio]:checked');
    //If user does not select an option
    if(!userChoice){
        alert("Please select answer");
        alert("Please select answer.");
        return;
    }
    var answer = userChoice.value;
    if(questions[currentQuestion].answer === answer){
        score++;
        correctAudio.play();
        score += 1;
    }
    userChoice.checked = false;
    currentQuestion++;

    //When user answers the last question  write final score in result element.
    if (currentQuestion == totquestions){
        document.getElementById("result").innerHTML = score;
        startBtn.style.visibility='hidden';
        nextBtn.style.visibility='hidden';
        quizContainer.style.display="none";
        result.style.display="";
        result.textContent = score;
        return;
    }
    loadQuestion(currentQuestion);
}
//Calculate score.
// function calcScore(){
//     document.getElementById("result").score;
//     return;
// }
//Stopwatch
var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c == 0) {
        clearInterval(myTimer);
       }
    }
}