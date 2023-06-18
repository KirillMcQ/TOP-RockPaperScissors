const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");
const winnerDisplay = document.querySelector(".winnerDisplay");
const scoreDisplay = document.querySelector(".scoreDisplay");
const btns = document.querySelectorAll("button");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else if (choice == 3) {
    return "scissors";
  }
}

function playRound(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    return "player";
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    return "player";
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    return "player";
  } else {
    return "computer";
  }
}

let playerScore = 0;
let computerScore = 0;
let stopPlay = false;
scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList[0] == "reset") {
      playerScore = 0;
      computerScore = 0;
      scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
      winnerDisplay.textContent = "";
      stopPlay = false;
    } else {
      if (!stopPlay) {
        let winner = playRound(getComputerChoice(), button.classList[0]);
        if (winner == "tie") {
          playerScore++;
          computerScore++;
        } else if (winner == "player") {
          playerScore++;
        } else {
          computerScore++;
        }
        scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        if (playerScore == 5 || computerScore == 5) {
          if (playerScore == computerScore) {
            winnerDisplay.textContent = "Tie!";
          } else if (playerScore > computerScore) {
            winnerDisplay.textContent = "Player wins!";
          } else {
            winnerDisplay.textContent = "Computer Wins!";
          }
          stopPlay = true;
        }
      }
    }
  });
});
