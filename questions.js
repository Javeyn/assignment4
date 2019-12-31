var quizBox= document.getElementById("quiz");
var resultsBox = document.getElementById("results");
var submitBtn = document.getElementById("submit")

// submitBtn.onclick = function(){

//   btn.innerHTML = "CLICK ME";   
// };

function showScores(){};


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

//   for(i = 0; i < choices.length; i++){
//       choices[i]
//   };

  document.getElementById("startquiz").addEventListener("click", function (){
    var questionBox = document.createElement("button");  
    quizBox.textContent="testtest";
    // var btn = document.createElement("BUTTON");  
    // var btn = document.createElement("BUTTON");  
    questionBox.innerText = "CLICK ME";                  
    document.body.appendChild(btn);              
  })

  