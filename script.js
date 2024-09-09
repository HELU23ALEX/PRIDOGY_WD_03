// const cells = document.querySelectorAll(".cell");
// let boardState = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";

// cells.forEach((cell) => {
//   cell.addEventListener("click", handleCellClick);
// });

// function handleCellClick(event) {
//   const index = event.target.dataset.index;
//   if (boardState[index] === "") {
//     boardState[index] = currentPlayer;
//     event.target.textContent = currentPlayer;
//     if (checkWinner()) {
//       alert(`${currentPlayer} wins!`);
//       resetGame();
//     }
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//   }
// }

// function checkWinner() {
//   const winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   return winningCombinations.some((combination) => {
//     return combination.every((index) => {
//       return boardState[index] === currentPlayer;
//     });
//   });
// }

// function resetGame() {
//   boardState = ["", "", "", "", "", "", "", "", ""];
//   cells.forEach((cell) => {
//     cell.textContent = "";
//   });
//   currentPlayer = "X";
// }

const cells = document.querySelectorAll(".cell");
const resultDiv = document.getElementById("res");
const restartDiv = document.getElementById("restart");
let boardState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {
  const index = event.target.dataset.index;
  if (boardState[index] === "") {
    boardState[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (checkWinner()) {
      resultDiv.innerHTML = `${currentPlayer} wins!`;
      // resetGame();
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return boardState[index] === currentPlayer;
    });
  });
}

function resetGame() {
  boardState = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "X";
  resultDiv.textContent = ""; // Clear the result message
}

function restartGame() {
  boardState = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  resultDiv.textContent = "";
}
