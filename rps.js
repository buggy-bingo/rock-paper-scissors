function getComputerChoice(){
    val = Math.random();
    if (val < 1/3){
        return "rock";
    }else if (val >=1/3 && val <2/3){
        return  "paper"
    }else {
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("RPS?")
    return choice.toLowerCase();
}