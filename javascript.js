//set variables

const choices = ['rock', 'paper', 'scissors'];
let compChoice;
let playerChoice;
let compScore = 0;
let playerScore = 0;
let gameCount = 0;
const buttons = document.querySelectorAll('button');

//add event listeners on click + set playerChoice (?querySelectorAll?)

rock.addEventListener('click', function () {
    playerChoice = 'rock';
    playRound();
});

paper.addEventListener('click', function () {
    playerChoice = 'paper';
    playRound();
});

scissors.addEventListener('click', function () {
    playerChoice = 'scissors';
    playRound();
});

hideReset();


//get computer choice *******************************

function getCompChoice() {
    compChoice = (choices[(Math.floor(Math.random() * 3))]);
}

//play round

function playRound() {
    getCompChoice();
    compare();
    endGame();
}

//compare choices *********************

function compare() {
    if (playerChoice == compChoice) {
        gameCount++;
        results.textContent = `Player: ${playerChoice} ties Computer: ${compChoice}`
    } else if (playerChoice == 'rock' && compChoice == 'scissors' || playerChoice == 'paper' && compChoice == 'rock' || playerChoice == "scissors" && compChoice == 'paper') {
        playerScore++;
        gameCount++;
        results.textContent = `Player: ${playerChoice} beats Computer: ${compChoice}`;
    } else {
        compScore++;
        gameCount++;
        results.textContent = `Player: ${playerChoice} loses to Computer: ${compChoice}`;
    }
}

//end the game

function endGame() {
    if (playerScore === 3) {
        results.textContent = `PLAYER WINS ${playerScore} to ${compScore}`;
        for (const button of buttons) {
            button.classList.toggle('hide');
        };
    }
    if (compScore === 3) {
        results.textContent = `COMPUTER WINS ${compScore} to ${playerScore}`;
        for (const button of buttons) {
            button.classList.toggle('hide');
        };
    }
}

//reset

reset.addEventListener('click', function () {
    playerScore = 0;
    compScore = 0;
    gameCount = 0;
    for (const button of buttons) {
        button.classList.toggle('hide');
    };
});

function hideReset() {
    reset.classList.toggle('hide');
}