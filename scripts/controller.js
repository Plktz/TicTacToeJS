window.addEventListener("load", createTicTacToe);

function createTicTacToe() {
  let grid = document.createElement("div");
  let turn = 0;
  
  let winBanner = document.createElement("p");
  
  let resetButton = document.createElement("button");
  resetButton.addEventListener("click", reset);
  resetButton.innerText = "Reset";
  
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
  document.body.appendChild(resetButton);
  document.body.appendChild(winBanner);

  function update(r, c, btn) {
    let player = (turn % 2) + 1;
    let win = ticTacToe.update(r, c, turn);
    switch (win) {
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

  function reset() {
    document
      .querySelectorAll(".gridButton")
      .forEach((gridBn) => (gridBn.innerText = "-"));
    winBanner.innerText = '';
    turn = 0;
    ticTacToe.reset();
  }
}