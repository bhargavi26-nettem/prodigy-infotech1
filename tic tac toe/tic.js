let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const cells = document.querySelectorAll('.cell');

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (gameActive && board[index] === '') {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkWinner();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`Player ${board[a]} wins!`);
      gameActive = false;
      return;
    }
  }

  if (!board.includes('')) {
    alert('Draw!');
    gameActive = false;
  }
}

// Simple AI for 'O' player
setInterval(() => {
  if (currentPlayer === 'O' && gameActive) {
    let availableCells = board.map((cell, index) => cell === '' ? index : null).filter(cell => cell !== null);
    let randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    board[randomCell] = 'O';
    cells[randomCell].textContent = 'O';
    checkWinner();
    currentPlayer = 'X';
  }
}, 1000);