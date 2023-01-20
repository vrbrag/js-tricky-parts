function guessingGame() {
   let randNum = Math.floor(Math.random() * 100);
   let isOver = false;
   let turn = 0;

   return function game(guess) {
      if (isOver === true) return `The game is over, you already won!`
      turn++
      if (guess === randNum) {
         isOver = true
         return `You win! You found ${randNum} in ${turn} guesses.`;
      }
      if (guess < randNum) return `${guess} is too low!`;
      if (guess > randNum) return `${guess} is too high!`;
   }
}

module.exports = { guessingGame };
