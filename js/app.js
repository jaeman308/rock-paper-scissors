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
const resultDisplayEl = document.querySelector('#result-display')
    // 3 button DOM references for rock, paper, sicissors

/*-------------------------------- Functions --------------------------------*/
// handle generating random selections for the computer player
// 4) handle player choice 
const getPlayerChoice = (event) => {
    playerChoice = event.target.id;
}
const getComputerChoice = () => {
    const randomIndex = Math.floor (Math.random() * 
    choices.length)
    computerChoice = choices[randomIndex];
}
// compare player and computer choices check for a winner
// if/else comparison to all choices 
// rock beats scissors
// scissors beats paper
// paper beats rock 
// same options - its a tie
const compare = () => {
    if (playerChoice === computerChoice) {
      msg = 'You tied!';
    } else if (playerChoice === choices[0] && computerChoice === choices[2]) { 
      // "rock" vs. "scissors"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[1] && computerChoice === choices[0]) { 
      // "paper" vs. "rock"
      msg = 'Congrats! You win!';
    } else if (playerChoice === choices[2] && computerChoice === choices[1]) { 
      // "scissors" vs. "paper"
      msg = 'Congrats! You win!';
    } else {
      msg = 'You lose! Try again?';
    }
    console.log(msg)
}
  
//render a win/lose/tie message to the player 
const render = () => {
    resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose 
    ${computerChoice}. ${msg}`;
}
// including player and comp choices in the msg
// clearly indicating who won/result 

const play = (event) => {
    getPlayerChoice(event);
    getComputerChoice();
    compare();
    render();
};

/*----------------------------- Event Listeners -----------------------------*/
// 5)handle a plyaer clicking a button 
document.querySelector('#rock').addEventListener('click', play)
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);