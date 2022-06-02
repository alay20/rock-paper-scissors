function computerPlay (play) {
    var randomPlay = Math.floor(Math.random() * play.length);
    var randomizedPlay = play[randomPlay];
    return randomizedPlay;
}

var gameSelection = ['Rock', 'Paper', 'Scissors'];

function aRound (playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock Beats Scissors';
    } else if (playerSelection === "" && computerSelection === 'Rock' || 'Paper' || 'Scissors'){
        return 'You lose! You did not make a move!';
    } else {
        return 'Draw!';
    }
}

var playerSelection = prompt("Rock, Paper, Scissors?!");
var computerSelection = computerPlay(gameSelection);
console.log(aRound(playerSelection, computerSelection));