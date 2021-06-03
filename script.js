let playerSelection;
const computerChoice = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let textResult;

function computerPlay(){
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    //playerSelection = prompt('Choose your destiny');
    //playerSelection = "rock";
    if (computerSelection === 'rock'){
        if (playerSelection === null){
            textResult = `Cancelled.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
        else if (playerSelection.toLowerCase() === 'rock'){
           textResult = `Tie! Rock can\'t beat rock.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
       }
       else if (playerSelection.toLowerCase() === 'paper'){
        playerScore = ++playerScore;
        textResult = `You win! Paper beats rock.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
       }
       else if (playerSelection.toLowerCase() === 'scissors'){
        computerScore = ++computerScore;
        textResult = `You lose! Rock beats scissors.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
       }
       else{
        textResult = `Only rock, paper and scissors are allowed!\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
       }
    }   
    else if (computerSelection === 'paper'){
        if (playerSelection === null){
            textResult = `Cancelled.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
        else if (playerSelection.toLowerCase() === 'rock'){
            computerScore = ++computerScore;
            textResult = `You lose! Paper beats rock.\nThe score is: You - ${playerScore}, PC - ${computerScore}`; 
        }
        else if (playerSelection.toLowerCase() === 'paper'){
            textResult = `Tie! Paper can\'t beat paper.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
        else if (playerSelection.toLowerCase() === 'scissors'){
            playerScore = ++playerScore;
            textResult = `You win! Scissors beats paper.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
        else{
            textResult = `Only rock, paper and scissors are allowed!\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
    }
    else if (computerSelection === 'scissors'){
        if (playerSelection === null){
            textResult = `Cancelled.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
        else if (playerSelection.toLowerCase() === 'rock'){
            playerScore = ++playerScore;
            textResult = `You win! Rock beats scissors.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
        else if (playerSelection.toLowerCase() === 'paper'){
            computerScore = ++computerScore;
            textResult = `You lose! Scissors beats paper.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
        else if (playerSelection.toLowerCase() === 'scissors'){
            textResult = `Tie! Scissors can\'t beat scissors.\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
        else{
            textResult = `Only rock, paper and scissors are allowed!\nThe score is: You - ${playerScore}, PC - ${computerScore}`;
        }
    } 
    results.textContent = textResult;   
}
function game(){
    //console.log(
        playRound(playerSelection, computerSelection);
        //alert(textResult); 
}
function setPlayerSelection(){
    playerSelection = this.value;
}

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', setPlayerSelection);
rockButton.addEventListener('click', game);
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', setPlayerSelection);
paperButton.addEventListener('click', game);
const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', setPlayerSelection);
scissorsButton.addEventListener('click', game);

const results = document.querySelector(".results");


// const resultsDiv = document.createElement('div');
// resultsDiv.textContent = "WHAT";
// document.body.appendChild(resultsDiv);

//game();

// function alertFunction(){
//     alert('YAYAAYAYAY');
// }