//QUIZ ITEMS IN THE FORM OF AN ARRAY
var quizQs = [
// {
//     q: "Which Survivor has NOT played two seasons in a row?",
//     a: "Amanda Kimmel",
//     b: "Russell Swan",
//     c: "Rupert Boneham",
//     d: "Ozzy Lusth",
//     answer: "d",
//   },
  {
    q: "Which of the following is NOT a flex property?",
    a: "text-align",
    b: "align-content",
    c: "justify-content",
    d: "align-items",
    answer: "a",
  },
  {
    q: "Which of the following is the correct way to add a link in HTML?",
    a: "<link src='www.google.com'>",
    b: "<link href='www.google.com>",
    c: "<a src='www.google.com'>",
    d: "<a href='www.google.com'>",
    answer: "d",
  },
  {
    q: "How do you find the maximum of x and y using JavaScript?",
    a: "max(xy);",
    b: "Math.max(xy)",
    c: "max(x,y);",
    d: "Math.max(x,y)",
    answer: "d",
  },
  {
    q: "Which of the following statements will throw an error?",
    a: "document.querySelector('element')",
    b: "if (!boolean) {console.log(false);}",
    c: "var item = target.event.value;",
    d: "localStorage.setItem('item', JSON.stringify(item));",
    answer: "c",
  },
  {
    q: "Which of the following is NOT a legitimate method?",
    a: "getAttribute()",
    b: "findAttribute()",
    c: "setAttribute()",
    d: "hasAttribute()",
    answer: "b",
  },
  {
    q: "What term is used to list options in a switch statement?",
    a: "case",
    b: "option",
    c: "choice",
    d: "value",
    answer: "a",
  },
  {
    q: "How do you find the HTML component with the id of 'item' using JavaScript?",
    a: "document.querySelector('#item')",
    b: "document.querySelector('.item')",
    c: "document.querySelector(#item)",
    d: "document.querySelector('item')",
    answer: "a",
  },
  {
    q: "Which is NOT a valid way to check code?",
    a: "sprinkle console.log() around the code",
    b: "debugger and Chrome DevTools",
    c: "merging the code onto the main branch",
    d: "commenting lines of code out",
    answer: "c",
  },
  {
    q: "Which method will you use to round the number 4.87 to the nearest integer?",
    a: "rnd(4.87);",
    b: "Math.round(4.87);",
    c: "Math.rnd(4.87);",
    d: "round(4.87);",
    answer: "b",
  },
  {
    q: "Which of the following is NOT an event listener in JavaScript?",
    a: "click",
    b: "scroll",
    c: "exit",
    d: "error",
    answer: "c",
  },
]
//VARIABLES
var timerEl = document.getElementById("countdown");
var startButtonEl = document.querySelector("#start");
var titleEl = document.querySelector(".title");
var introEl = document.querySelector(".intro-text");
var scoreCardEl = document.querySelector(".score-card");
var substanceEl = document.querySelector(".substance");
var answerReturnEl = document.querySelector(".answer-return");
var highscoreEl = document.querySelector(".highscore");
var answerAEl = document.getElementById("pa");
var answerBEl = document.getElementById("pb");
var answerCEl = document.getElementById("pc");
var answerDEl = document.getElementById("pd");
var qi = 0;
var points = 0;
const quizTime = 120
var timeLeft = timeLeft;

var createChoice = function() {
    //ONCE THE LAST QUESTION IS SUBMITTED, GO TO ENDGAME
    if (qi >= quizQs.length) {
        endgame ();
    }
    //FORM QUESTION AND ANSWER CHOICES FOR QUIZ QUESTION NUMBER i
    titleEl.textContent = quizQs[qi].q;

    answerAEl.textContent = quizQs[qi].a;
    answerAEl.className = "answer-op";
    answerBEl.textContent = quizQs[qi].b;
    answerBEl.className = "answer-op";
    answerCEl.textContent = quizQs[qi].c;
    answerCEl.className = "answer-op";
    answerDEl.textContent = quizQs[qi].d;
    answerDEl.className = "answer-op";
};

var answerHandler = function (event) {
    var targetEl = event.target;
    var correct = quizQs[qi].answer; 
    console.log(targetEl);
    // IF THE ANSWER CLICKED IS CORRECT, ADD 10 POINTS, TELL THE USER, AND MOVE ON TO THE NEXT QUESTION
    if (targetEl.matches("#p" + correct)) {
        points= points + 10;
        answerReturnEl.textContent = "Correct!"
        qi++
        createChoice();
        //IF THE ANSWER CLICKED IS WRONG, TELL THE USER, SUBTRACT 5 SECONDS, AND MOVE ON TO THE NEXT QUESTION
    } else if (targetEl.matches(".answer-op")) {
        answerReturnEl.textContent = "Wrong!"
        timeLeft = timeLeft -5;
        qi++
        createChoice();
    }
};

function endgame() {
    //ADD THE REMAINING TIME TO THE USER'S SCORE AND REMOVE THE TIMER FROM THE SCREEN
    var finalTime = timeLeft;
    timeLeft = 0;
    points = points + finalTime;
    //REMOVE ANSWER CHOICES FROM THE SCREEN
    substanceEl.textContent = "";
    answerReturnEl.textContent = "";
    //TELL THE USER THEIR SCORE
    titleEl.textContent = "Your final score is " + points + " points!";

    //CREATE INPUT AND BUTTON TO SUBMIT INITIALS
    introEl.textContent = "Enter initials:";
    var initialTypeEl = document.createElement("input");
    initialTypeEl.type = "text";
    initialTypeEl.className = "initial-input"
    initialTypeEl.placeholder = "Type Initials Here";
    introEl.appendChild(initialTypeEl);

    var submitScoreEl = document.createElement("button");
    submitScoreEl.className = "btn";
    submitScoreEl.textContent = "Submit Score"
    submitScoreEl.type = "submit"
    substanceEl.appendChild(submitScoreEl);

    //CREATE LISTENER TO PROCESS THE NAME/SCORE SUBMISSION
    submitScoreEl.addEventListener("click", function(event) {

        //CREATE OBJECT TO STORE NAME AND SCORE
        var user = {
            score: points,
            name: initialTypeEl.value,
        };

        // GET EXISTING DATA
        var existing = localStorage.getItem('users');
        existing = JSON.parse(existing);

        // IF NO EXISTING DATA, CREATE AN ARRAY
        if (!existing) {
            existing = existing ? existing.split(',') : [];
        }

        // IF THERE IS NO EXISTING DATA, GO AHEAD AND ADD THE USER TO THE EMPTY ARRAY
        if (!existing[0]) {
            existing.push(user);
        //OTHERWISE, GO THROUGH THE ARRAY AND PLACE THE SCORE WITHIN IT ACCORDING TO SCORE AMOUNT
        } else {
            for (var i=0; i < existing.length; i++) {
                var oldScore = existing[i].score;
                var newScore = user.score;
                if (newScore > oldScore) {
                    existing.splice(i, 0, user);
                    break;
                } else if ((i+1) === existing.length) {
                    existing.push(user);
                    break;
                }  else {
                    console.log("next");
                } 
            }
        };

        // SAVE NEWLY EDITED ARRAY TO localStorage
        localStorage.setItem('users', JSON.stringify(existing));

        //GO TO HIGHSCORE PAGE
        highscorePage();
    });
};

function highscorePage() {
    //CLEAR OUT ANY PRE-EXISTING CONTENT
    substanceEl.textContent = "";
    titleEl.textContent = "High Scores";
    startButtonEl.textContent = ""
    timeLeft = 0;
    //GET EXISTING ARRAY
    var existing = JSON.parse(localStorage.getItem('users'));

    //GO THROUGH ARRAY AND ADD IT TO THE CONTENT
    for (var i=0; i< existing.length; i++) {
        var entryEl = document.createElement("p");
        entryEl.textContent = existing[i].name + " - " + existing[i].score;
        scoreCardEl.appendChild(entryEl);
    }
    
    //ADD OPTION TO PLAY AGAIN
    introEl.textContent = "play again?";
    var playAgainButtonEl = document.createElement("button");
    playAgainButtonEl.textContent = "Play Again";
    playAgainButtonEl.className = "btn";
    substanceEl.appendChild(playAgainButtonEl);   
    playAgainButtonEl.addEventListener("click", restart);
};

//RELOAD THE PAGE, SO A USER CAN START AGAIN
function restart () {
    location.reload();
}
//CLEAR THE INTRODUCTION AND ENSURE THE VARIABLES ARE RESET TO THEIR ORIGINAL VALUES
function reset() {
    introEl.textContent = "";
    startButtonEl.textContent = "";
    points = 0;
    timeLeft = quizTime;
    qi = 0;
};

//TIMER FUNCTION
function countdown() {
    reset();
    createChoice();
    //SET THE TIME SO THAT IT COUNTS DOWN VISIBLY, AND SO THAT IT GOES TO ENDGAME WHEN THE TIMER RUNS OUT
    var timeInterval = setInterval(function() {
        if (timeLeft <= 0) {
        clearInterval(timeInterval);
        timerEl.textContent = "";
        endgame ();
        } else {
        timerEl.textContent = timeLeft + " seconds left";
        timeLeft--;
        }
    }, 1000);
};

startButtonEl.addEventListener("click", countdown);
substanceEl.addEventListener("click", answerHandler);
highscoreEl.addEventListener("click", highscorePage);