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
        return "ROCK";
    } 
    else if (choice === 1) {
        return "PAPER";
    }
    else {
        return "SCISSOR";
    }
}

function playRound(playerSelection, computerSelection) {

    //console.log("computer choice: " + computerSelection);
    //console.log("player choice: " + playerSelection);

    if (computerSelection === playerSelection) {
        return "tie";
    } 
    else if ((computerSelection === "SCISSOR" && playerSelection === "PAPER")) {
        return "cWin";
    }
    else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
        return "cWin";
    }
    else if (computerSelection === "ROCK" && playerSelection === "SCISSOR") {
        return "cWin";
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        return "pWin";
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "pWin";
    }
    else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        return "pWin";
    }
}

function game() {
    let cWins = 0;
    let pWins = 0;

    const MAXROUNDS = 5;

    for (let i = 0; i < MAXROUNDS; i++) {
        const computerSelection = getComputerChoice();

        let playerSelection = prompt("Please enter \"ROCK\", \"PAPER\" or \"SCISSOR\":");
        playerSelection = playerSelection.toUpperCase();
        
        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === "tie") {
            pWins++;
            cWins++;
            console.log("It's a tie!")
        }
        else if (roundResult === "cWin") {
            cWins++;
            console.log(`${computerSelection} beats ${playerSelection}. You lose the round!`)
        }
        else {
            pWins++;
            console.log(`${playerSelection} beats ${computerSelection}. You win the round!`)
        }
    }

    if (cWins === pWins) {
        console.log("The game ends in a tie!\nThank you for playing!")
    }
    else if (pWins > cWins) {
        console.log(`
            Your final score: ${pWins}/${MAXROUNDS}
            You've won the game!
            Thank you for playing!
        `)
    }
    else {
        console.log(`
        Your final score: ${pWins}/${MAXROUNDS}
        Unfortunately you've lost the game.
        Better luck next time.
        Thank you for playing!
        `)
    }
}

game()
