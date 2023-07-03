class Connect4 {
  constructor() {
    // Represents the grid with 6 rows and 7 columns
    this.grid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.gameOver = false;
    // Represents current player, 0 - not started, 1 - player 1, 2 - player 2
    this.player = 0;
  }

  play(col) {
    if (this.gameOver) return "Game has finished!";

    if (this.player !== 1) {
      this.player = 1;
    } else {
      this.player = 2;
    }

    let row = 0;

    for (let i = 5; i >= 0; i--) {
      if (this.grid[0][col] !== 0) {
        return "Column full!";
      }
      if (this.grid[i][col] === 0) {
        this.grid[i][col] = this.player;
        row = i;
        break;
      }
    }
    return this.checkWinner(row, col);
  }

  checkWinner(row, col) {
    // Check if the player has won in a vertical direction
    if (
      row < 3 &&
      this.grid[row][col] === this.player &&
      this.grid[row + 1][col] === this.player &&
      this.grid[row + 2][col] === this.player &&
      this.grid[row + 3][col] === this.player
    ) {
      this.gameOver = true;
      return `Player ${this.player} wins!`;
    }

    // Check if the player has won in a horizontal direction
    for (let i = 0; i < 4; i++) {
      if (
        this.grid[row][i] === this.player &&
        this.grid[row][i + 1] === this.player &&
        this.grid[row][i + 2] === this.player &&
        this.grid[row][i + 3] === this.player
      ) {
        this.gameOver = true;
        return `Player ${this.player} wins!`;
      }
    }

    // Check if the player has won in a diagonal (top-left to bottom-right) direction
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          this.grid[j][i] === this.player &&
          this.grid[j + 1][i + 1] === this.player &&
          this.grid[j + 2][i + 2] === this.player &&
          this.grid[j + 3][i + 3] === this.player
        ) {
          this.gameOver = true;
          return `Player ${this.player} wins!`;
        }
      }
    }

    // Check if the player has won in a diagonal (bottom-left to top-right) direction
    for (let i = 0; i < 4; i++) {
      for (let j = 5; j > 2; j--) {
        if (
          this.grid[j][i] === this.player &&
          this.grid[j - 1][i + 1] === this.player &&
          this.grid[j - 2][i + 2] === this.player &&
          this.grid[j - 3][i + 3] === this.player
        ) {
          this.gameOver = true;
          return `Player ${this.player} wins!`;
        }
      }
    }

    return this.player === 1 ? "Player 1 has a turn" : "Player 2 has a turn";
  }
}

module.exports = { Connect4 };
