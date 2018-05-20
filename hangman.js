class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`;
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`;
        } else {
            return 'Great work! You guessed the word.';
        }
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter));
        console.log(`Finished status ${finished}`);
        if (this.remainingGuesses === 0) {
            this.status = 'failed';
        } else if (finished) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
        this.getStatusMessage();
    }
    getPuzzle() {
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
    makeGuess(guess) {
        if (this.status !== 'playing') return;
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
}