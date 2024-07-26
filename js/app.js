/*-------------------------------- Constants --------------------------------*/
// 1) 3 user choices of "rock", "paper", or "siccors"
const choices = ['rock', 'paper', 'scissors'];

/*-------------------------------- Variables --------------------------------*/
// 2) Define our variables for state  (state is the status what changes do we need to keep track of)
    // The players choice
    let playerChoice;
    // The comp choice
    let computerChoice;
    // The match result - win/lose/tie
    // A result message- display the result/ who won 
    let msg;

/*------------------------ Cached Element References ------------------------*/
// 3) Reference to DOM element to display message
const resultDispslayEl = document.querySelector ('#result-dsiplay')
    // 3 button DOM references for rock, paper, sicissors

/*-------------------------------- Functions --------------------------------*/
// handle generating random selections for the computer player
// compare player and computer choices check for a winner
    // if/else comparison to all choices 
        // rock beats scissors
        // scissors beats paper
        // paper beats rock 
        // same options - its a tie

//render a win/lose/tie message to the player 
    // including player and comp choices in the msg
    // clearly indicating who won/result 
/*----------------------------- Event Listeners -----------------------------*/
// handle a plyaer clicking a button 

