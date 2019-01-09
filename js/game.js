const gameResults = {
    wins: 0,
    loses: 0
}

const gameChoice = {
    userChoice: '',
    computerChoice: ''
}

const gameButtons = document.querySelectorAll('.choice');


function computerChoice() {
    const index = Math.floor(Math.random() * gameButtons.length);
    gameChoice.computerChoice = gameButtons[index].dataset.option.valueOf();
    console.log(`Computer choice = ${gameChoice.computerChoice}`);
}

function userChoice() {
    gameChoice.userChoice = this.dataset.option.valueOf();
    console.log(`Computer choice = ${gameChoice.userChoice}`);
    gameButtons.forEach(gameButton => {
        gameButton.classList.remove('active');
    });
    this.classList.add('active');
}

function startGame() {
    computerChoice();
}

startGame();


gameButtons.forEach(gameButton => {
    gameButton.addEventListener('click', userChoice);
});