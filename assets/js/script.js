const startBtnEl = document.querySelector("#start-game-button");
const quizTimerEl = document.querySelector("#quiz-timer");
const scoreEl = document.querySelector("#current-score");
const questionEl = document.querySelector("#question-box");
const scoreBoardBoxEl = document.querySelector("#score-board-box");
const optionBoxesEl = document.querySelector(".option-boxes");

let questionsArray = [
  {
    question: "What does setInterval() do?",
    options: [
      "Calls a function at specified intervals",
      "Displays the current time",
      "Sets an interval to a value",
      "None of the Above",
    ],
    answer: "Calls a function at specified intervals",
  },
  {
    question: `Your website's form keeps refreshing upon submitting. Which JS method stops this from happening?`,
    options: [
      "stopPropagation()",
      "preventDefault()",
      "stopBubbling()",
      "preventRefresh()",
    ],
    answer: "preventDefault()",
  },
  {
    question: "Which is proper for loop syntax?",
    options: [
      "for (let i = 0; i > 52; i+) {}",
      "for (let i = null, i < 55; i++) {}",
      "for (let i = 2; i < 100; i++) {}",
      "None of the above",
    ],
    answer: "for (let i = 2; i < 100; i++) {}",
  },
  {
    question:
      "Which of the following is the best skittle color? (Worth 2 points)",
    options: ["Red", "Green", "Purple", "Orange"],
    answer: "Green",
  },
];

let time = 30;
let score = 0;

function firstQuestion(event) {
  for (i = 0; i <= 3; i++) {
    questionEl.textContent = questionsArray[0].question;
    optionBoxesEl.children[i].textContent = questionsArray[0].options[i];
  }
  optionBoxesEl.onclick = function (event) {
    let target = event.target;
    if (target.textContent == questionsArray[0].answer) {
      console.log("Correct!");
      plusScore();
    } else {
      console.log("Incorrect.");
      minusTime();
    }
    secondQuestion();
  };
}

function secondQuestion(event) {
  for (i = 0; i <= 3; i++) {
    questionEl.textContent = questionsArray[1].question;
    optionBoxesEl.children[i].textContent = questionsArray[1].options[i];
  }
  optionBoxesEl.onclick = function (event) {
    let target = event.target;
    if (target.textContent == questionsArray[1].answer) {
      console.log("Correct!");
      plusScore();
    } else {
      console.log("Incorrect.");
      minusTime();
    }
    thirdQuestion();
  };
}

function thirdQuestion(event) {
  for (i = 0; i <= 3; i++) {
    questionEl.textContent = questionsArray[2].question;
    optionBoxesEl.children[i].textContent = questionsArray[2].options[i];
  }
  optionBoxesEl.onclick = function (event) {
    let target = event.target;
    if (target.textContent == questionsArray[2].answer) {
      console.log("Correct!");
      plusScore();
    } else {
      console.log("Incorrect.");
      minusTime();
    }
    fourthQuestion();
  };
}

function fourthQuestion(event) {
  for (i = 0; i <= 3; i++) {
    questionEl.textContent = questionsArray[3].question;
    optionBoxesEl.children[i].textContent = questionsArray[3].options[i];
  }
  optionBoxesEl.onclick = function (event) {
    let target = event.target;
    if (target.textContent == questionsArray[3].answer) {
      console.log("Correct!");
      plusScore();
    } else {
      console.log("Incorrect.");
      minusTime();
    }
    time = 0;
  };
}

function endGame() {
  quizTimerEl.textContent = 0;
  optionBoxesEl.style.visibility = "hidden";
  startBtnEl.style.visibility = "hidden";

  let userInitialsPrompt = prompt(
    `Congratulations! Your score is ${score}! Please input your Initials to save your score.`
  );

  questionEl.textContent = `Congratulations ${userInitialsPrompt}! Your score is ${score}!`;

  if (userInitialsPrompt == "") return;

  localStorage.setItem("name", userInitialsPrompt);
  localStorage.setItem("score", score);

  scoreBoardBoxEl.children[0].textContent =
    "Name: " + localStorage.getItem("name");
  scoreBoardBoxEl.children[1].textContent =
    "Score: " + localStorage.getItem("score");
}

function plusScore() {
  score++;
  scoreEl.textContent = score;
}

function minusTime() {
  time = time - 10;
  quizTimerEl.textContent = time;
}

function gameTimer() {
  let timer = setInterval(() => {
    quizTimerEl.textContent = time--;
    if (time < 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function startGame() {
  console.log("Game Start!");
  scoreEl.textContent = score;
  gameTimer();
  firstQuestion();
}

scoreBoardBoxEl.children[0].textContent += localStorage.getItem("name");
scoreBoardBoxEl.children[1].textContent += localStorage.getItem("score");

startBtnEl.addEventListener("click", startGame);
