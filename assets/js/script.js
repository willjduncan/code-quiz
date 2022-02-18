var quizQs = [
{
    q: "Which Survivor has NOT played two seasons in a row?",
    a: "Amanda Kimmel",
    b: "Russell Swan",
    c: "Rupert Boneham",
    d: "Ozzy Lusth",
    answer: "d",
  },
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

var timerEl = document.getElementById("countdown");
var startButtonEl = document.querySelector("#start");
var titleEl = document.querySelector(".title");
var introEl = document.querySelector(".intro-text");
var substanceEl = document.querySelector(".substance");
var answerReturnEl = document.querySelector(".answer-return");
var answerAEl = document.getElementById("pa");
var answerBEl = document.getElementById("pb");
var answerCEl = document.getElementById("pc");
var answerDEl = document.getElementById("pd");
var qi = 0;
var points = 0;

function quiz() {  

    createChoice();
};

var createChoice = function() {
        titleEl.textContent = quizQs[qi].q;

        answerAEl.textContent = quizQs[qi].a;
        answerAEl.className = "answer-op";
        answerBEl.textContent = quizQs[qi].b;
        answerBEl.className = "answer-op";
        answerCEl.textContent = quizQs[qi].c;
        answerCEl.className = "answer-op";
        answerDEl.textContent = quizQs[qi].d;
        answerDEl.className = "answer-op";
}


var answerHandler = function (event) {
    var targetEl = event.target;
    var correct = quizQs[qi].answer; 
    console.log(targetEl);
    if (targetEl.matches("#p" + correct)) {
    console.log("yay");
    points= points + 10;
    answerReturnEl.textContent = "Right!"
    qi++
    createChoice();
    } else if (targetEl.matches(".answer-op")) {
        console.log("uh oh")
        answerReturnEl.textContent = "Wrong!"
        qi++
        createChoice();
    }
};



//TIMER FUNCTION
function countdown() {
    //TIME AMOUNT
    var timeLeft = 120;

    introEl.textContent = "";
    startButtonEl.textContent = "";
    quiz();

    var timeInterval = setInterval(function() {
        if (timeLeft === 0) {
        clearInterval(timeInterval);
        timerEl.textContent = "";
        } else {
        timerEl.textContent = timeLeft + " seconds left";
        timeLeft--;
        }
    }, 1000);
}

startButtonEl.addEventListener("click", countdown);
substanceEl.addEventListener("click", answerHandler);