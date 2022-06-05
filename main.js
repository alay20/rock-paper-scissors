function computerPlay (play) {
    var randomPlay = Math.floor(Math.random() * play.length);
    var randomizedPlay = play[randomPlay];
    return randomizedPlay;
}

var gameSelection = ['rock', 'paper', 'scissors'];
var playerScore = 0
var computerScore = 0

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return 'You win! Paper beats Rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return 'You win! Scissors beats Paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore +=1;
        return 'You lose! Paper beats Rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore +=1;
        return 'You lose! Scissors beats Paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore +=1;
        return 'You lose! Rock Beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Draw! Rock vs Rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Draw! Paper vs Paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {    
        return 'Draw! Scissors vs Scissors!';
    } else {
        computerScore +=1;
        return 'You did not make a move!'; 
    }
}

function game() { 
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("Rock, Paper, Scissors?!").toLowerCase();
        var computerSelection = computerPlay(gameSelection);
        console.log(playRound(playerSelection, computerSelection));    
    }
}

function scoreKeeping() {
    if (playerScore === computerScore) {
    console.log(`Draw! ${playerScore} - ${computerScore}`);
    } else if (playerScore > computerScore) {
    console.log(`You win! ${playerScore} - ${computerScore}`)
    } else if (playerScore < computerScore) {
    console.log(`You lose! ${playerScore} - ${computerScore}`)
    }
}

game()
scoreKeeping ()