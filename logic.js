
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let index = Math.floor(Math.random() * 3);

    let choice = choices[index];
    console.log("Computer chose " + choice + "!");
    return choice;
}

function getHumanChoice() {

    let choice = prompt("Input a choice (rock, paper, scissors):");

    choice = choice.toLowerCase();

    while (!choices.includes(choice)) {

        console.log("Please input either 'rock', 'paper' or 'scissors' only");

        choice = prompt("Input a choice (rock, paper, scissors):");
        
    }

    return choice;
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors")
                || (humanChoice === "scissors" && computerChoice === "paper")
                || (humanChoice === "paper" && computerChoice === "rock")) {

        console.log("You win! " + humanChoice + " beats " + computerChoice);

        humanScore++;
    } else {

        console.log("You lose! " + computerChoice + " beats " + humanChoice);

        computerScore++;

    }

   return;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
