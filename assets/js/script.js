//Declare variables.
var quizContainer = document.querySelector("quiz-container");
var timeEl = document.querySelector("#timer");
var startBtn = document.getElementById("start");
var nextBtn = document.getElementById("next");
var question = document.querySelector(".question");
var answers = document.querySelector("#answers");
var option = document.querySelector(".option");
var questionNumber = 0
var secondsLeft;

//create quiz questions and choices as arrays
var questionList= [
    {
       title:"Commonly used data types do NOT include:",
       choices: ["strings", "booleans", "alerts", "numbers"],
       answer: "alerts"
   },
   {
       title: "The condition in an if / else statement is enclosed within____",
       choices:["quotes", "curly braquets", "parentheses", "square braquets"],
       answer: "parentheses"
   },
   {
       title:"Arrays in JavaScript can be used to store _____",
       choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
       answer: "all of the above"
   },
   {
       title: "String values must be enclosed within _____ whan being assigned to a variable",
       choices: ["commas", "curly brackets", "quotes", "parentheses"],
       answer: "quotes"
   },
   {
       title: "A very useful tool during development and debugging for printing content to the debugger is",
       choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
       answer: "console.log"
   }
   ]
   
   
   // if choices === answer
question.setAttribute("style", "display:none");


// start timer with start button
startBtn.addEventListener("click", function () {
    secondsLeft = 100;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "seconds left!";
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          sendMessage();
        }
    
      }, 1000);    
    console.log ("timer started");
 
    //hide start button
    startBtn.setAttribute("style", "display:none");
    question.setAttribute("style", "display:block");
    //Pop up 1st question
    
    buttonClick();
});

// //load question, choices


function buttonClick() {
    console.log ("you've clicked next");
    answers.innerHTML=""
   
    question.textContent = questionList[questionNumber].title;
    for ( i=0; i<questionList[questionNumber].choices.length ; i++ ){
     var answerBtn = document.createElement("button");
     answerBtn.textContent = questionList[questionNumber].choices[i]
 
     answerBtn.classList.add("option")
     answerBtn.onclick = questionClick
     answers.appendChild(answerBtn)
    }
 
        console.log(this.textContent)
        console.log(questionList[questionNumber].answer)

        console.log(questionNumber)
};



function questionClick () {
    if(this.textContent !== questionList[questionNumber].answer) {
        secondsLeft -= 15;
        questionNumber++  
       }
       else{
           secondsLeft += 15;
           questionNumber++  
       }
    buttonClick();
}


// if questionNumber === questionList.length>>>game 

// //retrieve scores Final score

// //display final score in highscores.html


