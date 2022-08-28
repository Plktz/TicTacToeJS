var ticTacToe = {
  gridSize: 3,
  emptyValue: 0,
  grid: 0,
  win: 1,
  fail: -1,
  cellOccupied: -2,
  reset: () => {
    grid = Array(this.gridSize)
      .fill()
      .map(() => Array(this.gridSize).fill(this.emptyValue));
  },
  update: function (r, c, turn) {
    let player = (turn % 2) + 1;
    if (this.grid[r][c] === this.emptyValue) {
      // Empty cell
      this.grid[r][c] = player;
      return this.check(turn);
    } else {
      return this.cellOccupied;
    }
  },

  check: function (turn) {
    let match = 0;
    if (turn < 4) {
      return this.fail;
    } else {
      //Checking Rows
      for (let i = 0; i < this.gridSize; i++) {
        if (this.grid[i][0] == this.emptyValue) {
          continue;
        } else {
          match = 0;
          for (let j = 1; j < this.gridSize; j++) {
            if (this.grid[i][0] == this.grid[i][j]) {
              match++;
            } else {
              break;
            }
          }
          if (match === this.gridSize - 1) {
            return this.win;
          }
        }
      }

      //Checking Columns
      for (let i = 0; i < this.gridSize; i++) {
        if (this.grid[0][i] == this.emptyValue) {
          continue;
        } else {
          match = 0;
          for (let j = 1; j < this.gridSize; j++) {
            if (this.grid[0][i] == this.grid[j][i]) {
              match++;
            } else {
              break;
            }
          }
          if (match === this.gridSize - 1) {
            return this.win;
          }
        }
      }

      if (this.grid[0][0] != this.emptyValue) {
        match = 0;
        for (let i = 1, j = 1; i < this.gridSize; i++, j++) {
          if (this.grid[0][0] === this.grid[i][j]) {
            match++;
          } else {
            break;
          }
        }
        if (match === this.gridSize - 1) {
          return this.win;
        }
      }

      if (this.grid[this.gridSize - 1][0] != this.emptyValue) {
        match = 0;
        for (let i = this.gridSize - 2, j = 1; j < this.gridSize; i--, j++) {
          if (this.grid[this.gridSize - 1][0] == this.grid[i][j]) {
            console.log(i + " " + j);
            match++;
          } else {
            break;
          }
        }
        if (match === this.gridSize - 1) {
          return this.win;
        }
      }
    }
    return this.fail;
  },
};

ticTacToe.grid = Array(ticTacToe.gridSize)
  .fill()
  .map(() => Array(ticTacToe.gridSize).fill(ticTacToe.emptyValue));
