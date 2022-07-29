//set choices

const choices = ['rock', 'paper', 'scissors'];
let compChoice;
let playerChoice;
let compScore = 0;
let playerScore = 0;
let gameCount = 0;

//function game()

function game() {
    if (gameCount <= 5) {

        //function playRound(compChoice, playerChoice)

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
                var element = document.getElementById("results");
                element.innerHTML = "Tie";
                gameCount++;
                console.log(`Player Score: ${playerScore}`);
                console.log(`Computer Score: ${compScore}`);
                console.log(`Game Count: ${gameCount}`);
            } else if (playerChoice == 'rock' && compChoice == 'scissors' || playerChoice == 'paper' && compChoice == 'rock' || playerChoice == "scissors" && compChoice == 'paper') {
                var element = document.getElementById("results");
                element.innerHTML = "Player Wins";
                playerScore++;
                gameCount++;
                console.log(`Player Score: ${playerScore}`);
                console.log(`Computer Score: ${compScore}`);
                console.log(`Game Count: ${gameCount}`);

            } else {
                var element = document.getElementById("results");
                element.innerHTML = "Computer Wins";
                compScore++;
                gameCount++;
                console.log(`Player Score: ${playerScore}`);
                console.log(`Computer Score: ${compScore}`);
                console.log(`Game Count: ${gameCount}`);

            }


            if (playerScore === 3) {
                var element = document.getElementById("results");
                element.innerHTML = "You won the game!";
            } else if (compScore === 3) {
                var element = document.getElementById("results");
                element.innerHTML = "The computer won the game!";
            } else {
                playRound(compChoice, playerChoice);
            }
        } else {
            playerScore = 0;
            compScore = 0;
            gameCount = 0
            playRound(compChoice, playerChoice);
        }
    }
}

game();
