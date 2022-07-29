//Randomize computer play//
function computerPlay (play) {
    var randomPlay = Math.floor(Math.random() * play.length);
    var randomizedPlay = play[randomPlay];
    return randomizedPlay;
}
var gameSelection = ['rock', 'paper', 'scissors'];
var playerSelection

//Score variables
var playerScore = 0;
var computerScore = 0;

//Bbutton click 
var clickRock = document.querySelector('.btnR')
clickRock.addEventListener('click', () => playerSelection = 'rock');
clickRock.addEventListener('click', playRound);
clickRock.addEventListener('click', finalScore);


var clickPaper = document.querySelector('.btnP')
clickPaper.addEventListener('click', () => playerSelection = 'paper');
clickPaper.addEventListener('click', playRound);
clickPaper.addEventListener('click', finalScore);

var clickSciss = document.querySelector('.btnS')
clickSciss.addEventListener('click', () => playerSelection = 'scissors');
clickSciss.addEventListener('click', playRound);
clickSciss.addEventListener('click', finalScore);


//Targeting Nodes
var playerDisplay = document.querySelector('.player');
var comDisplay = document.querySelector('.computer');

var resultboard = document.querySelector('.resultboard');
var roundResult = document.createElement('div');

var finalboard = document.querySelector('.finalboard');
var finalResult = document.createElement('div');

var againCont = document.querySelector('.again-cont');
var btnAgain = document.createElement('button');



//play function
function playRound (computerSelection) {    
    computerSelection = computerPlay(gameSelection);  
    console.log("Computer: " + computerSelection);
    console.log('Player: ' + playerSelection);

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        playerDisplay.textContent = playerScore;
        roundResult.classList.add('round-result');
        roundResult.textContent = 'You win this round! Rock beats Scissors!';
        resultboard.appendChild(roundResult);
        console.log('You win! Rock beats Scissors!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        playerDisplay.textContent = playerScore;
        roundResult.classList.add('round-result');
        roundResult.textContent = 'You win this round! Paper beats Rock!';
        resultboard.appendChild(roundResult);
        console.log('You win this round! Paper beats Rock!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        playerDisplay.textContent = playerScore;
        roundResult.classList.add('round-result');
        roundResult.textContent = 'You win this round! Scissors beats Paper!';
        resultboard.appendChild(roundResult);
        console.log('You win this round! Scissors beats Paper!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore +=1;
        comDisplay.textContent = computerScore;
        roundResult.classList.add('round-result');
        roundResult.textContent = 'You lose this round! Paper beats Rock!';
        resultboard.appendChild(roundResult);
        console.log('You lose this round! Paper beats Rock!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore +=1;
        comDisplay.textContent = computerScore;
        roundResult.classList.add('round-result');
        roundResult.textContent = 'You lose this round! Scissors beats Paper!';
        resultboard.appendChild(roundResult);
        console.log('You lose this round! Scissors beats Paper!');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore +=1;
        comDisplay.textContent = computerScore;
        roundResult.classList.add('round-result');
        roundResult.textContent = 'You lose this round! Rock Beats Scissors';
        resultboard.appendChild(roundResult);
        console.log('You lose this round! Rock Beats Scissors');
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        roundResult.classList.add('round-result');
        roundResult.textContent = 'Draw! Rock vs Rock!';
        resultboard.appendChild(roundResult);
        console.log('Draw! Rock vs Rock!');
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        roundResult.classList.add('round-result');
        roundResult.textContent = 'Draw! Paper vs Paper!';
        resultboard.appendChild(roundResult);
        console.log('Draw! Paper vs Paper!');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {    
        roundResult.classList.add('round-result');
        roundResult.textContent = 'Draw! Scissors vs Scissors!';
        resultboard.appendChild(roundResult);
        console.log('Draw! Scissors vs Scissors!');
    } 
}

function finalScore() {
    if (playerScore === 5) {
        finalResult.classList.add('final-result');
        finalResult.textContent = "YOU WIN!";
        finalboard.appendChild(finalResult);
        clickRock.disabled = true;
        clickPaper.disabled = true;
        clickSciss.disabled = true;
        btnAgain.classList.add('btnAgain');
        btnAgain.innerHTML = "Play Again?";
        againCont.appendChild(btnAgain);
    }  else if (computerScore === 5) {
        finalResult.classList.add('final-result');
        finalResult.textContent = "YOU LOSE!";
        finalboard.appendChild(finalResult);
        clickRock.disabled = true;
        clickPaper.disabled = true;
        clickSciss.disabled = true;
        btnAgain.classList.add('btnAgain');
        btnAgain.innerHTML = "Play Again?";
        againCont.appendChild(btnAgain);
    } 
}

//Reset game
btnAgain.addEventListener('click', resetGame);

function resetGame (){
    againCont.removeChild(btnAgain);
    resultboard.removeChild(roundResult);
    finalboard.removeChild(finalResult);  
    clickRock.disabled = false;
    clickPaper.disabled = false;
    clickSciss.disabled = false;
    computerScore = 0;
    playerScore = 0;
    comDisplay.textContent = computerScore;
    playerDisplay.textContent = playerScore;
}


//INITIAL CONSOLE.LOG GAME
    // if (clickRock.addEventListener('click', function(){
    //     var playerSelection = 'rock';
        // console.log("Player: " + playerSelection)
        // var computerSelection = computerPlay(gameSelection);    
        // console.log("Computer: " + computerSelection)
        // if (computerSelection === 'rock') {
        //         console.log('Draw! Rock vs Rock!');
        //     } else if (computerSelection === 'paper') {
        //         console.log('You lose! Paper beats Rock!');
        //     } else if (computerSelection === 'scissors') {
        //         console.log('You win! Rock beats Scissors!');
        //     }
//         }))
//         {
//             if (computerSelection === 'rock') {
//             console.log('Draw! Rock vs Rock!');
//             } else if (computerSelection === 'paper') {
//             console.log('You lose! Paper beats Rock!');
//             } else if (computerSelection === 'scissors') {
//             console.log('You win! Rock beats Scissors!');
//             }
            
//         }
//         console.log("Player: " + playerSelection)
// } 
//     else if (clickPaper.addEventListener ('click', function (){
//     var computerSelection = computerPlay(gameSelection);
//     var playerSeclection = 'paper';
//     console.log(computerSelection);
//           if (computerSelection === 'rock') {
//                 console.log('You win! Paper beats Rock!')                
//             } else if (computerSelection === 'paper') {
//                 console.log('Draw! Paper vs Paper!') 
//             } else if (computerSelection === 'scissors') {
//                 console.log('You lose! Scissors beats Paper')
//             }
//   }));

//playRound();




//     if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         playerScore += 1;
//         return 'You win! Rock beats Scissors!';
//     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//         playerScore += 1;
//         return 'You win! Paper beats Rock!';
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         playerScore += 1;
//         return 'You win! Scissors beats Paper!';
//     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//         computerScore +=1;
//         return 'You lose! Paper beats Rock!';
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//         computerScore +=1;
//         return 'You lose! Scissors beats Paper!';
//     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//         computerScore +=1;
//         return 'You lose! Rock Beats Scissors';
//     } else if (playerSelection === 'rock' && computerSelection === 'rock') {
//         return 'Draw! Rock vs Rock!';
//     } else if (playerSelection === 'paper' && computerSelection === 'paper') {
//         return 'Draw! Paper vs Paper!';
//     } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {    
//         return 'Draw! Scissors vs Scissors!';
//     } else {
//         computerScore +=1;
//         return 'You did not make a move!'; 
//     }
// }

//function game() { 
    //for (let i = 0; i < 5; i++) {
        //var playerSelection = prompt("Rock, Paper, Scissors?!").toLowerCase();
        //var computerSelection = computerPlay(gameSelection);
        //console.log(playRound(playerSelection, computerSelection));    
    //}
//}

// function keepScore() {
//     if (playerScore === computerScore) {
//     console.log(`Draw! Final score ${playerScore} - ${computerScore}`);
//     } else if (playerScore > computerScore) {
//     console.log(`You win! Final score ${playerScore} - ${computerScore}`)
//     } else if (playerScore < computerScore) {
//     console.log(`You lose! Final score ${playerScore} - ${computerScore}`)
//     }
// }

//game()
// keepScore ()