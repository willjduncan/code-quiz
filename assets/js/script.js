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




function countdown() {
    var timeLeft = 120;

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        if (timeLeft === 0) {
        clearInterval(timeInterval);
        timerEl.textContent = "";
        // displayMessage();
        } else {
        timerEl.textContent = timeLeft + " seconds left";
        timeLeft--;
        }
    }, 1000);
}

startButtonEl.addEventListener("click", countdown);