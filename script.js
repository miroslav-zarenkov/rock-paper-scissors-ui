let playerSelection;
const computerChoice = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt('Choose your destiny');
    if (computerSelection === 'rock'){
        if (playerSelection === null){
            return(`Cancelled.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
        }
        else if (playerSelection.toLowerCase() === 'rock'){
           return(`Tie! Rock can\'t beat rock.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
       }
       else if (playerSelection.toLowerCase() === 'paper'){
        playerScore = ++playerScore;
        return(`You win! Paper beats rock.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
       }
       else if (playerSelection.toLowerCase() === 'scissors'){
        computerScore = ++computerScore;
        return(`You lose! Rock beats scissors.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
       }
       else{
           return(`Only rock, paper and scissors are allowed!\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
       }
    }   
    else if (computerSelection === 'paper'){
        if (playerSelection === null){
            return(`Cancelled.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
        }
        else if (playerSelection.toLowerCase() === 'rock'){
            computerScore = ++computerScore;
            return(`You lose! Paper beats rock.\nThe score is: You - ${playerScore}, PC - ${computerScore}`); 
        }
        else if (playerSelection.toLowerCase() === 'paper'){
            return(`Tie! Paper can\'t beat paper.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
        }
        else if (playerSelection.toLowerCase() === 'scissors'){
            playerScore = ++playerScore;
            return(`You win! Scissors beats paper.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
        }
        else{
            return(`Only rock, paper and scissors are allowed!\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
        }
    }
    else if (computerSelection === 'scissors'){
        if (playerSelection === null){
            return(`Cancelled.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
        }
        else if (playerSelection.toLowerCase() === 'rock'){
            playerScore = ++playerScore;
            return(`You win! Rock beats scissors.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
        }
        else if (playerSelection.toLowerCase() === 'paper'){
            computerScore = ++computerScore;
            return(`You lose! Scissors beats paper.\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
        }
        else if (playerSelection.toLowerCase() === 'scissors'){
            return(`Tie! Scissors can\'t beat scissors.\nThe score is: You - ${playerScore}, PC - ${computerScore}`)
        }
        else{
            return(`Only rock, paper and scissors are allowed!\nThe score is: You - ${playerScore}, PC - ${computerScore}`);
        }
    }    
}
function game(){
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));  
}

game();
