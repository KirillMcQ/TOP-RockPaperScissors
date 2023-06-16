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


// let computerChoice = getComputerChoice()
// console.log(computerChoice);
// console.log(playRound(computerChoice, 'rock'))