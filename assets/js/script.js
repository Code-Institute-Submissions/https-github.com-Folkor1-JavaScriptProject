let leaderBoard = document.getElementById("leaderboard-wrap");
let leaderBoardScore = document.getElementById("score-span");
let leaderBoardButton = document.getElementById("leaderboard-button");
let leaderBoardName = document.getElementById("name-span");
let gameScore = document.getElementById("game-score");
let resultsHeading = document.getElementById("results-heading");
let resultsButtons = document.getElementById("results-buttons");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let scoreBar = document.getElementsByTagName("span");
let progressBar = document.getElementById("progress-span");
let quizButtons = document.getElementsByClassName("quiz-but");
let quizQuestion = document.getElementById("question-div");
let okButton = document.getElementById("ok-div");
let errorMessage = document.getElementById("error-message-div");
let nameHeading = document.getElementById("name-div");
let input = document.getElementById("name-input");
let start = document.getElementById("start-button");
let quizGame = document.getElementById("quiz-div");

let questions = 
    [
    "What is the capital of Nepal?",
    "What is the capital of Ghana?",
    "What is the capital of Bahrain?",
    "What is the capital of Paraguay?",
    "What is the capital of Panama?",
    "What is the capital of Kyrgyzstan?",
    "What is the capital of Montenegro?",
    "What is the capital of Barbados",
    "What is the capital of Kenya?",
    "What is the capital of Equador?",
    "What is the capital of Laos",
    "What is the capital of Senegal?",
    "What is the capital of Maldives?",
    "What is the capital of Slovakia?",
    "What is the capital of Bhutan?",
    ];

let correctAnswers = [
    "Kathmandu",
    "Akkra",
    "Manama",
    "Asunción",
    "Panama",
    "Bishkek",
    "Podgorica",
    "Bridgetown",
    "Nairobi",
    "Quito",
    "Vientiane",
    "Dakar",
    "Male",
    "Bratislava",
    "Thimphu",
];

let incorrectAnswers = [
    "Riga",
    "Bangkok",
    "Kingstown",
    "Beijing",
    "Doha",
    "Pretoria",
    "Kolombo",
    "Mumbai",
    "Zagreb",
    "Kabul",
    "Islamabad",
    "New-Delhi",
    "Manila",
    "Cairo",
    "Rabat",
    "Montevideo",
    "Riyadh",
    "Nicosia",
    "Athens",
    "Sophia",
    "Tashkent",
    "Almaty",
    "Karachi",
    "Lagos",
    "Caracas",
    "Guadalajara",
    "Havana",
    "Kampala",
    "Kharkiv",
    "Kuwait"
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
    }
}

/* removes error message */

okButton.onclick = function() {
    errorMessage.style.display = "none";
    input.style.display = "initial";
    start.style.display = "initial";
    nameHeading.style.display = "block";
};

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
}

/* gets the correct answer(random allocation) */

function pressButton() {
    let i = parseInt(progressBar.innerText);
        quizButtons[Math.floor(Math.random() * 4)].innerText = correctAnswers[i];
}

/* increments progress */

function progress() {
    let progress = parseInt(progressBar.innerText);
    progressBar.innerText = ++progress;
}

/* increments the score if correct answer is clicked */

button1.onclick = function() {
    if (correctAnswers.includes(button1.innerText)) {
        let score = parseInt(scoreBar[0].innerText);
        scoreBar[0].innerText = 10+score;
    }
};

button2.onclick = function() {
    if (correctAnswers.includes(button2.innerText)) {
        let score = parseInt(scoreBar[0].innerText);
        scoreBar[0].innerText = 10+score;
    }
};

button3.onclick = function() {
    if (correctAnswers.includes(button3.innerText)) {
        let score = parseInt(scoreBar[0].innerText);
        scoreBar[0].innerText = 10+score;
    }
};

button4.onclick = function() {
    if (correctAnswers.includes(button4.innerText)) {
        let score = parseInt(scoreBar[0].innerText);
        scoreBar[0].innerText = 10+score;
    }
};

/* gets end game screen */

function endGame() {
    let i = parseInt(progressBar.innerText);
    if (i >= 16) {
        quizGame.style.display = "none";
        resultsHeading.style.display = "block";
        resultsButtons.style.display = "block";
        gameScore.innerText = parseInt(scoreBar[0].innerText);
    }
}

/* gets leaderboard screen */

leaderBoardButton.onclick = function() {

    leaderBoard.style.display = "block";
    resultsHeading.style.display = "none";
    resultsButtons.style.display = "none";
    leaderBoardName.innerText = inputV[0];
    leaderBoardScore.innerText = gameScore.innerText;
};

for (let i = 0; i < 4; i++) {
    quizButtons[i].addEventListener('click', change);
    }
start.addEventListener('click', inputStart);