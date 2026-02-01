function playRound(humanChoice, computerChoice){
    
    console.log("Play round: " + humanChoice + " " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie.")
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") || (
        humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log("You lose, " + computerChoice + " beats " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win, " + humanChoice +" beats " + computerChoice);   
    } 

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