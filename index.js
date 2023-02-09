console.log("hi");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSection, computerSection) {
    if (playerSection == computerSection) {
        return "Tie";
    }
    else if (playerSection == 'rock' && computerSection == 'scissors' ||
        playerSection == 'scissors' && computerSection == 'paper' ||
        playerSection == 'paper' && computerSection == 'rock') {
        return "Player"
    }
    else {
        return "Computer"
    }
}

function playRound(playerSection, computerSection) {
    const result = checkWinner(playerSection, computerSection)
    if (result == "Tie") {
        return "Its a tie"
    }
    else if (result == "Player") {
        return `you win! ${playerSection} beats  ${computerSection}`
    }
    else {
        return `you lose! ${computerSection} beats  ${playerSection}`

    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("select any one rock paper scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome");
    for (i = 0; i < 5; i++) {
        const playerSection = getPlayerChoice();
        const computerSection = getComputerChoice();
        console.log(playRound(playerSection, computerSection));
        if (checkWinner(playerSection, computerSection == "player")) {
            scorePlayer++;
        }
        else if (checkWinner(playerSection, computerSection == "computer")) {
            scoreComputer++;
        }
    }
    console.log("Game Over");
    if (scorePlayer > scoreComputer) {
        console.log("Player was the  Winner");
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer was the Winner");
    }
    else {
        console.log("Tie");
    }
}
game();
