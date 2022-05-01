const button = document.querySelector(".buttonPlay");
const para1 = document.querySelector(".gameInfo");
const para2 = document.querySelector(".roundInfo");
let computerSelection;
let playerSelection;
let roundResults;
let gameLives = 3;
let computerLives = 3;
let keepGoing = true;

// This function chooses randomly between rock, paper, and scissors.

function computerPlay() {
  let computerNum = Math.floor(Math.random() * 100);
  
  if (computerNum >= 0 && computerNum <= 33) {
    return computerSelection = "rock";
  } else if (computerNum >= 34 && computerNum <= 66){
    return computerSelection = "scissors";
  } else {
    return computerSelection = "paper";
  } 
}

// This function plays one round of rock, paper, scissors and determines a winner for the round.

function oneRound(playerSelection, computerSelection) {
if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") 
      || (playerSelection == "paper" && computerSelection == "rock")) {
    return roundResults = "win";
  } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "scissors" && computerSelection == "rock") 
      || (playerSelection == "paper" && computerSelection == "scissors")) {
    return roundResults = "lose";
  } else if ((playerSelection == "rock"  && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "scissors") 
      || (playerSelection == "paper" && computerSelection == "paper")) {
    return roundResults = "tied";
  } else if (playerSelection == null ||playerSelection == "cancel" || playerSelection == "abort") {
    return roundResults = "cancel";
  } else {
    alert("Insert either: Rock, Paper, or Scissors");
    return roundResults = "tied";
  }
}

// This function will keep playing the round until either the player or the computer no longer has lives.

function game() {
  while (keepGoing == true) {
    if (gameLives > 0 && computerLives > 0) {
      playerSelection = prompt("Rock, paper, or scissors: " + "").toLowerCase();
      computerPlay();
      oneRound(playerSelection, computerSelection);
      if (roundResults == "win") {
        console.log(roundResults);
        computerLives--;
      } else if (roundResults == "lose") {
        console.log(roundResults);
        gameLives--;
      } else if (roundResults == "tied") {
        console.log(roundResults);
      } else if (roundResults == "cancel") {
        keepGoing = false;
      }
    } else if (gameLives == 0) {
      para1.textContent = `You lose! The computer has ${computerLives} live(s) remaining! So close!`;
      keepGoing = false;
    } else {
      para1.textContent = `You Win! You had ${gameLives} live(s) remaining!`;
      keepGoing = false;
    }
  }
}

button.addEventListener("click", function() {
  keepGoing = true;
  gameLives = 3;
  computerLives = 3;
  para1.textContent = "";
  game();
});
