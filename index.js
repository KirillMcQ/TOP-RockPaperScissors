function getComputerChoice() {
    let choice =  Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (choice==1) {
        return 'rock';
    } else if (choice==2) {
        return 'paper';
    } else if (choice==3) {
        return 'scissors';
    }
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection==computerSelection) {
        return 'tie';
    } else if (computerSelection=='rock' && playerSelection=='paper') {
        return 'player';
    } else if (computerSelection=='paper' && playerSelection=='scissors') {
        return 'player';
    } else if (computerSelection=='scissors' && playerSelection=='rock') {
        return 'player';
    } else {
        return 'computer'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore<5 && computerScore<5) {
        let computerChoice = getComputerChoice();
        let userChoice = prompt("Enter rock, paper, or scissors");
        let winner = playRound(computerChoice, userChoice);
        if (winner=='tie') {
            playerScore++;
            computerScore++;
        } else if (winner=="player") {
            playerScore++;
        } else {
            computerScore++;
        }
    }


     if(playerScore==computerScore) {
        return `Tie! Score: ${playerScore}-${computerScore}`;
     } else if (playerScore > computerScore) {
        return `Player wins! Score: ${playerScore}-${computerScore}`;
     } else {
        return `Computer wins! Score: ${playerScore}-${computerScore}`;
     }
}

console.log(game());