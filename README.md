# code-quiz
Challenge Week 4

## Description

AS A coding boot camp student

I WANT to take a timed quiz on JavaScript fundamentals that stores high scores

SO THAT I can gauge my progress compared to my peers

This assignment is aimed at combining my skills with HTML, CSS, and JavaScript into one great product: a coding quiz. By completing the assignment I will gain greater familiarity with the critical tools I've learned so far and gain confidence in my ability to handle bigger projects on my own. 

The coding quiz, once completed, will be a useful way to test what I've learned so far while also challenging whatever peers who may wish to test their knowledge. The questions will be arranged in a way that they will be easy to alter and add to, which means that I can update the questions to more challenging ones that also span a greater breadth of coding skills as I continue to learn in the bootcamp.

My job is to build the website so that:

GIVEN I am taking a code quiz

WHEN I click the start button

THEN a timer starts and I am presented with a question

WHEN I answer a question

THEN I am presented with another question

WHEN I answer a question incorrectly

THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0

THEN the game is over

WHEN the game is over

THEN I can save my initials and score

First, I wrote the basic HTML, including the introduction and a few empty divs that I'd fill later on. I added a little bit of CSS next to give it a basic, but pleasant appearance. Then I created my questions, forming it in an array. 

Next, I added a timer that would start once the Begin button was clicked. From there, I focused on finding a way to run through my array. I initially tried a for loop, but I couldn't manage to find a way to get the for loop to wait for a response click before moving on to the next question. Instead, I dissembled the for loop and made the quiz move on to the next array object by adding one to the index variable and calling the createChoice function again. This worked. 

Once the test was able to run through each question through clicking answer choices, I set up conditions to tell the user whether their answers were right or wrong, and created a variable to add up points. 

<!-- From there, I created the endgame function, which would tell the user their score and have them submit their initials. I found a way to save the first submission to localStorage, but struggled to find a way to arrange the stored names and scores in order of highscore. MORE -->

After I solved that, I added the final touches to the high score page, making sure I could retrieve those stored scores. From there, I cleaned up the code, added aspects like subtracting time for wrong questions, and added more CSS to give the new elements an acceptable aesthetic. 


Now, when the user goes on, they see a home screen from which they can either begin the quiz or visit the high score page. The quiz runs through every question, logging the correct and wrong answers and keeping track of both the score and the time. When the quiz is finished, either by time-default or by completion, the user is told their score and is prompted to submit it, where it will be stored along with previous scores. If the player wishes to play again, there is a button redirecting them to the opening title.  


## Installation

<!-- My repository on GitHub is named password-generator. The link to this repository is below.

[https://github.com/willjduncan/password-generator.git](https://github.com/willjduncan/password-generator.git)


The link to the live website is below: 

[https://willjduncan.github.io/password-generator/](https://willjduncan.github.io/password-generator/) -->


## Usage

<!-- Screenshots are shown of the code near the end, but still incorrect. Note the use of console.log and the debugger being used to try and follow the code, as well as the use of commentary to categorize each section of code. 

![screenshot midwork part 1](/assets/images/screenshot-midwork-1.png)
![screenshot midwork part 2](/assets/images/screenshot-midwork-2.png)


A final screenshot of the completed website in DevTools is added as to show how Chrome DevTools was used. Note in the Watch section three of the variables I tried to follow to solve my debugging 

![screenshot on DevTools](/assets/images/screenshot-devtools.png) -->

## Credits

No classmates or instructors were used in the making of this website. The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/), as suggested by the README Guide aforementioned. The WHEN/THEN section of this README was taken directly from the homework assignment Acceptance Criteria. The Robot-Gladiator project of Module 3, the Taskinator project of Module 4, the in-class assignments of week 4, and the CSS of Run-Buddy, were all used as examples. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success. Data-flair.training has a JavaScript quiz which was used as inspiration, though no question was directly copied into my quiz. Coolers.co was used to help pick the CSS colors. 

## License

MIT License

Copyright (c) [2022] [Will Duncan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.





TO-DO
1. finish the high score page
2. make sure multiple scores on the high score page appear
3. 
9. connect high score page to first page, and make sure when you go there, the timer cuts out.
10. add README
11. SUBTRACT TIME FROM THE CLOCK FOR EACH WRONG ANSWER

