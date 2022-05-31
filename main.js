function computerPlay (play) {
    var randomPlay = Math.floor(Math.random() * play.length);
    var randomizedPlay = play[randomPlay];
    return randomizedPlay
}

var gameSelection = ['Rock', 'Paper', 'Scissors'];

var computerSelection = computerPlay(gameSelection);
