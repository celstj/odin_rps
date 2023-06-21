
//  ----  walk through solution

let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame(){
  winners = [];
  document.querySelector('.playerScore').textContent = 'Score : 0';
  document.querySelector('.computerScore').textContent = 'Score : 0';
  document.querySelector('.ties').textContent = 'Ties : 0';
  document.querySelector('.winner').textContent = '';
  document.querySelector('#playerSelected').textContent = '';
  document.querySelector('#computerSelected').textContent = '';
  document.querySelector('.reset').style.display = 'none';
}


function startGame() {
  //play the game until someone wins 5 rounds
  let btns = document.querySelectorAll("button");

  btns.forEach((btn) => 
    btn.addEventListener("click", () => {
      if(btn.id){
        playRound(btn.id);
        console.log(btn.id+"clicked");
      }
    })
    );
}

// round plays, check winner, push winner into winners array, log round
function playRound(playerChoice){
  let wins = checkWins();
  if(wins >= 5){
    return;
  }
  
  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  
  if( wins == 5) {
    //display end results
    //change the button to visible
    // change the text to display winner
    displayEnd();
  }
}

function displayEnd(){
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 5){
    document.querySelector(".winner").textContent = 
    'You Won 5 games, Congrats';
  } else {
    document.querySelector(".winner").textContent = 
    'Sorry, the computer won 5 times';
  }
  document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner){
  document.querySelector("#playerSelected").textContent = `You Chose: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector("#playerSelected").textContent = `Computer Chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner){
  if (winner == "Player"){
    document.querySelector(".winner").textContent = "You won the Round!";
  }else if (winner == "Computer"){
    document.querySelector(".winner").textContent = "The Computer won the Round";
  }else {
    document.querySelector(".winner").textContent = "The Round was a tie";
  }
}

function tallyWins(){
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    let draws = winners.filter((item) => item == "Draw").length;
    // able to select class/id names just in single quotes, 
    //backtick to include js elements in dom
    document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
    document.querySelector(".ties").textContent = `Score: ${draws}`;
}


// randomise computerchoice
function computerSelect(){
  //todo - update dom with computer selection
  const choice = choices[Math.floor(Math.random() * choices.length)];

    document.querySelector(`.${choice}`).classList.add("active");

    // setTimeout(() => {
    //   document.querySelector(`.${choice}`).classList.remove("active");
    // }, 700);

  return choice;
}


function checkWins(){
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}


//check winner from rounds played
function checkWinner(choiceP, choiceC){
    if (
      (choiceP == "rock" && choiceC == "scissors") || 
      (choiceP == "paper" && choiceC == "rock") || 
      (choiceP == "scissors" && choiceC == "paper")
    ) {
        return "Player";
      } else if (choiceP == choiceC) {
        return "Tie";
      } else {
        return "Computer";
      }
}

startGame();