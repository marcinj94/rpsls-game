const gameResults = {
    wins: 0,
    loses: 0
}

const gameChoice = {
    userChoice: '',
    computerChoice: ''
}

const gameButtons = document.querySelectorAll('.choice');
const resultInformation = document.querySelector('.result-info span');
const startButton = document.querySelector('.start');
const winsInformation = document.querySelector('span.wins');
const loosesInformation = document.querySelector('span.looses');

const textInformation = [
    'Rock crushes Scissors',
    'Rock crushes Lizard',
    'Lizard eats Paper',
    'Lizard poisons Spock',
    'Spock vaporizes rock',
    'Spock smashes scissors',
    'Scissors decapitates lizard',
    'Scissors cuts paper',
    'Paper covers rock',
    'Paper disproves rock'
];

function computerChoice() {
    const index = Math.floor(Math.random() * gameButtons.length);
    gameChoice.computerChoice = gameButtons[index].dataset.option.valueOf();
}

function userChoice() {
    gameChoice.userChoice = this.dataset.option.valueOf();
    gameButtons.forEach(gameButton => {
        gameButton.classList.remove('active');
    });
    this.classList.add('active');
}

function addClass(string) {
    if (string == 'win') {
        resultInformation.classList.add('win');
        resultInformation.classList.remove('lost');
    } else if (string == 'lose') {
        resultInformation.classList.add('lost');
        resultInformation.classList.remove('win');
    }
};

function addTextContent(string, index) {
    if (string == 'won') {
        resultInformation.textContent = `${textInformation[index]}, you WON!! :)`;
    } else if (string == 'lost') {
        resultInformation.textContent = `Unfortunately, ${textInformation[index]}, you LOST!! :(`;
    }
};

function increaseWinPoints() {
    gameResults.wins++;
    winsInformation.textContent = gameResults.wins;
    addClass('win');

}

function increaseLostPoints() {
    gameResults.loses++;
    loosesInformation.textContent = gameResults.loses;
    addClass('lose');
}

function whoWin() {
    if (!gameChoice.userChoice) {
        resultInformation.className = '';
        resultInformation.textContent = 'You have to chose your option before you will click game button';
        resultInformation.classList.add('wrong');
    } else {
        resultInformation.classList.remove('wrong');
        if (gameChoice.userChoice == 'rock' && gameChoice.computerChoice == 'scissors') {
            addTextContent('won', 0);
            increaseWinPoints();
        } else if (gameChoice.userChoice == 'rock' && gameChoice.computerChoice == 'lizard') {
            addTextContent('won', 1);
            increaseWinPoints();
        } else if (gameChoice.userChoice == 'lizard' && gameChoice.computerChoice == 'paper') {
            addTextContent('won', 2);
            increaseWinPoints();
        } else if (gameChoice.userChoice == 'lizard' && gameChoice.computerChoice == 'spock') {
            addTextContent('won', 3);
            increaseWinPoints();
        } else if (gameChoice.userChoice == 'spock' && gameChoice.computerChoice == 'rock') {
            addTextContent('won', 4);
            increaseWinPoints();
        } else if (gameChoice.userChoice == 'spock' && gameChoice.computerChoice == 'scissors') {
            addTextContent('won', 5);
            increaseWinPoints();
        } else if (gameChoice.userChoice == 'scissors' && gameChoice.computerChoice == 'lizard') {
            addTextContent('won', 6);
            increaseWinPoints();
        } else if (gameChoice.userChoice == 'scissors' && gameChoice.computerChoice == 'paper') {
            addTextContent('won', 7);
            increaseWinPoints();
        } else if (gameChoice.userChoice == 'paper' && gameChoice.computerChoice == 'rock') {
            addTextContent('won', 8);
            increaseWinPoints();
        } else if (gameChoice.userChoice == 'paper' && gameChoice.computerChoice == 'spock') {
            addTextContent('won', 9);
            increaseWinPoints();
        } else if (gameChoice.computerChoice == 'rock' && gameChoice.userChoice == 'scissors') {
            addTextContent('lost', 0);
            increaseLostPoints();
        } else if (gameChoice.computerChoice == 'rock' && gameChoice.userChoice == 'lizard') {
            addTextContent('lost', 1);
            increaseLostPoints();
        } else if (gameChoice.computerChoice == 'lizard' && gameChoice.userChoice == 'paper') {
            addTextContent('lost', 2);
            increaseLostPoints();
        } else if (gameChoice.computerChoice == 'lizard' && gameChoice.userChoice == 'spock') {
            addTextContent('lost', 3);
            increaseLostPoints();
        } else if (gameChoice.computerChoice == 'spock' && gameChoice.userChoice == 'rock') {
            addTextContent('lost', 4);
            increaseLostPoints();
        } else if (gameChoice.computerChoice == 'spock' && gameChoice.userChoice == 'scissors') {
            addTextContent('lost', 5);
            increaseLostPoints();
        } else if (gameChoice.computerChoice == 'scissors' && gameChoice.userChoice == 'lizard') {
            addTextContent('lost', 6);
            increaseLostPoints();
        } else if (gameChoice.computerChoice == 'scissors' && gameChoice.userChoice == 'paper') {
            addTextContent('lost', 7);
            increaseLostPoints();
        } else if (gameChoice.computerChoice == 'paper' && gameChoice.userChoice == 'rock') {
            addTextContent('lost', 8);
            increaseLostPoints();
        } else if (gameChoice.computerChoice == 'paper' && gameChoice.userChoice == 'spock') {
            addTextContent('lost', 9);
            increaseLostPoints();
        } else {
            resultInformation.textContent = `It's draw, next time will be better!!!!`;
            resultInformation.className = '';
        }
    }
}

function clearUserChoice() {
    if (gameChoice.userChoice) document.querySelector(`[data-option="${gameChoice.userChoice}"]`).classList.remove('active');
    gameChoice.userChoice = '';
}

function startGame() {

    computerChoice();

    whoWin();

    clearUserChoice();
}

startButton.addEventListener('click', startGame);

gameButtons.forEach(gameButton => {
    gameButton.addEventListener('click', userChoice);
});