const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
const letters = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
const card = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.dataset.letter = letters[index];
});
let flippedCards = [];

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (flippedCards.length < 2) {
      flippedCards.push(card);
      card.classList.add('flipped');

      if (flippedCards.length === 2) {
        setTimeout(() => {
          if (flippedCards[0].dataset.letter === flippedCards[1].dataset.letter) {
            // Match! Keep cards face up
          } else {
            // No match! Flip cards back over
            flippedCards.forEach((card) => {
              card.classList.remove('flipped');
            });
          }
          flippedCards = [];
        }, 1000);
      }
    }
});
});
unction checkGameOver() {
    const faceUpCards = document.querySelectorAll('.card.flipped');
    if (faceUpCards.length === 16) {
      // Game over! Display winning message
      alert('Congratulations! You won the game!');
    }
  }