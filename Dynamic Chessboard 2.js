const board = document.getElementById("chessboard");
// Unicode Chess Pieces ♟️
const pieces = {
  r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", p: "♟",
  R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔", P: "♙"
};
// Standard board setup using FEN-like layout
const initialBoard = [
  "rnbqkbnr",
  "pppppppp",
  "        ",
  "        ",
  "        ",
  "        ",
  "PPPPPPPP",
  "RNBQKBNR"
];
let selectedSquare = null;
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    const isWhite = (row + col) % 2 === 0;
    const pieceChar = initialBoard[row][col];

    square.className = `square ${isWhite ? "white" : "black"}`;
    square.dataset.row = row;
    square.dataset.col = col;

    if (pieceChar !== " ") {
      square.textContent = pieces[pieceChar];
    }

    square.addEventListener("click", () => {
      if (selectedSquare) {
        selectedSquare.classList.remove("selected");
      }
      selectedSquare = square;
      square.classList.add("selected");
    });

    board.appendChild(square);
  }
}