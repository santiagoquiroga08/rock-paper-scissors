function playRound(humanChoice, computerChoice){
    console.log("Play round: " + humanChoice + " " + computerChoice);
}

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, paper or scissors.").toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);