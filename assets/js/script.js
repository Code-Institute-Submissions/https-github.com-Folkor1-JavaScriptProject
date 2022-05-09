let okButton = document.getElementById("ok-div");
let errorMessage = document.getElementById("error-message-div");
let nameHeading = document.getElementById("name-div");
let input = document.getElementById("name-input");
let start = document.getElementById("start-button");
let quizGame = document.getElementById("quiz-div");

/* validates the input field and starts the quiz*/

function inputStart() {
    if (input.value.match(/^[0-9A-Za-z]+$/) !== null) {
        input.style.display = "none";
        start.style.display = "none";
        nameHeading.style.display = "none";
        quizGame.style.display = "block";
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
}

let questions = 
    [
    "a Question test long question 12334 Question test",
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
    ]

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
]

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
    "15 Incorrect",
    "16 Incorrect",
    "17 Incorrect",
    "18 Incorrect",
    "19 Incorrect",
    "20 Incorrect",
    "21 Incorrect",
    "22 Incorrect",
    "23 Incorrect",
    "24 Incorrect",
    "25 Incorrect",
    "26 Incorrect",
    "27 Incorrect",
    "28 Incorrect",
    "29 Incorrect",
    "30 Incorrect"
]

start.addEventListener('click', inputStart);