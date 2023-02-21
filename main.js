
// getComputerChoice function, loop through "RPS" randomly
// a function where if player choice = computer choice "draw"
// function of player choice != computer choice "lose" or "win"
// print computer selection
// print player selection
// print playRound() of both selection to trigger result

// const r = "rock";
// const p = "paper";
// const s = "scissors";
// let choices = [r, p, s];

// function game() {

//     for (let i = 0; i < 5; i++){

//         playerSelection = prompt("What is your weapon?");

//         console.log("Round: "+(i+1));
//         console.log("Player selected: "+playerSelection);
//         console.log("Computer selected: "+computerSelection);        
//         console.log(playRound(playerSelection, computerSelection));
//         console.log ("----------");
//     }
// }

// function getComputerChoice(){
//     let random = choices[Math.floor(Math.random()*choices.length)];
//     return random;
// }

// function playRound(playerSelection, computerSelection){
    
//     // const playerSelection = playerChoice();
//     const computerSelection = getComputerChoice();

//     if(playerSelection === computerSelection){
//         return "Draw";
//     }else if(
//     (choiceP === "rock" && choiceC === "scissors") || 
//     (choiceP === "paper" && choiceC === "rock") || 
//     (choiceP === "scissors" && choiceC === "paper")){
//     return "Player Wins";
// }else {
//     return "Player Loses";
// }
// }

// game();


//  ----  walk through solution


const choices = ["rock", "paper", "scissors"];
const winners = [];

// game function, 5 rounds, log wins
function game(){
    for (let i = 0; i < 5; i++){
        playRound(i);
    }
    logWins();
}

// round plays, check winner, push winner into winners array, log round
function playRound(round){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, (round+1));

}

// player choice func, input check (spelling, word, null, to Lowercase)
function playerChoice(){
  let input = prompt("Choose between rock, paper or scissors");
  while (input == null){
    input = prompt("Choose between rock, paper or scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);

  while (check == false){
    input = prompt(
        "Choose between rock, paper or scissors, spelling must be exact"
    );
    while (input == null){
        input = prompt("Choose between rock, paper or scissors");
      }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

// randomise computerchoice
function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)];
}
//input validator
function validateInput(choice){
    return choices.includes(choice);
}

// check winner from rounds played
function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "Draw";
    }else if(
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "paper" && choiceC === "rock") || 
        (choiceP === "scissors" && choiceC === "paper")
    ) {
        return "Player Wins";
    }else {
     return "Player Loses";
    }
}
// logging Winners
function logWins(){
    let playerWins = winners.filter((item) => item == "Player Wins").length;
    let computerWins = winners.filter((item) => item == "Player Loses").length;
    let draws = winners.filter((item) => item == "Draw").length;
    console.log("Results: ");
    console.log("Player Wins: ", playerWins);
    console.log("Computer Wins: ", computerWins);
    console.log("Draw: ", draws);
}
//log round results
function logRound(playerChoice, computerChoice, winner, round) {

    console.log("Round: "+round);
    console.log("Player chose: "+playerChoice);
    console.log("Computer chose: "+computerChoice);
    console.log(winner);
    console.log ("----------");

}
