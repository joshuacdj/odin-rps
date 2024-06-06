
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let index = Math.floor(Math.random() * 3);

    let choice = choices[index];
    // console.log("Computer chose " + choice + "!");
    return choice;
}

// function getHumanChoice() {

//     let choice = prompt("Input a choice (rock, paper, scissors):");

//     choice = choice.toLowerCase();

//     while (!choices.includes(choice)) {

//         console.log("Please input either 'rock', 'paper' or 'scissors' only");

//         choice = prompt("Input a choice (rock, paper, scissors):");
        
//     }

//     return choice;
    
// }

const result = document.querySelector(".results");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // reset the div to empty each time playRound is called
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }

    compChoice = document.createElement("p");
    compChoice.textContent = "Computer chose " + computerChoice;

    result.append(compChoice);


    resultText = document.createElement("p");

    if (humanChoice === computerChoice) {
        resultText.textContent = "It's a tie!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors")
                || (humanChoice === "scissors" && computerChoice === "paper")
                || (humanChoice === "paper" && computerChoice === "rock")) {

        resultText.textContent = "You win! " + humanChoice + " beats " + computerChoice;

        humanScore++;
    } else {

        resultText.textContent = "You lose! " + computerChoice + " beats " + humanChoice;

        computerScore++;

    }

    resultText.textContent += "| Score: [You: " + humanScore + "] " + "[Computer: " + computerScore + "]";

    result.append(resultText);

    if (humanScore == 5) {
        alert("You have won the game!");
    } else if (computerScore == 5) {
        alert("Computer has won the game!");
    }

    if (humanScore == 5 || computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
    }
}

let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let choice = button.textContent.toLowerCase();

        playRound(choice, getComputerChoice());
    });


});



// function playGame() {

//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {

//         humanChoice = humanChoice.toLowerCase();
//         computerChoice = computerChoice.toLowerCase();

//         if (humanChoice === computerChoice) {
//             console.log("It's a tie!");
//         } else if ((humanChoice === "rock" && computerChoice === "scissors")
//                     || (humanChoice === "scissors" && computerChoice === "paper")
//                     || (humanChoice === "paper" && computerChoice === "rock")) {

//             console.log("You win! " + humanChoice + " beats " + computerChoice);

//             humanScore++;
//         } else {

//             console.log("You lose! " + computerChoice + " beats " + humanChoice);

//             computerScore++;

//         }
//     }

//     for (let i = 0; i < 5; i++) {

//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);

//         console.log("Current scores - [Human: " + humanScore + "] [Computer: " + computerScore + "]");
//     }

//     if (humanScore > computerScore) {

//         console.log("You win the game!");
//     } else if (humanScore < computerScore) {

//         console.log("You lose the game!");
        
//     } else {

//         console.log("The game is tied!");
//     }

    
// }

// playGame();
