var startButton = document.getElementById('Start');

var wins = 0;
var ties = 0;
var loses = 0;

//sets up the array of options
var options = ['ROCK','PAPER','SCICORS'];

var playGame = function() {
    //asks user for their choice
    var userChoice = prompt('Enter rock, paper, or scicors:');
    //if user clicks cancel, immidiately end game
    if (!userChoice) {
        return;
    }
    //converts userchoice to upplercase
    userChoice = userChoice.toUpperCase();

    //get random index from options array
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    alert('The Computer chooses '+computerChoice);

    //if choices are same, then it's a tie
    if (userChoice === computerChoice) {
        ties++;
        alert("It's a tie!");
        
        //check win or loose condition for player
    } else if (
        (userChoice === "ROCK" && computerChoice === "SCICORS") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCICORS" && computerChoice === "PAPER")) {
        wins++;
        alert("You win!");
    } else {
        loses++;
        alert("You loose!");
    }
    
    //ask if user wants to play again
    var playAgain = confirm("Play Again?");
    //run game again if payer confirms
    if (playAgain) {
        playGame();
    }
};

startButton.addEventListener('click', playGame);