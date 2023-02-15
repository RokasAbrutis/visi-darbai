

// choose rock paper or scissors
const rock = document.querySelector(".game-choice-rock")
const paper = document.querySelector(".game-choice-paper")
const scissors = document.querySelector(".game-choice-scissors")
const playerChoice = document.querySelector(".player-choice")
const winner = document.querySelector(".winner")

let choice;

rock.addEventListener("click", () => {
    choice = "Rock";
    playerChoice.innerHTML = "Rock";
})
paper.addEventListener("click", () => {
    choice = "Paper";
    playerChoice.innerHTML = "Paper";
})
scissors.addEventListener("click", () => {
    choice = "Scissors";
    playerChoice.innerHTML = "Scissors";
})

// bot choice
const botChose = document.querySelector(".bot-choice")


// play button functionality
const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", () => {
    if(playButton.innerHTML === "Play") {
       
        playButton.innerHTML = "Play Again";
        const choicesArray = ["Rock", "Paper", "Scissors"]
        const randomNum = Math.ceil(Math.random() * 3)
        const randomChoice = choicesArray[randomNum - 1] 
        botChose.innerHTML = randomChoice;
        
        if(!choice) {
            winner.innerHTML = "Please choose something";
        } else if(choice === "Rock" && randomChoice === "Scissors" || choice === "Paper" && randomChoice === "Rock" || choice === "Scissors" && randomChoice === "Paper") {
            winner.innerHTML = "Player Wins!"
        } else if (choice === "Rock" && randomChoice === "Paper" || choice === "Paper" && randomChoice === "Scissors" || choice === "Scissors" && randomChoice === "Rock") {
            winner.innerHTML = "Bot Wins!"
        } else {
            winner.innerHTML = "Draw"
        }

    } else {
        playButton.innerHTML = "Play";
        winner.innerHTML = "";
        botChose.innerHTML = "";
    }

    
})

