// variables

const choices = ['rock', 'paper', 'scissors'];
let compChoice;
let playerChoice;
let compScore = 0;
let playerScore = 0;
let gameCount = 0;
const buttons = document.querySelectorAll('button');

// event listeners set playerChoice

rock.addEventListener('click', function () {
    playerChoice = 'rock';
    hideChoicesDiv();
    playRound();
});

paper.addEventListener('click', function () {
    playerChoice = 'paper';
    hideChoicesDiv();
    playRound();
});

scissors.addEventListener('click', function () {
    playerChoice = 'scissors';
    hideChoicesDiv();
    playRound();
});


// get computer choice

function getCompChoice() {
    compChoice = (choices[(Math.floor(Math.random() * 3))]);
}

// play round

function playRound() {
    getCompChoice();
    compare();
    showResultsDiv(); // needs to add a play again button
    endGame();
}

// compare choices

function compare() {
    if (playerChoice == 'rock' && compChoice == 'rock') {
        gameCount++;
        winner.textContent = `🪨`;
        verb.textContent = `ties`;
        loser.textContent = `🪨`;
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else if (playerChoice == 'rock' && compChoice == 'paper') {
        gameCount++;
        compScore++;
        winner.textContent = `🧻`;
        verb.textContent = `covers`;
        loser.textContent = `🪨`;
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else if (playerChoice == 'rock' && compChoice == 'scissors') {
        gameCount++;
        playerScore++;
        winner.textContent = `🪨`;
        verb.textContent = `smashes`;
        loser.textContent = `✂️`;
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else if (playerChoice == 'paper' && compChoice == 'rock') {
        gameCount++;
        playerScore++;
        winner.textContent = `🧻`;
        verb.textContent = `covers`;
        loser.textContent = `🪨`;
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else if (playerChoice == 'paper' && compChoice == 'paper') {
        gameCount++;
        winner.textContent = `🧻`;
        verb.textContent = `ties`;
        loser.textContent = `🧻`;
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else if (playerChoice == 'paper' && compChoice == 'scissors') {
        gameCount++;
        compScore++;
        winner.textContent = `✂️`;
        verb.textContent = `cuts`;
        loser.textContent = `🧻`;
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else if (playerChoice == 'scissors' && compChoice == 'rock') {
        gameCount++;
        compScore++;
        winner.textContent = `🪨`;
        verb.textContent = `smashes`;
        loser.textContent = `✂️`;
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else if (playerChoice == 'scissors' && compChoice == 'paper') {
        gameCount++;
        playerScore++;
        winner.textContent = `✂️`;
        verb.textContent = `cuts`;
        loser.textContent = `🧻`;
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else {
        gameCount++;
        winner.textContent = `✂️`;
        verb.textContent = `ties`;
        loser.textContent = `✂️`;
        score.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    }
}

// end the game

function endGame() {
    if (playerScore === 3) {
        winner.textContent = ``;
        verb.textContent = ``;
        loser.textContent = ``;
        score.textContent = `Player wins ${playerScore} to ${compScore}`
        showNext();
    } else if (compScore === 3) {
        winner.textContent = ``;
        verb.textContent = ``;
        loser.textContent = ``;
        score.textContent = `Computer wins ${compScore} to ${playerScore}`;
        showNext();
    } else {
        showNext();
    }
}

//reset click

reset.addEventListener('click', function () {
    playerScore = 0;
    compScore = 0;
    gameCount = 0;
    hideResultsDiv();
    showChoicesDiv();
});

// next-round click

nextround.addEventListener('click', function () {
    hideResultsDiv();
    showChoicesDiv();
});

// hide+show next div

function showNext() {
    if (playerScore === 3 || compScore === 3) {
        document.getElementById('nextround').style.display = 'none';
        document.getElementById('reset').style.display = 'inline';
    } else {
        document.getElementById('nextround').style.display = 'inline';
        document.getElementById('reset').style.display = 'none';
    }
}

// hide+show results

function hideResultsDiv() {
    document.getElementById('results').style.display = 'none';
}

function showResultsDiv() {
    document.getElementById('results').style.display = 'flex';
}

// hide+show choices div

function hideChoicesDiv() {
    document.getElementById('choices').style.display = 'none';
}

function showChoicesDiv() {
    document.getElementById('choices').style.display = 'inline';
}