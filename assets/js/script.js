let leaderBoardScore = document.getElementById("score-span");
let leaderBoardButton = document.getElementById("leaderboard-button");
let leaderBoardName = document.getElementById("name-span");
let gameScore = document.getElementById("game-score");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let scoreBar = document.getElementsByTagName("span");
let progressBar = document.getElementById("progress-span");
let quizButtons = document.getElementsByClassName("quiz-but");
let quizQuestion = document.getElementById("question-div");
let quizGame = document.getElementById("quiz-div");
let nameHeading = document.getElementById("name-div");
let resultsHeading = document.getElementById("results-heading");
let resultsButtons = document.getElementById("results-buttons");
let errorMessage = document.getElementById("error-message-div");
let okButton = document.getElementById("ok-div");
let leaderBoard = document.getElementById("leaderboard-wrap");
let input = document.getElementById("name-input");
let start = document.getElementById("start-button");

let questions = 
    [
    "a Question",
    "b Question",
    "c Question",
    "d Question",
    "e Question",
    "f Question",
    "g Question",
    "h Question",
    "i Question",
    "j Question",
    "k Question",
    "l Question",
    "n Question",
    "o Question",
    "p Question"
    ];

let correctAnswers = [
    "1 Correct",
    "2 Correct",
    "3 Correct",
    "4 Correct",
    "5 Correct",
    "6 Correct",
    "7 Correct",
    "8 Correct",
    "9 Correct",
    "10 Correct",
    "11 Correct",
    "12 Correct",
    "13 Correct",
    "14 Correct",
    "15 Correct",
];

let incorrectAnswers = [
    "1 Incorrect",
    "2 Incorrect",
    "3 Incorrect",
    "4 Incorrect",
    "5 Incorrect",
    "6 Incorrect",
    "7 Incorrect",
    "8 Incorrect",
    "9 Incorrect",
    "10 Incorrect",
    "11 Incorrect",
    "12 Incorrect",
    "13 Incorrect",
    "14 Incorrect",
    "15 Incorrect"
];

let inputV = [];

/* validates the input field and starts the quiz*/

function inputStart() {
    if (input.value.match(/^[0-9A-Za-z]+$/) !== null) {
        input.style.display = "none";
        start.style.display = "none";
        nameHeading.style.display = "none";
        quizGame.style.display = "block";
        inputV.push(input.value);
        getQuestion();
    } else {
        input.style.display = "none";
        start.style.display = "none";
        nameHeading.style.display = "none";
        errorMessage.style.display = "block";
        okButton.addEventListener('click', err);
    }
}

/* removes error message */

function err() {
    errorMessage.style.display = "none";
    input.style.display = "initial";
    start.style.display = "initial";
    nameHeading.style.display = "block";
}

/* gets random question and correct answer, then calls other function for incorrect answers */

function getQuestion() {
    quizQuestion.innerText = questions[0];
    quizButtons[Math.floor(Math.random() * 4)].innerText = correctAnswers[0];
    getIncorrectAnswers();
}

/* gets incorrect answers */

function getIncorrectAnswers() {
    for (let i = 0; i < 4; i++) {
        if (quizButtons[i].innerText === "") {
            quizButtons[i].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
        }
        random();
    }
    for (let i = 0; i < 4; i++) {
        quizButtons[i].addEventListener('click', change);
        } 
}

/* makes incorrect answers non-repeatable */

function random() {
    while (quizButtons[0].innerText === quizButtons[1].innerText) {
     quizButtons[0].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
       if (quizButtons[0].innerText !== quizButtons[1].innerText) {
           break;
       }
    }
    while (quizButtons[0].innerText === quizButtons[2].innerText) {
     quizButtons[0].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
       if (quizButtons[0].innerText !== quizButtons[2].innerText) {
         break;
     }
    }
    while (quizButtons[0].innerText === quizButtons[3].innerText) {
     quizButtons[0].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
       if (quizButtons[0].innerText !== quizButtons[3].innerText) {
         break;
     }
    }
    while (quizButtons[1].innerText === quizButtons[2].innerText) {
     quizButtons[1].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
     if (quizButtons[1].innerText !== quizButtons[2].innerText) {
         break;
     }
    }
    while (quizButtons[1].innerText === quizButtons[3].innerText) {
     quizButtons[1].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
     if (quizButtons[1].innerText !== quizButtons[3].innerText) {
         break;
     }
    }
    while (quizButtons[2].innerText === quizButtons[3].innerText) {
     quizButtons[2].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
     if (quizButtons[2].innerText !== quizButtons[3].innerText) {
         break;
     }
    }
 }

/* gets new question(ordered) and answers(random allocation) */

function change() {
    let i = +parseInt(progressBar.innerText);
    quizQuestion.innerText = questions[i];
    for (let y = 0; y < 4; y++) {
            quizButtons[y].innerText = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
        }
    if (i != parseInt(quizButtons[parseInt])) {
        pressButton();
    } 
    random();
    progress();
    endGame();
    incScore1();
    incScore2();
    incScore3();
    incScore4();
}

/* increments progress */

function progress() {
    let progress = parseInt(progressBar.innerText);
    progressBar.innerText = ++progress;
}

/* gets the correct answer(random allocation) */

function pressButton() {
    let i = parseInt(progressBar.innerText);
        quizButtons[Math.floor(Math.random() * 4)].innerText = correctAnswers[i];
}

/* increments the score if correct answer is clicked */

function incScore1() {
    if (correctAnswers.includes(button1.innerText)) {
        let score = parseInt(scoreBar[0].innerText);
        scoreBar[0].innerText = 10+score;
    }
}

function incScore2() {
    if (correctAnswers.includes(button2.innerText)) {
        let score = parseInt(scoreBar[0].innerText);
        scoreBar[0].innerText = 10+score;
    }
}

function incScore3() {
    if (correctAnswers.includes(button3.innerText)) {
        let score = parseInt(scoreBar[0].innerText);
        scoreBar[0].innerText = 10+score;
    }
}

function incScore4() {
    if (correctAnswers.includes(button4.innerText)) {
        let score = parseInt(scoreBar[0].innerText);
        scoreBar[0].innerText = 10+score;
    }
}

/* gets end game screen */

function endGame() {
    let i = parseInt(progressBar.innerText);
    if (i >= 16) {
        quizGame.style.display = "none";
        resultsHeading.style.display = "block";
        resultsButtons.style.display = "block";
        gameScore.innerText = parseInt(scoreBar[0].innerText);
    }
    leaderBoardButton.addEventListener('click', leaderScreen);
}

/* gets leaderboard screen */

function leaderScreen() {

    leaderBoard.style.display = "block";
    resultsHeading.style.display = "none";
    resultsButtons.style.display = "none";
    leaderBoardName.innerText = inputV[0];
    leaderBoardScore.innerText = gameScore.innerText;
}