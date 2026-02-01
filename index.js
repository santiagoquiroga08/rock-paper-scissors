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
        computerScore ++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win, " + humanChoice + " beats " + computerChoice);
        humanScore ++;   
    } 

}

let humanScore = 0;
let computerScore = 0;

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

const humanSelection1 = getHumanChoice();
const computerSelection1 = getComputerChoice();
playRound(humanSelection1, computerSelection1);
console.log("Your score is " + humanScore + " computer score is " + computerScore);

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();
playRound(humanSelection2, computerSelection2);
console.log("Your score is " + humanScore + " computer score is " + computerScore);

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();
playRound(humanSelection3, computerSelection3);
console.log("Your score is " + humanScore + " computer score is " + computerScore);

const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();
playRound(humanSelection4, computerSelection4);
console.log("Your score is " + humanScore + " computer score is " + computerScore);

const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();
playRound(humanSelection5, computerSelection5);
console.log("Your score is " + humanScore + " computer score is " + computerScore);