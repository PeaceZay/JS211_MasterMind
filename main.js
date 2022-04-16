'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = () =>  {
let correctGuessLocation = 0
let correctGuessLetter = 0
let solutionArray = solution.split("")
let guessArray = guess.split("")
}

for (let i = 0; i < solutionArray.length; i++) {
  if (solutionArray[i] == guessArray[i]) {
    correctGuessLocations++
    solutionArray[i] = null
  }
}

for (let i = 0; i < solutionArray.length; i++) {
  let targetIndex = solutionArray.indexOf(guessArray[i])
  if (targetIndex > -1) {
    correctGuessLetters++
    solutionArray[targetIndex] = null
  }
}
return `${correctGuessLocations}-${correctGuessLetters}`
}

const mastermind = (guess) => {
  solution = 'abcd'; // Comment this out to generate a random solution
 if (guess == solution) {
   console.log("Congradulations! You Won!")
   return ("Congradulations! You Won!")

 } else {

 }
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}