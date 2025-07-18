const board = document.getElementById("chessboard");
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    const isWhite = (row + col) % 2 === 0;
    square.className = isWhite ? "white" : "black";
    board.appendChild(square);
  }
}