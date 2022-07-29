//set choices

const choices = ['rock', 'paper', 'scissors'];
let compChoice;
let playerChoice;
let compScore;
let playerScore;

//function game()

//function playRound(compChoice, playerChoice)

function playRound(compChoice, playerChoice) {

    //computer choice

    function getCompChoice() {
        compChoice = (choices[(Math.floor(Math.random() * 3))]);
        console.log(compChoice);
    }

    getCompChoice();


    // player choice

    function getPlayerChoice() {
        playerChoice = prompt("Choose Rock, Paper, or Scissors");
        console.log(playerChoice);
        // return playerChoice;
    }

    getPlayerChoice();


    //compare choices

    if (playerChoice == compChoice) {
        var element = document.getElementById("results");
        element.innerHTML = "Tie";
    } else if (playerChoice == 'rock' && compChoice == 'scissors' || playerChoice == 'paper' && compChoice == 'rock' || playerChoice == "scissors" && compChoice == 'paper') {
        var element = document.getElementById("results");
        element.innerHTML = "Player Wins";
    } else {
        var element = document.getElementById("results");
        element.innerHTML = "Computer Wins";
    }

}

playRound(compChoice, playerChoice);
