function getComputerChoice(){
    let val = Math.random();
    if (val < 1/3){
        return "rock";
    }else if (val >=1/3 && val <2/3){
        return  "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("RPS?");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice){
        console.log("Tied.");
    } else {
        if (humanChoice == "rock"){
            if (computerChoice == "paper"){
                console.log(`You chose ${humanChoice} and the computer chose ${computerChoice} so you lose`);
                computerScore ++;
            } else {
                console.log(`You chose ${humanChoice} and the computer chose ${computerChoice} so you win`);
                humanScore ++;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissors"){
                console.log(`You chose ${humanChoice} and the computer chose ${computerChoice} so you lose`);
                computerScore ++;
            } else {
                console.log(`You chose ${humanChoice} and the computer chose ${computerChoice} so you win`);
                humanScore ++;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock"){
                console.log(`You chose ${humanChoice} and the computer chose ${computerChoice} so you lose`);
                computerScore ++;
            } else {
                console.log(`You chose ${humanChoice} and the computer chose ${computerChoice} so you win`);
                humanScore ++;
            }
        }
    }
}


function playGame(rounds = 5){
    for (let i = 0; i < rounds; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log(`Final score is ${humanScore}-${computerScore}. Human wins.`);
    } else {
        console.log(`Final score is ${humanScore}-${computerScore}. Human loses.`);
    }
}

playGame();