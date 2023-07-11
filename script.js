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
    if (winner === "p") {
        console.log(`
            You've won the game!
            Thank you for playing!
            Final score: ${pWins} wins, ${cWins} losses
        `)
    }
    else {
        console.log(`
        Unfortunately you've lost the game.
        Better luck next time.
        Thank you for playing!
        Final score: ${pWins} wins, ${cWins} losses
        `)
    }
}


let cWins = 0;
let pWins = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', (event) => {
        const computerSelection = getComputerChoice();
        const playerSelection = event.target.id;
        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "cWin") {
            cWins++;
            console.log(`${computerSelection} beats ${playerSelection}. You lose the round!`)
        }
        else if (roundResult === 'pWin') {
            pWins++;
            console.log(`${playerSelection} beats ${computerSelection}. You win the round!`)
        }

        if (cWins == 5 || pWins == 5) {endGame(cWins == 5 ? "c" : "p");}
    });
});






