const startBtnEl = document.querySelector('#start-game-button');
const quizTimerEl = document.querySelector('#quiz-timer');
const scoreEl = document.querySelector('#current-score');
const questionEl = document.querySelector('#question-box');

const optionBoxesEl = document.querySelector('.option-boxes');
const optAEl = document.querySelector('#option-a-box');
const optBEl = document.querySelector('#option-b-box');
const optCEl = document.querySelector('#option-c-box');
const optDEl = document.querySelector('#option-d-box');

let score = 0;
let time = 30;

let questionsArray = [
  {
    question: 'What does setInterval() do?',
    a: 'Calls a function at specified intervals', //
    b: 'Displays the current time',
    c: 'Sets an interval to a value',
    d: 'None of the Above'
  },
  {
    question: `Your website's form keeps refreshing upon submitting. Which JS method stops this from happening?`,
    a: 'stopPropagation()',
    b: 'preventDefault()', //
    c: 'stopBubbling()',
    d: 'preventRefresh()',
  },
  {
    question: 'Which is proper for loop syntax?',
    a:'for (let i = 0; i > 52; i+) {}',
    b:'for (let i = null, i < 55; i++) {}',
    c:'for (let i = 2; i < 100; i++) {}', //
    d:'None of the above'
  },
  {
    question: 'Which of the following is the best skittle color?',
    a: 'Red',
    b: 'Green', //
    c: 'Purple',
    d: 'Orange',
  },
];

function quizQuestions() {
  
}

function gameTimer() {
  let timer = setInterval((event) => {
  quizTimerEl.textContent = time--;
  if (time < 0) {
    clearInterval(timer);
  }}, 
  1000);
}


function startGame() {
  console.log('Game Start!');
  gameTimer();
  quizQuestions();
}


startBtnEl.addEventListener('click', startGame);