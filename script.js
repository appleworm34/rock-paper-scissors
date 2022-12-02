function getComputerChoice(){
    let choice = Math.floor(Math.random()*10) % 3;
    let choicelist = ["rock", "paper", "scissors"];
    return choicelist[choice];
}

const computerScore = document.querySelector('#com-score');
const playerScore = document.querySelector('#player-score');
const resultMessage = document.querySelector('#result-message');

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection)
        return 0;
    else if(playerSelection === "rock"){
        if(computerSelection === "scissors"){
            return 1;
        }
        else{
            return -1;
        }     
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            return 1;
        }
        else{
            return -1;
        }
    }
    else{
        if(computerSelection === "paper"){
            return 1;
        }
        else{
            return -1;
        }
    }
}

function updateScore(result){
    let newScore;
    if(result == 1){
        newScore = parseInt(playerScore.textContent);
        newScore++;
        playerScore.textContent = newScore.toString();
        resultMessage.textContent = "You won the round!";
    }
    else if(result == -1){
        newScore = parseInt(computerScore.textContent);
        newScore++;
        computerScore.textContent = newScore.toString();
        resultMessage.textContent = "You lost the round!";
    }
    else{
        resultMessage.textContent = "Draw!";
    }
}

function checkWinner(){
    if(parseInt(playerScore.textContent) == 5){
        rock_btn.remove();
        paper_btn.remove();
        scissors_btn.remove();
        resultMessage.textContent = "You were the first to get to 5. You won!";
        alert("You won!");
    }
    else if(parseInt(computerScore.textContent) == 5){
        rock_btn.remove();
        paper_btn.remove();
        scissors_btn.remove();
        resultMessage.textContent = "Computer was the first to get to 5. You lost!";
        alert("You lost!");
    }
}

let result;

const rock_btn = document.querySelector('#rock');
rock_btn.addEventListener('click', () => {
    result = playRound("rock", getComputerChoice());
    updateScore(result);
    checkWinner();
});
const paper_btn = document.querySelector('#paper');
paper_btn.addEventListener('click', () => {
    result = playRound("paper", getComputerChoice());
    updateScore(result);
    checkWinner();
});
const scissors_btn = document.querySelector('#scissors');
scissors_btn.addEventListener('click', () => {
    result = playRound("sisso", getComputerChoice());
    updateScore(result);
    checkWinner();
});





// function game(){
//     while(playerScore !=5 && computerScore != 5){
//         let playerSelection = prompt("Rock, Paper or Scissors?");
//         let computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }

//     if(playerScore > computerScore)
//         alert("Player wins!");
//     else
//         alert("Computer wins!")
    
//     console.log("Score: " + playerScore + "-" + computerScore);
// }

// game();