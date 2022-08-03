//set variables

const choices = ['rock', 'paper', 'scissors'];
let compChoice;
let playerChoice;
let compScore = 0;
let playerScore = 0;
let gameCount = 0;

//function game()

function game() {
    while (gameCount < 5) {
        playRound(compChoice, playerChoice);
    }
}

function playRound(compChoice, playerChoice) {

    //computer choice

    function getCompChoice() {
        compChoice = (choices[(Math.floor(Math.random() * 3))]);
        console.log(`Computer: ${compChoice}`);
    }

    getCompChoice();


    // player choice

    function getPlayerChoice() {
        playerChoice = prompt("Choose Rock, Paper, or Scissors");
        console.log(`Player: ${playerChoice}`);
    }

    getPlayerChoice();


    //compare choices

    if (playerChoice == compChoice) {
        gameCount++;
        console.log(`---Result: Tie---`);
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${compScore}`);
        console.log(`===Game Count: ${gameCount}===`);
    } else if (playerChoice == 'rock' && compChoice == 'scissors' || playerChoice == 'paper' && compChoice == 'rock' || playerChoice == "scissors" && compChoice == 'paper') {
        playerScore++;
        gameCount++;
        console.log(`---Result: Player Wins---`);
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${compScore}`);
        console.log(`===Game Count: ${gameCount}===`);
    } else {
        compScore++;
        gameCount++;
        console.log(`---Result: Computer Wins---`);
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${compScore}`);
        console.log(`===Game Count: ${gameCount}===`);
    }
}

game();
