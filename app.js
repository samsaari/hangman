const game1 = new Hangman('Cat', 2);
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.getStatusMessage();

function renderView(puzzle, guesses) {
    puzzleEl.textContent = puzzle;
    guessesEl.textContent = game1.getStatusMessage();
    console.log(game1.status);
}

function keyPress (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    const puzzle = game1.getPuzzle();
    const guesses = game1.remainingGuesses;
    renderView(puzzle, guesses);
    console.log(game1.status);
}

// Add eventlistener
window.addEventListener('keypress', keyPress);