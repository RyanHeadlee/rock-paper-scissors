const para = document.createElement("p");
const resultsContainer = document.querySelector(".resultsContainer");
const playerResults = document.querySelector(".gameLives");
const computerResults = document.querySelector(".computerLives");
const reset = document.querySelector(".reset");
let computerSelection;
let playerSelection;
let gameLives = 3;
let computerLives = 3;
let keepGoing = true;

// This function chooses randomly between rock, paper, and scissors.

function computerPlay() {
  let computerNum = Math.floor(Math.random() * 100);

  if (computerNum >= 0 && computerNum <= 33) {
    return computerSelection = "rock";
  } else if (computerNum >= 34 && computerNum <= 67){
    return computerSelection = "scissors";
  } else {
    return computerSelection = "paper";
  } 
}

// This function plays one round of rock, paper, scissors and determines a winner for the round.

function playRound(playerSelection, computerSelection) {
  if ((playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")) {
    resultsContainer.appendChild(para);
    para.textContent = `You win the round; ${playerSelection} beats ${computerSelection}.`;
    computerLives--;
    computerResults.textContent = `Computer Lives: ${computerLives}`;
  } else if ((playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "scissors" && computerSelection == "rock") || 
        (playerSelection == "paper" && computerSelection == "scissors")) {
    resultsContainer.appendChild(para);
    para.textContent = `You lose the round; ${computerSelection} beats ${playerSelection}.`;
    gameLives--;
    playerResults.textContent = `Your Lives: ${gameLives}`;
  } else if ((playerSelection == "rock"  && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "paper")) {
    resultsContainer.appendChild(para);
    para.textContent = `You tied the round; ${playerSelection} ties ${computerSelection}.`;
  }
}

// This function checks if your lives are above 0.

function checkLives () {
  if (gameLives == 0) {
    para.textContent = "You Lose!";
    para.classList.add("loser");
    return keepGoing = false;
  } else if (computerLives == 0) {
    para.textContent = "You Win!"
    para.classList.add("winner");
    return keepGoing = false;
  }

  return keepGoing = true;
}

// These event listeners play the round with your selected choice when button is clicked. 

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
  checkLives();
  if (keepGoing == true) { 
    playerSelection = "rock";
    computerPlay();
    playRound(playerSelection, computerSelection);
    checkLives();
  }
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
  checkLives();
  if (keepGoing == true) {
    playerSelection = "paper"
    computerPlay();
    playRound(playerSelection, computerSelection);
    checkLives();
  }
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
  checkLives();
  if (keepGoing == true) {
    playerSelection = "scissors";
    computerPlay();
    playRound(playerSelection, computerSelection);
    checkLives();
  }
});

// Resets the game.

reset.addEventListener('click', () => {
  para.classList.remove('winner', 'loser');
  gameLives = 3;
  computerLives = 3;
  computerResults.textContent = "Computer Lives: 3";
  playerResults.textContent = "Your Lives: 3";
  para.remove();
});