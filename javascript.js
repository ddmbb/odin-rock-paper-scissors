//set choices

const choices = ['rock', 'paper', 'scissors'];

//computer choice

function getCompChoice() {
    let compChoice = (choices[(Math.floor(Math.random() * (2 + 1)))]);
    console.log(compChoice);
}

let compChoice = getCompChoice();

//player choice

function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors");
    console.log(playerChoice);
}

let playerChoice = getPlayerChoice();

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