let errorMessage = document.getElementById("error-message-div");
let nameHeading = document.getElementById("name-div");
let input = document.getElementById("name-input");
let start = document.getElementById("start-button");
let quizGame = document.getElementById("quiz-div");

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
start.addEventListener('click', inputStart);