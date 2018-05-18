const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter));
    console.log(`Finished status ${finished}`);
    if (this.remainingGuesses === 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });
    return puzzle;
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    console.log('You guessed ' + guess);
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
        this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--;
    }
    this.calculateStatus();
}
