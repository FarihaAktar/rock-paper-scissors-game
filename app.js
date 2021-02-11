let pScore = 0;
let cScore = 0;
const playBtn = document.querySelector(".start-btn");
const introScreen = document.querySelector(".intro");
const matchScreen = document.querySelector(".match");
playBtn.addEventListener('click', function () {
    introScreen.classList.add("fade-out");
    matchScreen.classList.add("fade-in");
    playMatch()
})
// match section
const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img")
    const computerOption = ["rock", "paper", "scissors"];

    hands.forEach(hand => {
        hand.addEventListener("animationend", function () {
            // console.log(this)
            this.style.animation = "";
        });
    });

    options.forEach(option => {
        option.addEventListener('click', function () {
            const randomNumber = Math.floor(Math.random() * 3)
            const computerChoice = computerOption[randomNumber];
            setTimeout(() => {
                compareHands(this.textContent, computerChoice)
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
            }, 2000)
            playerHand.style.animation = "shakePlayer 2s ease"
            computerHand.style.animation = "shakeComputer 2s ease"
        })
    });
};

const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};

// compare hands function
const compareHands = (playerChoice, computerChoice) => {
    const winnerText = document.querySelector(".winner");
    if (playerChoice == computerChoice) {
        winnerText.innerHTML = "It's a draw!"
        return;
    }
    // rock
    if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            winnerText.innerHTML = "YOU WINS!"
            pScore++;
            updateScore();
            return;
        }
        else{
            winnerText.innerHTML = "COMPUTER WINS!"
            cScore++;
            updateScore()
            return;
        }
    }
    // paper
    if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            winnerText.innerHTML = "YOU WINS!"
            pScore++;
            updateScore();
            return;
        }
        else{
            winnerText.innerHTML = "COMPUTER WINS!"
            cScore++;
            updateScore()
            return;
        }
    }
    // scissors
    if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            winnerText.innerHTML = "YOU WINS!"
            pScore++;
            updateScore();
            return;
        }
        else{
            winnerText.innerHTML = "COMPUTER WINS!"
            cScore++;
            updateScore()
            return;
        }
    }

}