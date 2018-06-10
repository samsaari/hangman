import Hangman from "./hangman";
import getPuzzle from "./requests";

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const resetButton = document.querySelector('#reset');
let game1;

// Functions
const renderView = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    renderView();
}

const keyPress = (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    const puzzle = game1.puzzle;
    const guesses = game1.remainingGuesses;
    renderView();
}

// Start new game
startGame();

// Add eventlistener's
window.addEventListener('keypress', keyPress);
resetButton.addEventListener('click', startGame);
