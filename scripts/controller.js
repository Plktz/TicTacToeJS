window.addEventListener("load", createTicTacToe);

function createTicTacToe() {
  let grid = document.createElement("div");
  let turn = 0;
  const playerChar = {
    1: "X",
    2: "O",
  };
  for (let i = 0; i < ticTacToe.gridSize; i++) {
    for (let j = 0; j < ticTacToe.gridSize; j++) {
      let gridBtn = document.createElement("button");
      gridBtn.setAttribute("class", "gridButton");
      gridBtn.addEventListener("click", () => update(i, j, gridBtn));
      gridBtn.innerText = "-";
      grid.appendChild(gridBtn);
    }
    grid.appendChild(document.createElement("br"));
  }
  document.body.appendChild(grid);

  function update(r, c, btn) {
    let winBanner = document.createElement("p");
    document.body.appendChild(winBanner);
    let player = (turn % 2) + 1;
    let win = ticTacToe.update(r, c, turn);
    console.log(win);
    switch (win) {``
      case ticTacToe.win:
        winBanner.innerText = `Player ${player} won`;
        btn.innerText = playerChar[player];
        break;
      case ticTacToe.cellOccupied:
        break;
      default:
        turn++;
        btn.innerText = playerChar[player];
    }
  }
}
