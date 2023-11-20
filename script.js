var startButton = document.getElementById('start');
var results = document.getElementById('results');

var wins = 0;
var ties = 0;
var losses = 0;

//this function updates the webpage's results table accordingly
function updateResultsTable() {
    document.getElementById('winscount').textContent = wins;
    document.getElementById('tiescount').textContent = ties;
    document.getElementById('lossescount').textContent = losses;
}

//sets up the array of options
var options = ['ROCK','PAPER','SCISSORS'];

var playGame = function() {
    //asks user for their choice
    var userChoice = prompt('Enter rock, paper, or scissors:');
    //if user clicks cancel, immidiately end game
    if (!userChoice) {
        return;
    }
    //converts userchoice to upplercase to make it easier to compare
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
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER")) {
        wins++;
        alert("You win!");
    } else {
        losses++;
        alert("You loose!");
    }

    //runs the update results table function after each round
    updateResultsTable();
};

startButton.addEventListener('click', playGame);