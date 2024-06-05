
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let index = Math.floor(Math.random() * 3);

    return choices[index];
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
