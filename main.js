function computerPlay (play) {
    var randomPlay = Math.floor(Math.random() * play.length);
    var randomizedPlay = play[randomPlay];
    return randomizedPlay;
}

var gameSelection = ['Rock', 'Paper', 'Scissors'];

var computerSelection = computerPlay(gameSelection);

function aRound () {
    var playerSelection = prompt("Rock, Paper, Scissors???");
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log('You win! Rock beats Scissors!');
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log('You win! Paper beats Rock!');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('You win! Scissors beats Paper!');
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log('You lose! Paper beats Rock!');
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log('You lose! Scissors beats Paper!');
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('You lose! Rock Beats Scissors');
    } else {
        console.log('Draw!');
    }
}
        
aRound();