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
        return 'You win! Rock beats Scissors!';
        playerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock!';
        playerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper!';
        playerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock!';
        computerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper!';
        computerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock Beats Scissors';
        computerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Draw!';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Draw!';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {    
        return 'Draw!';
    } else {
        return 'You did not make a move!'; 
        computerScore +=1;
    }
}

function game() { 
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("Rock, Paper, Scissors?!").toLowerCase();
        var computerSelection = computerPlay(gameSelection);
        console.log(playRound(playerSelection, computerSelection));    
    }
}

game()

//if (playerScore = computerScore) {
//    console.log('Draw!');
//} else if (playerScore > computerScore) {
//    console.log('You Win!')
//} else if (playerScore < computerScore) {
//    console.log('You Lose!')
//}


