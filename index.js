
const options = ["rock", "paper", "scissors"];

game();

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome");
    for (i = 0; i < 5; i++) {
        const playerSection = getPlayerChoice();
        const computerSection = getComputerChoice();
        console.log(playRound(playerSection, computerSection));
        if (checkWinner(playerSection, computerSelection)== "player") {
            scorePlayer++;
        }
        else if (checkWinner(playerSection,computerSelection)== "computer") {
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

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("select any one Rock, Paper or Scissors");
        // console.log(choice);
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
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






