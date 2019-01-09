const gameResults = {
    wins: 0,
    loses: 0
}

const gameChoice = {
    userChoice: '',
    computerChoice: ''
}


const gameButtons = document.querySelectorAll('.choice');

function userChoice() {
    gameChoice.userChoice = this.dataset.option.valueOf();
    console.log(gameChoice.userChoice);
    gameButtons.forEach(gameButton => {
        gameButton.classList.remove('active');
    });
    this.classList.add('active');
}

gameButtons.forEach(gameButton => {
    gameButton.addEventListener('click', userChoice);
});