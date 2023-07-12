/*ROCK PAPER SCISSOR GAME
 *
 * Objective: A game of rock paper scissors played over 5 rounds.
 * A single user plays against the "computer".
 * Whoever has the points points after 5 rounds wins.
 * 
 * Pseudocode: 
 * The computer is the first to make its choice which is stored until the user responds.
 * As with the traditional game, 
 * choosing the same move is a tie,
 * rock wins over scissor,
 * scissor wins over paper,
 * paper wins over rock.
 * 
 * The result of the round is announced to the user through an output message and also
 * stored and the next round begins until all 5 rounds are passed.
 * 
 * After all 5 rounds, the winner is announced or a tie is declared based on #points.
*/

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    //console.log(choice)

    if (choice === 0) {
        return "rock";
    } 
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {

    //console.log("computer choice: " + computerSelection);
    //console.log("player choice: " + playerSelection);

    if (computerSelection === playerSelection) {
        return "tie";
    } 
    else if ((computerSelection === "scissor" && playerSelection === "paper")) {
        return "cWin";
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return "cWin";
    }
    else if (computerSelection === "rock" && playerSelection === "scissor") {
        return "cWin";
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        return "pWin";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "pWin";
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        return "pWin";
    }
}

function endGame(winner) {
    statusBar.style.display = 'none';
    messageBox.style.display = 'none';
    document.querySelector('#buttons').style.display = 'none';
    
    if (winner === "p") {
        heading.textContent = 'You Win!'
        finalMessage.textContent = `
        Congratulations on making it to 5 points before the computer!
        It was a a tough game but you've proven yourself to be even tougher!
        Thanks for playing!`
    }
    else {
        heading.textContent = 'You Lose...'
        finalMessage.textContent = `
        You fought long and hard but it simply was not meant to be.
        Come again if you dare...`
    }
    heading.style.display = 'block';
    finalMessage.style.display = 'block';
    playAgain.style.display = 'block';
}

function startGame() {
    heading.style.display = 'none';
    statusBar.style.display = 'flex';
    messageBox.style.display = 'flex';
}


let cWins = 0;
let pWins = 0;
let rounds = 0;

let gameStarted = false;

//HTML ELEMENTS
const statusBar = document.querySelector('#status-bar');
const heading = document.querySelector('#heading');
const buttons = document.querySelectorAll('button');
const numRounds = document.querySelector('#num-rounds');
const userPoints = document.querySelector('#user-points');
const computerPoints = document.querySelector('#computer-points');
const messageBox = document.querySelector('#message-box');
const finalMessage = document.querySelector('#final-message');
const playAgain = document.querySelector("#play-again-button");

buttons.forEach(button => {

    button.addEventListener('click', (event) => {
        if (!gameStarted) {
            gameStarted = true;
            startGame();
        }

        const computerSelection = getComputerChoice();
        const playerSelection = event.target.id;
        const roundResult = playRound(playerSelection, computerSelection);
        
        numRounds.textContent = ++rounds;
        
        if (roundResult === "cWin") {
            cWins++;
            computerPoints.textContent = cWins;
            messageBox.textContent = `${computerSelection} beats ${playerSelection}. You lose the round!`;
        }
        else if (roundResult === 'pWin') {
            pWins++;
            userPoints.textContent = pWins;
            messageBox.textContent = `
            ${playerSelection} beats ${computerSelection}. You win the round!`;
        }
        else {
            messageBox.textContent = `${playerSelection} against ${computerSelection}. It's a tie!`
        }

        if (cWins == 5 || pWins == 5) {
            endGame(cWins === 5 ? "c" : "p");
            //console.log(winner);
            // const endHeading = document.querySelector("#heading-end");
            // endHeading = winner == "p" ? "You Win!" : "You Lost...";
        }
    });
});

playAgain.addEventListener('click', () => {window.location.reload()});




