//Declare variables.
var quizContainer = document.querySelector("quiz-container");
var timeEl = document.querySelector("#timer");
var startBtn = document.getElementById("start");
var nextBtn = document.getElementById("next");
var question = document.querySelector(".question");
var option = document.querySelector(".option");
var questionNumber = 0
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");

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
    var secondsLeft = 600;
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
    
    question.textContent = questionList[questionNumber].title;
   
    opt1.innerText = questionList[0].choices[0]
    opt2.innerText = questionList[0].choices[1]
    opt3.innerText = questionList[0].choices[2]
    opt4.innerText = questionList[0].choices[3]
    


});

// //load question, choices


nextBtn.addEventListener("click", function () {
    console.log ("you've clicked next");


    for(var i=0; i<questionList.length; i++){
   
    question.textContent = questionList[i].title;
   
    opt1.innerText = questionList[i].choices[0]
    opt2.innerText = questionList[i].choices[1]
    opt3.innerText = questionList[i].choices[2]
    opt4.innerText = questionList[i].choices[3]

    }

    
});





// //check users answer
 if (questionList.choices == questionList.answer) {
    console.log ("Your answer is correct!")
 }
else {
    console.log ("your answer is incorrect")
    //and deduct time from timer
    //   --seconds
}


// //retrieve scores Final score

// //display final score in highscores.html


