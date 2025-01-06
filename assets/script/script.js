//Get elements from HTML document
let startButton = document.getElementById('start');
let results = document.getElementById('results');
let gameArea = document.getElementById('gameArea');
let userPickDiv = document.getElementById('userPick');
let computerPickDiv = document.getElementById('computerPick');
let feedbackDiv = document.getElementById('feedback');
let winsCountTd = document.getElementById('winscount');
let tiesCountTd = document.getElementById('tiescount');
let lossesCountTd = document.getElementById('lossescount');

//set up stats variables
let wins = 0;
let ties = 0;
let losses = 0;

//Dynamically create images
let rockImg = document.createElement('img');
let paperImg = document.createElement('img');
let scissorsImg = document.createElement('img');
rockImg.setAttribute('src', './assets/images/rockimage.PNG');
paperImg.setAttribute('src', './assets/images/paperimage.PNG');
scissorsImg.setAttribute('src', './assets/images/scissorsimage.PNG');

//sets up the array of image options
const optionsRPS = [rockImg, paperImg, scissorsImg];

//this function updates the webpage's results table accordingly
function updateResultsTable() {
    winsCountTd.textContent = wins;
    tiesCountTd.textContent = ties;
    lossesCountTd.textContent = losses;
}

//Event listener on play button
startButton.addEventListener('click', () => {
    startGame();
});
//Event listener on userPickDiv
userPickDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        //Set user's pick
        let userPick = document.createElement('img');
        userPick.setAttribute('src', event.target.src);
        //Clear the userPickDiv
        userPickDiv.textContent = '';
        //Append selected image to the dedicated div
        userPickDiv.appendChild(userPick);
    
        //Set computer's pick
        let randomCompPick = optionsRPS[Math.floor(Math.random() * optionsRPS.length)];
        computerPickDiv.appendChild(randomCompPick);
    
        console.log(userPick);
        console.log(randomCompPick);
        //Check who if win, tie, or loss
        if (userPick.src === randomCompPick.src) {
            ties++;
            feedbackDiv.textContent = `It's a tie!`;
        } else if (
            (userPick.src.includes('rockimage.PNG') && randomCompPick.src.includes('scissorsimage.PNG')) ||
            (userPick.src.includes('paperimage.PNG') && randomCompPick.src.includes('rockimage.PNG')) ||
            (userPick.src.includes('scissorsimage.PNG') && randomCompPick.src.includes('paperimage.PNG'))) {
                wins++;
                feedbackDiv.textContent = `You win!`;
            } else {
                losses++;
                feedbackDiv.textContent = `You loose!`;
            }
        //runs the update results table function after each round
        updateResultsTable();
    }
});

//Function to start game
function startGame() {
    //Clears out game area
    userPickDiv.textContent = '';
    computerPickDiv.textContent = '';
    feedbackDiv.textContent = '';
    //Append images to userPickDiv
    userPickDiv.append(rockImg, paperImg, scissorsImg);
};