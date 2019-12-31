var content = document.getElementById("content");
var startButton = document.getElementById("startbutton");
var correctOne = document.getElementById("correctOne");
var correctTwo = document.getElementById("correctTwo");
var correctThree = document.getElementById("correctThree");
var correctFour = document.getElementById("correctFour");
var falseOne = document.getElementById("falseOne");
var falseOneTwo = document.getElementById("falseOneTwo");
var falseOneThree = document.getElementById("falseOneThree");
var falseTwo = document.getElementById("falseTwo");
var falseTwoTwo = document.getElementById("falseTwoTwo");
var falseTwoThree = document.getElementById("falseTwoThree");
var falseThree = document.getElementById("falseThree");
var falseThreeTwo = document.getElementById("falseThreeTwo");
var falseThreeThree = document.getElementById("falseThreeThree");
var falseFour = document.getElementById("falseFour");
var falseFourTwo = document.getElementById("falseFourTwo");
var falseFourThree = document.getElementById("falseFourThree");
var timeleft = 50;
var score = 0;



// this sets the questions div to not be visable until the start div is clicked

document.getElementById("timer").style.display = "none";
document.getElementById("question1").style.display = "none";
document.getElementById("question2").style.display = "none";
document.getElementById("question3").style.display = "none";
document.getElementById("question4").style.display = "none";
document.getElementById("scoreboard").style.display = "none";

// this listens for a click on the start button div, and then starts the function "startquiz"
document.getElementById("startbutton").addEventListener("click", startquiz);

// this function reveals the answer buttons, and then loads the first question and answers
function startquiz() {
    document.getElementById("question1").style.display = "block";
    document.getElementById("timer").style.display = "block";
    document.getElementById("startbutton").style.display = "none";
    var downloadTimer = setInterval(function () {
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft <= 0) {
            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "none";
            document.getElementById("question3").style.display = "none";
            document.getElementById("question4").style.display = "none";
            document.getElementById("timer").style.display = "none";
            document.getElementById("scoreboard").style.display = "block";
            // scoreGame;

        }
            console.log(timeleft)
            // clearInterval(downloadTimer);
    }, 1000);

}

// These determine if the selected answer for question 1 is true or false
document.getElementById("falseOne").addEventListener("click", firstQuestionWrong)
document.getElementById("falseOneTwo").addEventListener("click", firstQuestionWrong)
document.getElementById("falseOneThree").addEventListener("click", firstQuestionWrong)
document.getElementById("correctOne").addEventListener("click", firstQuestionRight)

//this triggers the wrong question alert, subtracts 15 seconds and then moves to question 2
function firstQuestionWrong() {
    alert("Incorrect, the Correct answer is Cascading Style Sheets")
    timeleft-15;
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
}
//this triggers the correct answer alert, and then moves to question 2
function firstQuestionRight() {
    alert("Correct!")
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
}

// these determine if the selected answer for question 2 is true or false
document.getElementById("falseTwo").addEventListener("click", secondQuestionWrong)
document.getElementById("falseTwoTwo").addEventListener("click", secondQuestionWrong)
document.getElementById("falseTwoThree").addEventListener("click", secondQuestionWrong)
document.getElementById("correctTwo").addEventListener("click", secondQuestionRight)

//this triggers the wrong question alert, subtracts 15 seconds and then moves to question 3
function secondQuestionWrong() {
    alert("Incorrect, the Correct answer is Statements");
    timeleft-15;
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
}
//this triggers the correct answer alert, and then moves to question 3
function secondQuestionRight() {
    alert("Correct!")
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
}

// these determine if the selected answer for question 3 is true or false
document.getElementById("falseThree").addEventListener("click", thirdQuestionWrong)
document.getElementById("falseThreeTwo").addEventListener("click", thirdQuestionWrong)
document.getElementById("falseThreeThree").addEventListener("click", thirdQuestionWrong)
document.getElementById("correctThree").addEventListener("click", thirdQuestionRight)


//this triggers the wrong question alert, subtracts 15 seconds and then moves to question 4
function thirdQuestionWrong() {
    alert("Incorrect, the Correct answer is Classes");
    timeleft-15;
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
}
//this triggers the correct answer alert, and then moves to question 4
function thirdQuestionRight() {
    alert("Correct!")
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
}
// these determine if the selected answer for question 4 is true or false
document.getElementById("falseFour").addEventListener("click", fourthQuestionWrong)
document.getElementById("falseFourTwo").addEventListener("click", fourthQuestionWrong)
document.getElementById("falseFourThree").addEventListener("click", fourthQuestionWrong)
document.getElementById("correctFour").addEventListener("click", fourthQuestionRight)

//this triggers the wrong question alert, subtracts 15 seconds and then moves to question 4
function fourthQuestionWrong() {
    alert("Incorrect, the Correct answer is Array");
    timeleft-15;
    document.getElementById("question4").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    clearInterval(downloadTimer);
    // scoreGame;
}

//this triggers the correct answer alert, and then moves to question 4
function fourthQuestionRight() {
    alert("Correct!");
    document.getElementById("question4").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    clearInterval(downloadTimer);
    // scoreGame;
}

// //score keeping variables and function
// var score = document.querySelector(".score");
// function scoreGame() {
//     clearInterval(timerInterval);
//     var done = document.createElement("h1");
//     done.textContent = "All done.";
//     var scoreText = document.createElement("p");
//     scoreText.textContent = "Your score is " + secondsLeft + ".";
//     var submitinit = document.createElement("p");
//     submitinit.textContent = "Enter your initials for highscore";
//     score.appendChild(done);
//     score.appendChild(scoreText);
//     score.appendChild(submitinit);
//     score.appendChild(intials);
//     score.appendChild(submit);
//   }
