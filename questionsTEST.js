var content = document.getElementById("content");
var startButton = document.getElementById("startbutton");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var score = 0; 

var questions = [
  {
    title: "What is CSS used for?",
    choices: ["Creating Sweet Skateboards", "Colors, Shapes, and Styles", "Computation Server Status", "numbers"],
    answer: "Colors, Shapes, and Styles"
  },
  {
    title: "In Javascript, If, While, and For are considered...",
    choices: ["quotes", "statements", "functions", "event handlers"],
    answer: "statements"
  },
  {
      title: "Without using any custom fonts or sizes, which of these would have the biggest text?",
      choices: ["Body", "Footer", "H3", "H2"],
      answer: "H2"
    },
    {
      title: "A variable with [] after it would be called a/an",
      choices: ["array", "event handler", "Jquery", "div"],
      answer: "array"
    },
    {
      title: "Which of these can be called upon more than once in CSS?",
      choices: ["class", "ID", "Handle", "Burger King's Chicken Fries"],
      answer: "class"
    },
];

// this sets the questions div to not be visable until the start div is clicked
document.getElementById("questions").style.display = "none";

// startButton.onclick = startquiz;
  // document.getElementById("questions").style.display = "block";
  // document.getElementById("startbutton").style.display = "none";
  // content.innerText = questions[0].title;
  // answer1.innerText = questions[0].choices[0];
  // answer2.innerText = questions[0].choices[1];
  // answer3.innerText = questions[0].choices[2];
  // answer4.innerText = questions[0].choices[3];

  // this listens for a click on the start button div, and then starts the function "startquiz"
  document.getElementById("startbutton").addEventListener("click", startquiz)
// }

// this function reveals the answer buttons, and then loads the first question and answers
function startquiz(){
  document.getElementById("questions").style.display = "block";
  document.getElementById("startbutton").style.display = "none";

  // i need to create a for loop here
  content.innerText = questions[0].title;
  answer1.innerText = questions[0].choices[0];
  answer2.innerText = questions[0].choices[1];
  answer3.innerText = questions[0].choices[2];
  answer4.innerText = questions[0].choices[3];
}

document.getElementById("answer1").addEventListener("click", verify1);

function verify1() {
  if (answer1.innertext === questions[0].answers){
    alert("Correct!");
    
  }
  else {alert("Incorrect!")};
}
// answer1.onclick = function(){
//   if (answer1.innertext === questions[0].answers){
//     console.log("true")
//   }
//   else (
//     answer1.innertext !== questions[0].answers
//     );{
//     console.log("false")}
// }

// answer2.onclick = function(){
//   if (answer2.innertext === questions[0].answers){
//     console.log("true")
//   }
//   else (answer2.innertext !== questions[0].answers)
//     console.log("false")}



// function nextQuestion(){
//  console.log(answer1.innerText)
  
// }
