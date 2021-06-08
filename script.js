let playerSelection;
const computerChoice = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let textResult;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playAgainButton = document.querySelector('#play-again');
const results = document.querySelector(".results");
const score = document.querySelector(".score")
document.getElementById('rock').style.visibility = 'vissible';
document.getElementById('paper').style.visibility = 'vissible';
document.getElementById('scissors').style.visibility = 'vissible';
document.getElementById('play-again').style.visibility = 'hidden';
rockButton.addEventListener('click', setPlayerSelection);
rockButton.addEventListener('click', setComputerSelection);
rockButton.addEventListener('click', game);
paperButton.addEventListener('click', setPlayerSelection);
paperButton.addEventListener('click', setComputerSelection);
paperButton.addEventListener('click', game);
scissorsButton.addEventListener('click', setPlayerSelection);
scissorsButton.addEventListener('click', setComputerSelection);
scissorsButton.addEventListener('click', game);
playAgainButton.addEventListener('click', playAgain);

function setComputerSelection(){
    computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function setPlayerSelection(){
    playerSelection = this.value;
}

function playRound(playerSelection, computerSelection){
    if (computerSelection === 'rock'){
        if (playerSelection === 'rock'){
           textResult = `Tie! Rock can't beat rock.`;
       }
       else if (playerSelection === 'paper'){
        playerScore = ++playerScore;
        textResult = `You win! Paper beats rock.`;
       }
       else if (playerSelection === 'scissors'){
        computerScore = ++computerScore;
        textResult = `You lose! Rock beats scissors.`;
       }
    }   
    else if (computerSelection === 'paper'){
        if (playerSelection === 'rock'){
            computerScore = ++computerScore;
            textResult = `You lose! Paper beats rock.`; 
        }
        else if (playerSelection === 'paper'){
            textResult = `Tie! Paper can't beat paper.`;
        }
        else if (playerSelection === 'scissors'){
            playerScore = ++playerScore;
            textResult = `You win! Scissors beats paper.`;
        }
    }
    else if (computerSelection === 'scissors'){
        if (playerSelection === 'rock'){
            playerScore = ++playerScore;
            textResult = `You win! Rock beats scissors.`;
        }
        else if (playerSelection === 'paper'){
            computerScore = ++computerScore;
            textResult = `You lose! Scissors beats paper.`;
        }
        else if (playerSelection === 'scissors'){
            textResult = `Tie! Scissors can't beat scissors.`;
        }
    } 
    score.textContent = `The score is ${playerScore} - ${computerScore}`;
    results.textContent = textResult;
}   
function game(){
    playRound(playerSelection, computerSelection);
    gameOver();
}
   
function gameOver(){
    if (playerScore == 5 || computerScore == 5){
        score.textContent = `Game Over. The score is ${playerScore} - ${computerScore}`;
        document.getElementById('rock').style.visibility = 'hidden';
        document.getElementById('paper').style.visibility = 'hidden';
        document.getElementById('scissors').style.visibility = 'hidden';
        document.getElementById('play-again').style.visibility = 'visible';
        if (playerScore > computerScore){
            results.textContent = "You won!";
        }
        else{
            results.textContent = "You lost!";
        }
    }
}

function playAgain(){
    document.getElementById('rock').style.visibility = 'visible';
    document.getElementById('paper').style.visibility = 'visible';
    document.getElementById('scissors').style.visibility = 'visible';
    document.getElementById('play-again').style.visibility = 'hidden';
    playerScore = 0;
    computerScore = 0;
    score.textContent = `The score is ${playerScore} - ${computerScore}`;
}
